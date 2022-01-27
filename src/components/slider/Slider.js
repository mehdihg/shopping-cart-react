import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from "react-icons/md";
import jewel from './sliderimages/jewel.jpg'
import men from './sliderimages/men.jpg'
import women from './sliderimages/women.jpg'
import styles from './Slider.module.css'



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      
      <MdKeyboardArrowRight className={className}
      style={{ ...style, display: "block",color:'black',right:"30px",zIndex:'99999',width:'50px',height:'50px',opacity:'0.6' }}
      onClick={onClick}
      />
      
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <MdKeyboardArrowLeft className={className}
        style={{ ...style, display: "block",color:'black',left:"30px",zIndex:'99999',width:'50px',height:'50px',opacity:'0.6' }}
        onClick={onClick}
        />
    );
  }

export default function Slider() {

    var settings = {
      afterChange: function() {
        let siblings = document.querySelectorAll(".slick-slide");
        let current = document.querySelector(".slick-current");

        for(let i = 0; i < siblings.length; i++) {
            siblings[i].style.zIndex = 0;
        }
        current.style.zIndex = 10;
    },




        useCss:true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade:true,

      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      lazyLoad: true,
      
      
    };
    return (
      <Slick {...settings}>
        <div>
          <img className={styles.imageSlider} src={jewel} />
          <h3 className={styles.headingSlider}>Buy The Best Jewelery</h3>
          <button className={styles.buttonSlider} ><a href='#jewel'>Buy Here</a></button>
        </div>
        <div>
        <img className={styles.imageSlider} src={men} />
        <h3 className={styles.headingSlider}>Buy men's clothing</h3>
        <button className={styles.buttonSlider}><a href='#Men'>Buy Here</a></button>
        </div>
        <div>
        <img className={styles.imageSlider} src={women} />
        <h3 className={styles.headingSlider}>Buy women's clothing</h3>
        <button className={styles.buttonSlider}><a href='#Women' >Buy Now</a></button>
        </div>
       
      </Slick>
    );
  }