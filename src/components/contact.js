import React from 'react'

const Contact = ({ shadow, data }) => {

  let contactDivs = []
  for(let i = 2; i < data.length; i += 2) {
    contactDivs.push(
      <a key={i} className="contact-div" href={data[i+1].children[2].properties.href}>
          <h4>{data[i].children[0].value}</h4>
          <img src={data[i+1].children[0].properties.src} alt={data[i+1].children[0].properties.alt}/>
      </a>
    )
  }

  return (
    <article id="contact">
      <div className="wrapper">
        <header>
          <img className="icon" src={data[1].children[0].properties.src} alt={data[1].children[0].properties.alt}/>
          <h2>
            {data[0].children[0].value}
            <span style={{transform: `translate3d(${shadow}%, -70%, 0)`}} className="shadow">{data[0].children[0].value}</span>
          </h2>
        </header>
        <section id="contact-container">{contactDivs}</section>
      </div>
    </article>
  )
}

export default Contact
