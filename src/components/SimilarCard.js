import React from 'react'
import { Link } from 'react-router-dom';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';


const SimilarCard = (props) => {
    return (
        <Link to={`/movie/${props.movieobj.id}`}>
            <div className="similar">
                <img src={IMAGE_URL + props.movieobj.poster_path} alt={props.movieobj.title} />
                <div className="similar__bg"></div>
                <h2 className="similar__name">{props.movieobj.title}</h2>
            </div>
        </Link>
    )
}

export default SimilarCard;
