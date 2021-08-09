import { NextPageContext } from "next"
import Head from "next/head"
import Link from "next/link"
import Router from "next/router"
import { useEffect, useState } from "react"
import MainComponent from "../components/MainComponent"
import { MyPost } from "../interfaces/post"
import styles from '../styles/Home.module.css'

interface PostPageProps {
    posts: MyPost[]
}

export default function Posts({posts : serverPosts}: PostPageProps) {


    const linkClickHandler = () => {
        Router.push('/')
    }   
    
    const [posts,setPosts] = useState(serverPosts)

    const fetchUsers = async () => {
        const res = await fetch(` ${process.env.API_URL}/posts`)
        const posts = await res.json()
        setPosts(posts)
    }

  // в Next-Js трохи по іншому працюєму із fetch
    useEffect(() => {
        if(!serverPosts) {
            fetchUsers()
        }
     },[])

    if(!posts) {
        return (
            <MainComponent>
                <h1>Loading</h1>    
            </MainComponent>
        )
    }


    return (
        <MainComponent>
            <div className= {styles.container}>
                <h1> Posts-test </h1>
                {posts.map(post => (
                    <div className= {styles.card} key={post.id}>
                        <p>
                            <Link href = {`/post/[id]`} as = {`/post/${post.id}`}>
                                <a>{post.title}</a>
                            </Link>
                        </p>
                        <br />
                        <p>{post.body}</p>
                    </div>
                ))}
                <button onClick={linkClickHandler}>Go back to Home</button>
            </div>
        </MainComponent>
    )
}

// Отак отримуєм дані

Posts.getInitialProps =  async (ctx:NextPageContext) => {

    // if(!ctx.req) {
    //     return {posts: null}
    // }
    const res = await fetch(`${process.env.API_URL}/posts`)
    const posts: MyPost[] = await res.json()
    return {
        posts
    }
}

// /posts
// /posts/24