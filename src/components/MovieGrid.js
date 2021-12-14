import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import usePrevious from '../hooks'
import apiCalls from '../config/api';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieGrid = ({genre}) => {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const prevGenre = usePrevious(genre);

    let list;

    if(prevGenre !== genre) {
        list = [];
    } else {
        list = movies;
    }
    const loadMore = () => {
        setPage(page + 1);
        list.concat(movies)
    }

    useEffect(() => {
       

        if(genre === undefined) {
            apiCalls.getMovies('top_rated').then(data => {
                // 
                // setSliceMovies()
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
    }, [genre, page])

    return (
        <div className="movie-grid">
            <h2 className="movie-count"> Movies count: {movies.length}</h2>
            <div className="row3">
                {list.map((el, i) => <Link to={`/movie/${el.id}`} key={i} className="movie-grid__movie">
                    <div>
                    <img src={IMAGE_URL + el.poster_path} alt={el.title} className="first-img" />
                    <img src={IMAGE_URL + el.backdrop_path} alt={el.title} className="second-img" />
                    <h3 className="movie-name">{el.title ? el.title : el.name}</h3>
                </div>
                </Link>)}
                {page < totalPage ? <button type="button" onClick={loadMore} className="load custom-btn">Load more</button> : ''}
            </div>
        </div>
    )
}

export default MovieGrid;
