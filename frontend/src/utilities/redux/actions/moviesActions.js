import http from '../../http';
import apiEndpoints from '../../apiEndpoints';
import * as types from './actionTypes';
import { toast } from 'react-toastify';
import { store } from '../store';

export const setCurrentMovies = (movies) => {
  return {
    type: types.SET_MOVIES,
    payload: movies,
  };
};

export const addMoviesToHistory = (history) => {
    return {
        type: types.ADD_MOVIES,
        payload: history,
    };
};

export const deleteMovieFromHistory = (Keyword) => {
    return {
        type: types.DELETE_MOVIES,
        payload: Keyword,
    };
};

export const fetchMovies = (Keyword='') => {
    return (dispatch) => {
    const { history } = store.getState();

    const findMovies = history.find( f => f.Keyword === Keyword );
    if(findMovies) {
        if ((new Date().getTime() - new Date(findMovies.time).getTime()) < 30000) {
            dispatch(setCurrentMovies(findMovies.data));
            return;
        }

        dispatch(deleteMovieFromHistory(Keyword));
    }

    http.get(`${apiEndpoints.search}?Keyword=${Keyword}`)
      .then((res) => {
        if (res && res.data) {
            dispatch(setCurrentMovies(res.data));
            dispatch(addMoviesToHistory({ time: new Date(), Keyword, data: res.data }));
        }
      }).catch(() => {
        if (Keyword) {
            toast.info(`🦄 No movies with Keyward '${Keyword}' found`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        dispatch(setCurrentMovies([]));
      })
  };
};

