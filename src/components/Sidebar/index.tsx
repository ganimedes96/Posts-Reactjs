import {PencilLine} from 'phosphor-react'
import { Avatar } from '../Avatar'
import styles from './Sidebar.module.css'


export default function Sidebar (){
    return(
        <aside className={styles.sidebar}>
           <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1558544956-15f3c317e06a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
             /> 
            <div className={styles.profile}>
                <Avatar
                    src={'https://avatars.githubusercontent.com/u/59948274?s=400&u=1e37892074d71214d1dfcc662427bb2e73d3ea86&v=4'}
                />
                <strong>Hudson Felix</strong>
                <span>Web developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>

    )
} 