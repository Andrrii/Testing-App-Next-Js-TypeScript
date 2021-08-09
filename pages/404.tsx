import Link from 'next/link'
import MainComponent from '../components/MainComponent'
import styles from '../styles/Home.module.css'
import errorStyles from '../styles/error.module.css'

export default function Error404 () {
    return (
        <MainComponent title = 'Error 404'>
            <div className= {styles.container}>
                <h1>LOL | 404</h1>
                <p>Please <Link href = '/'><a className = {errorStyles.errorLink}>go back</a></Link> to the Home page.</p>
            </div>
        </MainComponent>
       )
}