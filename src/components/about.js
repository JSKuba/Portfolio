import React from 'react'

const About = ({ data, shadow }) => {

  return (
    <article id="about">
      <div className="wrapper">
        <header>
          <img className="icon" src={data[1].children[0].properties.src} alt={data[1].children[0].properties.alt}/>
          <h2>
            {data[0].children[0].value}
            <span id="about-shadow" style={{transform: `translate3d(${shadow}%, -70%, 0)`}} className="shadow">{data[0].children[0].value}</span>
          </h2>
        </header>
        <p>
          {data[2].children[0].value}
          <img id="me" src={data[3].children[0].properties.src} alt={data[3].children[0].properties.alt}/>
        </p> 
      </div>
    </article>
  )
}

export default About
