import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  ['01','BuildPulse','Developer tooling','A focused workspace to monitor deployments, engineering signals, and release momentum.','React · Node.js · Postgres'],
  ['02','Clarity AI','Applied AI','An approachable research assistant that turns scattered notes into useful, cited briefs.','Python · LLMs · FastAPI'],
  ['03','Local Loop','Mobile experience','A community-first discovery app designed to make great nearby places feel findable.','React Native · Maps · Firebase']
]
function App(){return <main>
<nav><a className="brand" href="#top">AR<span>·</span></a><div className="links"><a href="#work">Work</a><a href="#roadmap">Roadmap</a><a href="#about">About</a></div><a className="cta" href="mailto:hello@example.com">Let’s talk ↗</a></nav>
<section className="hero" id="top"><p className="eyebrow"><i/> Available for new ideas</p><h1>Software with<br/><em>intention.</em></h1><div className="orb big"/><div className="orb small"/><div className="herofoot"><p>I’m a software builder exploring useful products, thoughtful systems, and the space where technology meets people.</p><a href="#work">↓</a></div></section>
<section className="intro" id="about"><p className="label">01 / A little about me</p><div><h2>I make things that feel <em>clear</em>, useful, and alive.</h2><p>My work blends product thinking with practical engineering. I enjoy taking an early idea all the way to a small, real thing someone can use.</p></div></section>
<section className="work" id="work"><div className="heading"><p className="label">02 / Selected work</p><a href="https://github.com/sathwikboddu" target="_blank">View GitHub ↗</a></div><div className="cards">{projects.map((p,i)=><article className={'card c'+i} key={p[0]}><div className="top">{p[0]} <b>↗</b></div><div><small>{p[2]}</small><h3>{p[1]}</h3><p>{p[3]}</p><mark>{p[4]}</mark></div></article>)}</div></section>
<section className="roadmap" id="roadmap"><p className="label">03 / On the workbench</p><h2>Proofs of concept<br/>I’m <em>exploring.</em></h2><div className="poc"><div><b>01</b><h3>Personal knowledge engine</h3><p>Turning saved links and scattered notes into an interconnected, searchable second brain.</p><span>Q4 2026</span></div><div><b>02</b><h3>Ambient focus companion</h3><p>A gentle productivity tool that adapts your environment to the task at hand.</p><span>Q1 2027</span></div><div><b>03</b><h3>Open-source component lab</h3><p>A small collection of expressive, accessible interface building blocks.</p><span>Ongoing</span></div></div></section>
<section className="skills"><p className="label">04 / My toolkit</p><div><h2>Built with curiosity,<br/><em>shipped with craft.</em></h2><div className="tags">{['React / Next.js','TypeScript','Node.js','Python','PostgreSQL','AI APIs','Figma','Git & GitHub'].map(x=><span key={x}>{x}</span>)}</div></div></section>
<footer><p className="label">05 / Get in touch</p><h2>Have a good<br/><em>idea?</em></h2><a className="email" href="mailto:hello@example.com">hello@example.com ↗</a><div className="bottom">© 2026 AR <span><a href="https://linkedin.com">LinkedIn</a> <a href="https://github.com/sathwikboddu">GitHub</a></span></div></footer>
</main>}
createRoot(document.getElementById('root')).render(<StrictMode><App/></StrictMode>)