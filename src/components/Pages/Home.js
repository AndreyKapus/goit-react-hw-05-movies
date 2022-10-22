import { useState, useEffect } from 'react';
import { fetchMovies } from 'Servises/fetchMovies';
import { Title, MovieList, StyledLink, StyledUl } from 'Styles/Home.styled';

function Home() {
  const [popMovies, setPopMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(movies => setPopMovies(movies));
  }, []);

  return (
    <div>
      <Title>Trending tooday</Title>
      <StyledUl>
        {popMovies &&
          popMovies.map(({ movie, id, title }) => (
            <MovieList key={id}>
              <StyledLink
                to={{
                  pathname: `/movies/${id}`,
                }}
                movie={movie}
              >
                {title}
              </StyledLink>
            </MovieList>
          ))}
      </StyledUl>
    </div>
  );
}

export default Home;
