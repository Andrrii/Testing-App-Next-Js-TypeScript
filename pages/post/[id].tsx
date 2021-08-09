import { useState,useEffect } from 'react'
import Link from "next/link";
import MainComponent from "../../components/MainComponent";
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';
import { MyPost } from "../../interfaces/post"

interface  PostPageProps {
    post: MyPost;
}

export default function Post({post: serverPost}: PostPageProps) {

    const [post,setPost] = useState(serverPost)
    const router = useRouter()

    useEffect(() => {
        async function load() {
            const response = await fetch(` ${process.env.API_URL}/posts/${router.query.id}`)
            const data = await response.json()

            setPost(data)
        }

        if(!serverPost) {
            load()
        }
    },[])

    if(!post) {
        return ( 
            <MainComponent>
                <h1>Loading ...</h1>
            </MainComponent>
        ) 
    }
    
    return (
        <MainComponent>
            <h1>{post.title}</h1>
            <h5>ID: {post.id}</h5>
            <h3>{post.body}</h3>
            <Link href = {'/posts'}><a>Back to List of Posts</a></Link>
        </MainComponent>
    )
}
//#region  Old Method
// Post.getInitialProps = async function(ctx) { // ctx is the context
//    const {req} = ctx // request - взаємодія на сервері
//    if (!req) {
//        return {post: null}
//    }
//    const response = await fetch(` http://localhost:4000/posts/${ctx.query.id}`)
//    const post = await response.json()

//     return {
//         post
//     }
// }
//#endregion

// New method

interface PostNextPageContext extends NextPageContext {
    id: string | number;
}

export async function getServerSideProps(ctx:PostNextPageContext) {
    const {req} = ctx // request - взаємодія на сервері
    if (!req) {
       return {post: null}
    }
    const response = await fetch(` ${process.env.API_URL}/posts/${ctx.query.id}`)
    const post: MyPost = await response.json()

     return {props : {post}}
}