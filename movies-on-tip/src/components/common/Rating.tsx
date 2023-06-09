import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import  {faStar as faStarEmpty} from '@fortawesome/free-regular-svg-icons';
import './Rating.css';

type Props = {
    value: number,
    className: string
};

const Rating = ({value, className} : Props) => {
    const numFullStar = Math.floor(value);
    const numHalfStar = Math.round(value) - Math.floor(value);
    const numEmptyStar = 5 - (numFullStar + numHalfStar);
    return (
        <span className={`rating ${className}`}>
            {
                Array.from({length: numFullStar}).map(
                    (item, idx) =>(
                        <FontAwesomeIcon icon={faStar} key={idx} />
                    )
                )
                
            }
            {
                Array.from({length: numHalfStar}).map(
                    (item, idx) =>(
                        <FontAwesomeIcon icon={faStarHalfAlt} key={idx} />
                    )
                )
                
            }
            {
                Array.from({length: numEmptyStar}).map(
                    (item, idx) =>(
                        <FontAwesomeIcon icon={faStarEmpty} key={idx} />
                    )
                )
                
            }
        </span>
    );
};

Rating.defaultProps = {
    value: 5
};

export default Rating;