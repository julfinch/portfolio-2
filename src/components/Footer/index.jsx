import React from "react"
import "./style.scss"
import SectionHeader from "../SectionHeader";

export default function Footer() {
  return (
    <section className="footer">
      <SectionHeader title="Made in" />
      
      <h1 className="location" id="location-text">
        Rio de Janerio
      </h1>
    </section>
  )
}
