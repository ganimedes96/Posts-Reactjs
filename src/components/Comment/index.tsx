import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar'
import styles from './comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}


export default function Comment ({content,onDeleteComment}:CommentProps) {
   
    const [likeCount, setLikeCount] = useState(0);


   const handleDeleteComment = () => {
        onDeleteComment(content)
   }


   
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/59948274?s=400&u=1e37892074d71214d1dfcc662427bb2e73d3ea86&v=4"  />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Hudson Felix</strong>
                            <time title="11 de Maio as 08:13h" dateTime='2022-05-11 08:13:30'>Publicado a 1h</time>
                        </div>
                        <button 
                            title='Deletar comentario'
                            onClick={handleDeleteComment}
                            >
                            <Trash size={24}/>

                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={() => setLikeCount(likeCount + 1)}>

                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
             </div> 
        </div>
    )
}