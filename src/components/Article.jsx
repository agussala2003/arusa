import React from 'react'
import Title from './Title'
import {useContext} from 'react'
import {TheContext} from '../context/TheContext'
import IndividualArticle from './IndividualArticle'
import Slider from "react-slick";


function Article() {
    const info = useContext(TheContext)
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        centerMode: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
            arrows: true,
            dots: true,
            infinite: true,
            centerMode: true,
            speed: 500,
            autoplay: true,
            infinite: true,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
                arrows: true,
                dots: true,
                infinite: true,
                centerMode: true,
                speed: 500,
                autoplay: true,
                infinite: true,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
            arrows: true,
            dots: true,
            infinite: true,
            centerMode: true,
            speed: 500,
            autoplay: true,
            infinite: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
        <Title name='titleProduct3' content='Enjoy our articles'/>
        <div className="articleCont">

            <Slider {...settings}>
                {
                    info.articulos.map((item, index) => {
                        return <IndividualArticle item={item} key={index}/>
                    })
                }
            </Slider>
        </div>
    </>
  )
}

export default Article