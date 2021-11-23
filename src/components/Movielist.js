import React from 'react';
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import Loader from "../components/Loader";
import Api from '../config/api';
import apiCalls from '../config/api';



const MovieSlider = ({moviesArr}) => {
    // SwiperCore.use([Autoplay]);
    return (
        <div className="sw">
            <Swiper modules={[Autoplay]} breakpoints={{
                "320": {
                "slidesPerView": 2,
                "spaceBetween": 5
                },
                "480": {
                "slidesPerView": 2,
                "spaceBetween": 10
                },
                "565": {
                "slidesPerView": 2,
                "spaceBetween": 20
                },
                "767": {
                "slidesPerView": 3,
                "spaceBetween": 40
                },
                "1199": {
                "slidesPerView": 3,
                "spaceBetween": 50
                }
            }}
            // spaceBetween={50} slidesPerView={3} 
            loop autoplay={{ delay: 2000 , disableOnInteraction: false}} style={{padding: '10px 0'}}>
                {moviesArr.map(el => (<SwiperSlide key={el.id}><Movie movieobj={el} /></SwiperSlide>))}
            </Swiper>
        </div>
    )
}

const Movielist = ({type, title}) => {

    const [moviesList, setMoviesList] = useState([]);
    const [isLoader, setIsLoader] = useState(true)
    const [error, setError] = useState();

    useEffect(() => {
        
        // async function getMovies() {
        //     const data = await apiCalls.getMovies(type);
        //     console.log(data)
        // }

        // getMovies();

        apiCalls.getMovies(type).then(data => {
            setMoviesList(data.results);
            setIsLoader(false);
        }).catch( err => {
            setError(err.message);
        });

        // try {
        //     const data = await apiCalls.getMovies(type);
        //     setMoviesList(data.results);
        //     setIsLoader(false);
        // } catch(err) {
        //     setError(err.message);
        // }
        // getMovies();

        // fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${MY_API_KEY}`).then( res => {//      
        //     if(!res.ok) {
        //         throw Error('Serverdan ma`lumot olish xatolik!');
        //     }
        //     return res.json();
        // }).then( data => {
        //     setMoviesList(data.results);
        //     setIsLoader(false);
        // })
        // .catch((err) => {
        //     setIsLoader(false);
        //     setError(err.message);
        // });
    }, []);

    return (
        <div>
            <div className='row'><h2 className="movielist__title">{title}</h2> <Link to="/catalog" className="movie__link">all</Link></div>
            {isLoader ? <Loader/> : <MovieSlider moviesArr={moviesList} />}
            {error ? error : ''}
        </div>
    )
}

export default Movielist
