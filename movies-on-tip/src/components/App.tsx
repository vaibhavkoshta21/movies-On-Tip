import React from 'react';
import NavigationMenu from './NavigationMenu';
import Home from './Home';
import Container from 'react-bootstrap/esm/Container';
import LoadingIndicator from './common/LoadingIndicator';
import Rating from './common/Rating';
import MoviesListItem from './movies-list/MoviesListItem';
import IMovies from './model/IMovies';
import MoviesList from './movies-list/MoviesList';

const movies : IMovies = {
    "id": "96",
    "title": "Black Panther",
    "year": "2018",
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "ratings": [
      4,
      1,
      9,
      6,
      2,
      10,
      6,
      5,
      1,
      7,
      4,
      5,
      6,
      5,
      6,
      3,
      10,
      10,
      8,
      2,
      5,
      3,
      4,
      6,
      6,
      7,
      9,
      4,
      4,
      9
    ],
    "poster": "MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY500_CR0,0,337,500_AL_.jpg",
    "contentRating": "15",
    "duration": "PT134M",
    "releaseDate": "2018-02-14",
    "averageRating": 0,
    "originalTitle": "",
    "storyline": "After the events of Captain America: Civil War, King T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war.                Written by\nEditor",
    "actors": [
      "Chadwick Boseman",
      "Michael B. Jordan",
      "Lupita Nyong'o"
    ],
    "imdbRating": 7,
    "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY500_CR0,0,337,500_AL_.jpg"
}
  

const App = () => {
    return(
        <>
            <NavigationMenu/>
            <Container>
                <Home />
                {/*<LoadingIndicator size = "medium" message="Please wait while movies are being fetched"/>*/}
                {/*<Rating value = {5} className = "me-2" />
                5 (150 ratings)*/}
                {/*<MoviesListItem movie = {movies}/>*/}
                <MoviesList />
                
            </Container>
            
            
        </>
        
    );
};

export default App;