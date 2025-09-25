// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import stackOverflowImg from './assets/stackOverflow.png'
import codePathImg from './assets/CodePath.png'
import githubImg from './assets/github.png'
import uclaIMG from './assets/UCLA.png'
import acmImg from "./assets/ACM.png"
import uclaDeanImg from "./assets/UCLADean.png"
import googleImg from "./assets/google.png"
import img3blue1brown from "./assets/3blue1brown.jpg"
import leetcodeImg from "./assets/LeetCode.png"

type block = {
  id: number;
  title: string;
  type: "event" | "resource";
  date?: string;
  location?: string;
  link: string;
  image: string;
}

const blocks: block[] = [
  {
    id: 1,
    title: "Stack Overflow",
    type: "resource",
    link: "https://stackoverflow.com/",
    image: stackOverflowImg
  },
  {
    id: 2,
    title: "CodePath",
    type: "resource",
    link: "https://www.codepath.org/",
    image: codePathImg
  },
  {
    id: 3,
    title: "GitHub",
    type: "resource",
    link: "https://github.com/",
    image: githubImg
  },
  {
    id: 4,
    title: "MyUCLA",
    type: "resource",
    link: "https://my.ucla.edu/",
    image: uclaIMG,
  },
  {
    id: 5,
    title: "SEASnet",
    type: "resource",
    link: "https://www.seasnet.ucla.edu/",
    image: uclaIMG,
  },
  {
    id: 6,
    title: "ACM at UCLA",
    type: "resource",
    link: "https://www.uclaacm.com/",
    image: acmImg,
  },
  {
    id: 7,
    title: "Pizza With Dean",
    type: "event",
    link: "https://samueli.ucla.edu/message-from-the-dean-2025/",
    image: uclaDeanImg,
  },
  {
    id: 8,
    title: "Google at UCLA",
    type: "event",
    link: "https://gdg.community.dev/gdg-on-campus-university-of-california-los-angeles-los-angeles-united-states/",
    image: googleImg,
  },
  {
    id: 9,
    title: "3Blue1Brown",
    type: "resource",
    link: "https://www.3blue1brown.com/",
    image: img3blue1brown,
  },
  {
    id: 10,
    title: "LeetCode",
    type: "resource",
    link: "https://leetcode.com/",
    image: leetcodeImg,
  }

];

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <header className="header">
        <h1>UCLA CS Community Board</h1>
        <p style={{ color: 'yellow' }}>Events & resources for Bruins learning software engineering</p>
      </header>

      <section className="cards">
        {blocks.map((block, index) => (
          <div className="card" key={index}>
            <img src={block.image} alt={block.title} className="card-img" />
            <span className={`${block.type}`}>{block.type}</span>
            <h3>{block.title}</h3>
            {block.date && <p><strong>Date:</strong> {block.date}</p>}
            {block.location && <p><strong>Location:</strong> {block.location}</p>}
            <a
              href={block.link}
              target="_blank"
              rel="noreferrer"
              className="cta"
            >
              Learn more
            </a>
          </div>
        ))}
      </section>
    </>
  )
}

export default App
