import Link from "next/link"
import Head from "next/head"

import styles from '../styles/Home.module.css'
import MainComponent from "../components/MainComponent"

export default function Home() {
  return (
    <MainComponent title="Home Page">
      <div className={styles.container}>
        <h1>Hello Next-JS</h1>
        <p><Link href = {'/about'}><a>About</a></Link></p>
        <p><Link href = '/posts'><a>Posts</a></Link></p>
        <p>Lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem. Lorem ipsum dolor sit a met</p>
      </div>
    </MainComponent>
  )
}
