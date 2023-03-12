import React from 'react';
import IMovies from '../model/IMovies';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

type Props = {
    movie: IMovies
};
const MoviesListItem = ({movie} : Props) => {
    const {
          id,
          title,
          year,
          genres,
          ratings,
          poster,
          contentRating,
          duration,
          releaseDate,
          averageRating,
          originalTitle,
          storyline,
          actors,
          imdbRating,
          posterurl
    }=movie;
    return (
        <Card style={{ width: '12rem'}}>
            <a href='/'>
                <Card.Img variant="top" src={posterurl} />
            </a>
            
                <Card.Body>
                    <Card.Title>
                        <div className='d-flex flex-column align-items-center'>
                            {title}
                        </div>
                        
                    </Card.Title>
                    <Card.Text>
                        <div className='d-flex flex-column align-items-center me'>
                            <a href='/'>
                                Add to favourite
                                <FontAwesomeIcon icon={faHeart} style={{ width: '1.5rem' }} className='rating-heart-icon'></FontAwesomeIcon>
                            </a> 
                        </div>
                    </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MoviesListItem;