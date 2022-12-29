import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <Head>
      <title>Noah H. | Home</title>
      <meta name="keywords" content="software developer, web developer, portfolio"/>
    </Head>
      <div className={styles.container}>
        <h1>Noah Huffman</h1>
        <img src="profile-pic (1).png" ></img>
      </div>

      
      <div className="iconLink">
        <div><h1 className="linksTxt1">Links</h1></div>
        <div className={styles.iconLinks}>
          <Link legacyBehavior href="https://github.com/NoahHuffman"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"/></Link>
          <Link legacyBehavior href="https://docs.google.com/document/d/1D0vR87UVTHDM8qblFFVxcznlV41OuLPxoQ2feYzTh9Q/edit"><img src="resumeIcon.png"/></Link>
          <Link legacyBehavior href="https://www.linkedin.com/in/noah-huffman-5a25751b7/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"/></Link>
        </div>
      </div>
      <div className="skill">
      <div className="skillsHeader"><h1>My Skills</h1></div>
        <div className={styles.iconsMain}>
                <img type="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
      </div>
      </div>
    </div>
  )
}
