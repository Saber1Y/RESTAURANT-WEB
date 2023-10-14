import React,{ useState } from 'react'
import { AboutUs, Chef, Findus, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import {Navbar } from './components'
import './App.scss';

export default function App() {
  return (
    <>
    <Navbar />
    <Header />
    <AboutUs />
    <Chef />
    <Findus />
    <Footer />
    <Gallery />
    <Intro />
    <Laurels />
    <SpecialMenu />
</>
  )
}
