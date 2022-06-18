import { Avatar } from '../Avatar'
import Comment from '../Comment'
import styles from './post.module.css'
import {format,formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'


export interface PostProps {
    author: {
        avatarUrl: string;
        name: string;
        role: string
      },
      content: {
        type: 'paragraph' | 'link';
        content: string
      }[],
      publishedAt: Date
}

export default function Post ({author, publishedAt,content}: PostProps) {

    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true,
    })


    const handleCreateNewComment = (event:FormEvent) => {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    const handleNewCommentChange = (event:ChangeEvent<HTMLTextAreaElement>) => {

        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    const deleteComment = (commentToDelete: string) => {
        const commentsWithoutDeleteOne = comments.filter(comment =>{
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeleteOne)
    }

    const handleNewCommentInvalid = (event:InvalidEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('Esse campo e obrigatorio!')
    }

    const isNewCommentEmpty = newCommentText.length === 0 

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>    
                    </div>
                </div>
                 <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>  

            <div className={styles.content}>
                {content.map(item => {
                    if (item.type === 'paragraph'){
                        return <p key={item.content}>{item.content}</p>
                    }else if(item.type === 'link'){
                        return <p key={item.content}><a href="#">{item.content}</a></p>
                    }
                })}    

            </div>
            <form onSubmit={handleCreateNewComment}  className={styles.commentForm} >
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder="Deixe um comentario"
                    name="comment"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                    >

                    </textarea>
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty} className={styles.btn}>Publicar</button>

                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return(
                        <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                )
                            
                })}

            </div>
        </article>
    )
}