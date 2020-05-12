import React, { useEffect, useState } from 'react'

const Header = ({ scale, scrollY, data, siteTitle }) => {
  const [shadowX, setShadowX] = useState(0)
  const [navHighlight, setNavHighlight] = useState(0)

  useEffect(() => {
    [...document.getElementsByTagName('li')].map((v, i) => {
      return v.addEventListener('click', () => {
        if(i === 0) {
          return window.scrollTo(0, 0)
        }
        return window.scrollTo(0, document.getElementById(v.textContent.toLowerCase()).offsetTop)
      })
    })
    document.getElementById('main-header').addEventListener('mousemove', v => {
      setShadowX(v.clientX / window.innerWidth * 30 - 15)
    })
  },[])

  useEffect(() => {
    const navBtn = document.getElementById('nav-btn')
    const nav = document.getElementsByTagName('nav')[0]

    navBtn.addEventListener('click', () => {
      return nav.classList.toggle('show')
    })

    if(scrollY > window.innerHeight * 3) {
     nav.classList.add('sticky-nav')
     
    } else {
      nav.classList.remove('sticky-nav')
    }

    if(scrollY > 0) {
      document.getElementById('h1').classList.add('invisible')
    } else {
      document.getElementById('h1').classList.remove('invisible')
    }

    if(scrollY > window.innerHeight * 3.5) {
      document.getElementById('background-blocks').classList.add('invisible')
    } else {
      document.getElementById('background-blocks').classList.remove('invisible')
    }
  })

  useEffect(() => {
    const arr = [...document.getElementsByTagName('article')]
    arr.unshift(document.getElementById('main-header'))
    arr.map((v, i) => {
      if (scrollY + window.innerHeight / 2 > v.offsetTop && scrollY + window.innerHeight / 2 < v.offsetTop + v.getBoundingClientRect().height) {
        if (navHighlight !== i) {
          return setNavHighlight(i)
        }
      }
      return null
    })
  }, [scrollY, navHighlight])

  useEffect(() => {
    [...document.getElementsByTagName('li')].map(v => {
      return v.classList.remove('nav-target')
    })
    document.getElementsByTagName('li')[navHighlight].classList.add('nav-target')
  }, [navHighlight])



  return (
    <header id="main-header">
      <nav>
        <ul id="nav-ul">
          {data.frontmatter.nav.map((v, i) => {
            return (
              <li key={i}>
                {v.charAt(0).toLocaleUpperCase() + v.slice(1)}
                <svg className="nav-select" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 200"><g id="Layer_1" data-name="Layer 1"><rect width="352" height="200"/></g><g id="Layer_2" data-name="Layer 2"><polyline points="352 0.01 312 176 46 26 26 168 136 25 230 186 352 0"/></g></svg>              
              </li>
            )
          })}
        </ul>
        <button id="nav-btn">
          <img desc="show menu button" alt="menu button" src={data.frontmatter.navBtn}/>
        </button>
      </nav>
      <h1 id='h1' style={{transform: `skewX(${shadowX}deg)`}}>{siteTitle}</h1>
      <div id="background-gradient" />
      <div id="background-blocks" style={{transform: `scale(${scale})`}}>
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1024"><title>blocks</title><path className="cls-1" d="M219.87,841V978H36.65V841H219.87m8-8H28.65V986H227.87V833Z"/><path className="cls-1" d="M841.9,703V887H598.68V703H841.9m6-6H592.68V893H847.9V697Z"/><path className="cls-1" d="M602.7,22V72H532.76V22H602.7m8-8H524.76V80H610.7V14Z"/><path className="cls-1" d="M1152.2,430v82H1040.59V430H1152.2m8-8H1032.59v98H1160.2V422Z"/><path className="cls-1" d="M314.7,145V363H26V145H314.7m8-8H18V371H322.7V137Z"/><path className="cls-1" d="M1262,754v248H934.24V754H1262m8-8H926.24v264H1270V746Z"/><path className="cls-1" d="M587,330v89H505.59V330H587m6-6H499.59V425H593V324Z"/><path className="cls-1" d="M488,572v89H406.59V572H488m6-6H400.59V667H494V566Z"/><path className="cls-1" d="M831,453v41H790.59V453H831m5-5H785.59v51H836V448Z"/><path className="cls-1" d="M716,570v43H673.59V570H716m4-4H669.59v51H720V566Z"/><path className="cls-1" d="M651,501v22H629V501h22m4-4H625v30h30V497Z"/><path className="cls-1" d="M906.48,235v82H825.59V235h80.89m7-7H818.59v96h94.89V228Z"/><rect className="cls-2" width="1280" height="1024"/></svg>
      </div>
    </header>
  )
}

export default Header
