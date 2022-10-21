import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  SearchResultList,
  ListItem,
  List,
} from '../Styles/MovieSearchResult.styled';

export const MoviesList = ({ movies, titlePage = null }) => {
  const location = useLocation();

  return (
    <>
      {titlePage && <h1>{titlePage}</h1>}

      <SearchResultList>
        {movies.map(({ id, title, name }) => (
          <List key={id}>
            <ListItem to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </ListItem>
          </List>
        ))}
      </SearchResultList>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ),
  titlePage: PropTypes.string,
};
