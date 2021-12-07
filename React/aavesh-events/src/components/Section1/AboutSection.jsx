import React,{useState,useEffect} from "react";
import "./aboutsection.css";
import Button from "../Button/Button";
import pdf from "../../aavesh.pdf";
import logo from '../../Images/eventb.png'
import about1 from '../../Images/about1.jpg'
import about2 from '../../Images/abou2.jpeg'
function AboutSection() {
   
  return (
    <>
      <section className="home-about">
        <div className="habout-con">
          <div className="habout-content">
            <p className="habout-subheading">JOIN THE EVENT</p>
            <h1 className="habout-heading">TECHतत्त्व</h1>
            <p className="habout-para">
              Techtatva is the technical and social event conducted by AAVESH,
              IIIT Una. It marks days of absolute ecstasy providing participants
              a competing platform in technical, non-technical and some fun
              events.<br/><br/>
              It is an avenue to be comforted from the routine life and
              to embrace the fun. Planned as a ‘for the students, of the
              students, by the students’ event, the festival is the most awaited
              event of the year.
            </p>
            <div className="habout-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="habout-btn-groups">
              <Button classs="habout-btn-color" text="Read More" />
              <Button classs="habout-btn-color" target="_blank" link={pdf} text="Download Broucher" />
            </div>
          </div>
          <div className="habout-imgs composition">
              
              <img className="composition__photo " src={about2} alt="" />
             
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
