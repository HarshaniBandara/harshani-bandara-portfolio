"use client";
import "../app/app.scss";
import Navbar from "./components/navbar/Navbar";
import React from "react";
import Hero from "./components/hero/Hero";
import Technology from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
export default function Home() {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Technology type="services" />
      </section>
      <section>
        <Services />
      </section>
      {/* <section id="Portfolio">
        <Technology type="portfolio" />
      </section> */}
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}
