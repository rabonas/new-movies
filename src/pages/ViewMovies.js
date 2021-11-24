import React from 'react'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import ActorCard from '../components/ActorCard';
import SimilarCard from '../components/SimilarCard';
import apiCalls from '../config/api';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const ViewBack = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
`

const ViewMovies = () => {

    const [movieInfo, setMovieInfo] = useState({});
    const [actorInfo, setActorInfo] = useState([]);
    const [similarInfo, setSimilarInfo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        apiCalls.detail(id).then(data => {
            setMovieInfo(data);
        });

        apiCalls.actorsAndCast(id).then(data => {
            setActorInfo(data.cast);
        });

        apiCalls.similar(id).then(data => {
            setSimilarInfo(data.results);
        });
    }, [id])

    return (
        <div>
            <div className="view-movie__info">
                <ViewBack style={{backgroundImage: `url(${IMAGE_URL + movieInfo.backdrop_path })`}}>
                    <div className="view__bg" key={movieInfo.id}>
                        <div className="container">
                            <div className="row2">
                                <img src={IMAGE_URL + movieInfo.poster_path} alt={movieInfo.title} className="view-movie" style={{width: '30%'}} />
                                <div className="view-movie__text">
                                    <h3>{movieInfo.title ? movieInfo.title : movieInfo.name}</h3>
                                    <span className="info">Genres: { movieInfo.genres ? movieInfo.genres.map( el => <span>{el.name}</span>) : ''}</span>
                                    <span className="info">Country: { movieInfo.production_countries ? 
                                        movieInfo.production_countries.map( el => 
                                            <span>{el.name}</span>
                                        ) : ''}</span>
                                    <span className="info">Data: <span>{movieInfo.release_date}</span></span>
                                    <p className="view-movie__info_text">{movieInfo.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ViewBack>
                
            </div>
            <div className="container">
                <div className="row">
                    <Swiper breakpoints={{
                        "320": {
                        "slidesPerView": 3,
                        "spaceBetween": 5
                        },
                        "480": {
                        "slidesPerView": 4,
                        "spaceBetween": 10
                        },
                        "565": {
                        "slidesPerView": 4,
                        "spaceBetween": 20
                        },
                        "767": {
                        "slidesPerView": 6,
                        "spaceBetween": 20
                        },
                        "1199": {
                        "slidesPerView": 6,
                        "spaceBetween": 30
                        }
                    }}>
                        {actorInfo.map((el, i) => (
                        <SwiperSlide key={i} style={{backgroundColor: '#fff', padding: '5px'}}>
                            <ActorCard actorobj={el}/>
                        </SwiperSlide>))};
                    </Swiper>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <Swiper breakpoints={{
                        "320": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                        },
                        "480": {
                        "slidesPerView": 3,
                        "spaceBetween": 20
                        },
                        "565": {
                        "slidesPerView": 3,
                        "spaceBetween": 20
                        },
                        "767": {
                        "slidesPerView": 4,
                        "spaceBetween": 30
                        }
                    }}>
                        {similarInfo.map((el, i) => (
                        <SwiperSlide key={i} style={{backgroundColor: '#fff'}}>
                            <SimilarCard movieobj={el}/>
                        </SwiperSlide>))};
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default ViewMovies
