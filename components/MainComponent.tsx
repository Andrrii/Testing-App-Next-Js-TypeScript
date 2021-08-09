import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function MainComponent ( {children,title = 'Next App'} ) {
    return (
        <React.Fragment>
            <Head>
                <title>{title} | Next-JS Course</title>
                <meta name = 'keywords' content = 'next,javascript,nextJS,react,study' />
                <meta name = 'description' content = 'I make awesome app with Next-JS'/>
                <meta charSet = 'utf-8' />
            </Head>
            <nav>
                <Link href = {'/'}><a>Home</a></Link>
                <Link href = {'/about'}><a>About</a></Link>
                <Link href = {'/posts'}><a>Posts</a></Link>
            </nav>

            <main className = {styles.main}>
                {children}
            </main>
            <style jsx>{`
                nav {
                    position: fixed;
                    height: 60px;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: darkblue;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                }

                nav a {
                    color: white;
                    margin: 1rem;
                    text-decoration: none;
                }
            `}</style>
        </React.Fragment>
    )   
}