import Header from './components/Header/index'
import './styles/global.css'
import Post from './components/Post'
import styles from './styles/app.module.css'
import Sidebar from './components/Sidebar'
import {PostProps} from './components/Post'


interface Posts extends PostProps{
    id: number;

} 

const posts:Posts[] = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/59948274?s=400&u=1e37892074d71214d1dfcc662427bb2e73d3ea86&v=4',
      name: 'Hudson Felix',
      role:'Web Developer'
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type:'link', content: 'jane.design/doctorcare'},   
    ],
    publishedAt: new Date('2022-06-15 15:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80',
      name: 'Ezio',
      role:'CTO at CatTech'
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type:'link', content: 'jane.design/doctorcare'},   
    ],
    publishedAt: new Date('2022-06-15 10:00:00'),
  },
]


function App() {
  
  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
       <Sidebar/>
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>

      </div>
    </>
  )
}

export default App
