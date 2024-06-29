import React ,{useEffect}from 'react';
import Header from './Header';
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import SearchMovie from './SearchMovie';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';

const Browse = () => {
  const user = useSelector(store => store.app.user);
  const toggle = useSelector(store => store.movie.toggle);
  const navigate = useNavigate();
  
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  
  useEffect(() => {
    if (!user) {
        navigate("/");
    }
}, []);

  return (
    <div >
            <Header />
            <div>
                {
                    toggle ? <SearchMovie /> : (
                        <>
                            <MainContainer />
                            <MovieContainer />
                        </>

                    )
                }

            </div>
    </div>
  )
}

export default Browse
