import React from 'react'
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import Loader from "../components/Loader";
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import apiCalls from '../config/api';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const Back = styled.div`
    position: relative;
    padding: 30px 0 30px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
`

const Slider = () => {
    SwiperCore.use([Autoplay]);
    
    const [moviesList, setMoviesList] = useState([]);
    const [isLoader, setIsLoader] = useState(true)
    const [error, setError] = useState();

    useEffect(() => {
        apiCalls.getMovies('popular').then(data => {
            setMoviesList(data.results.slice(0, 4));
            setIsLoader(false)
        }).catch( err => {
            setError(err.message);
        });
    }, []);

    const ratings = document.querySelectorAll(".rating");

    ratings.forEach((rating) => {
    const ratingContent = rating.innerText;
    
    // const ratingScore = parseInt(ratingContent, 10);
    const num = Number(ratingContent)
    const scoreClass = num < 40 ? "bad" : num < 60 ? "meh" : "good";
    
    rating.classList.add(scoreClass);

    // const ratingColor = window.getComputedStyle(rating).backgroundColor;
    // const gradient = `background: conic-gradient(${ratingColor} ${num}%, transparent 0 100%)`;

    // rating.setAttribute("style", gradient);
    rating.innerHTML = `<span>${ratingContent}${
        ratingContent.indexOf("%") >= 0 ? "<small>%</small>" : ""
    }</span>`;
    });

    return (
        <div className="slider">
            {isLoader && error? <Loader/> : 
            <Swiper modules={[Autoplay]} slidesPerView={1} loop autoplay={{ delay: 2000 , disableOnInteraction: false}}>
            {moviesList.map(el => (
            <SwiperSlide key={el.id}>
                <Back style={{backgroundImage: `url(${IMAGE_URL + el.backdrop_path })`}}>
                    <div className="container" >
                        <div className="film" style={{display: "flex", justifyContent: 'space-between'}}>
                            <div className="slider__info">
                                <h2 className="slider__title">{el.title}</h2>
                                <p className="slider__text">{el.overview}</p>
                                <div className="rating">{el.vote_average * 10}</div>
                                <Link to={`/movie/${el.id}`} className="movie__link">View movie</Link>
                            </div>
                            <img src={IMAGE_URL + el.poster_path} alt={el.title} className="slider__img" />
                        </div>
                    </div>
                </Back>
            </SwiperSlide>))}
            </Swiper>
            }
        </div>
    )
}

export default Slider;