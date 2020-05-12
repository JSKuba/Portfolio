import React from 'react'

const Projects = ({ shadow, data }) => {

  const showAbout = arg => {
    if (arg.target.innerText === 'About') {
      arg.target.innerText = 'Hide'
    } else {
      arg.target.innerText = "About"
    }
    arg.target.parentNode.nextSibling.classList.toggle('hidden')
    arg.target.parentNode.parentNode.classList.toggle('focus-card')
    arg.target.parentNode.previousSibling.classList.toggle('hidden')
  }

  let cards = []
  for(let i = 3; i < data.length; i += 7) {
    cards.push(
      <section key={i} className="card">
        <a className="h3-link" alt={data[i+1].children[2].properties.alt} href={data[i+1].children[2].properties.href} >
          <h3>{data[i].children[0].value}</h3> 
        </a>
        <a alt={data[i+1].children[2].properties.alt} href={data[i+1].children[2].properties.href} >
          <img src={data[i+1].children[0].properties.src} alt={data[i+1].children[0].properties.alt} />
        </a>
        <p>{data[i+2].children[0].value}</p>
        <div className="buttons">
          <a className="btn-a" href={data[i+4].children[0].properties.href}>
            <button>{data[i+3].children[0].value}</button>
          </a>
            <button onClick={e => showAbout(e)}>{data[i+5].children[0].value}</button> 
        </div>
        <p className="hidden">{data[i+6].children[0].value}</p>
      </section>
    )
  }

  return (
    <article id="projects">
      <div className="wrapper">
        <header>
            <img className="icon" src={data[1].children[0].properties.src} alt={data[1].children[0].properties.alt} />
            <h2 id="projects-header">
              {data[0].children[0].value}
              <span style={{transform: `translate3d(-${50 + shadow / 10}%, ${shadow}%, 0)`}} className="shadow">{data[0].children[0].value}</span>
            </h2>
        </header>
        <p>{data[2].children[0].value}</p>
        <div className="cards-container">{cards}</div>
      </div>
    </article>
  )
}

export default Projects
