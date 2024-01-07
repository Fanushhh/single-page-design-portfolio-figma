import React from "react";
import styles from "./Work.module.css";
import { glideImages } from "./glideImages";
import Slider from "../Slider/Slider";
export default function Work() {
  

  return (
    <section className={styles.wrapper}>
      
        <h2>My work</h2>
        <Slider images={glideImages}/>
    </section>
  );
}
