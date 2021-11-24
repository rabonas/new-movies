import React from 'react'
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import apiCalls from '../config/api';

const Genres = () => {
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        apiCalls.genre().then(data => {
            setGenre(data.genres);
        });
    },[])

    const genres = genre.map(el => <NavLink to={`/catalog/${el.id}`} key={el.id} className="genre">{el.name}</NavLink>)

    return (
        <div className="genres">
            {genres}
        </div>
    )
}

export default Genres;
