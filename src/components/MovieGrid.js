import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import usePrevious from '../hooks'
import apiCalls from '../config/api';

const MY_API_KEY = '3b62cbd3019cef6ea3bcc5ecce56c01c';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';


const MovieGrid = ({genre}) => {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const prevGenre = usePrevious(genre);
    let list;

    const loadMore = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        if(prevGenre != genre) {
            list = [];
        } else {
            list = movies;
        }

        if(genre === undefined) {
            apiCalls.getMovies('top_rated').then(data => {
                setMovies(list.concat(data.results));
                setTotalPage(data.total_pages);
            });
        } else {
            apiCalls.discover({
                language: 'en-US',
                include_adult: false,
                with_genres: genre,
                page
            }).then(data => {
                setMovies(list.concat(data.results));
                setTotalPage(data.total_pages);
            });
        }
        // fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${MY_API_KEY}&language=en-US&include_adult=false&with_genres=${genre}&page=${page}`)
        // .then(res => res.json()).then(data => {
        //     setMovies(list.concat(data.results));
        //     setTotalPage(data.total_pages);
        // })
    }, [genre, page])

    return (
        <div className="movie-grid">
            <h2 className="movie-count"> Movies count: {movies.length}</h2>
            <div className="row3">
                {movies.map((el, i) => <Link to={`/movie/${el.id}`} key={i} className="movie-grid__movie">
                    <div>
                    <img src={IMAGE_URL + el.poster_path} alt={el.title} className="first-img" />
                    <img src={IMAGE_URL + el.backdrop_path} alt={el.title} className="second-img" />
                    <h3 className="movie-name">{el.title ? el.title : el.name}</h3>
                </div>
                </Link>)}
                {/* <button type="button" onClick={loadMore}>Load more</button> */}
                {page < totalPage ? <button type="button" onClick={loadMore} className="load custom-btn">Load more</button> : ''}
            </div>
        </div>
    )
}

export default MovieGrid
