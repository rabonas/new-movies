import React from 'react'
import { useParams } from 'react-router-dom'
import Genres from '../components/Genres'
import MovieGrid from '../components/MovieGrid'

const Catalog = () => {
    const { genreid } = useParams()

    return (
        <div className="container">
            <div className="row4">
                <Genres/>
                <MovieGrid genre={genreid}/>
            </div>
        </div>
    )
}

export default Catalog
