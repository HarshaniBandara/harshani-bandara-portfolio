import Image from 'next/image'
import "../app/app.scss"
import Navbar from './components/navbar/Navbar'
import Test from './Test'
import React from 'react';
export default function Home() {
  return (
    <div>
      <section> 
        <Navbar/>
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>contact</section>
     
    </div>
  )
}
