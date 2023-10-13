import React, { useState } from 'react'
import { AboutUs, Chef, Findus, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import {Navbar } from './components'
import './App.scss';

export default function App() {
  return (
    <>
    <h1 className='hii'>hello</h1>
    <AboutUs />
    <Chef />
    <Findus />
    <Footer />
    <Gallery />
    <Header />
    <Intro />
    <Laurels />
    <Navbar />
    <SpecialMenu />
</>
  )
}
