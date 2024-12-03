import React from 'react'
import Footer from './Footer'
import Hero from './Hero'

function Layout({children,herotext}) {
  return (
    <div>
        <Hero herotext={herotext}/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout