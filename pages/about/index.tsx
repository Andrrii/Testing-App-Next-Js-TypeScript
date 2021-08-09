import styles from '../../styles/Home.module.css'
import Router from "next/router"
import MainComponent from '../../components/MainComponent'

export default function About ({res}) {

    const linkClickHandler = () => {
        Router.push('/')
    }


    return (
        <MainComponent title="About Page">
            <div className={styles.container}>
                <h2>{res.title}</h2>
                <h3>Butso4ka</h3>
                <button onClick={linkClickHandler}>Go back to Home</button>
                <button onClick={() => { Router.push('/posts/') }}>Go back to Posts</button>
            </div>
        </MainComponent>
    )
}


About.getInitialProps =  async () => {
    const response = await fetch(`${process.env.API_URL}/about`)
    const res = await response.json()

    return {res}
}