import React, { Component } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Movies.scss';
import * as moviesActions from '../../utilities/redux/actions/moviesActions';
import Card from "../../components/Card/Card";
import Input from '../../components/Input/Input';
import Icon from '../../components/Icon/Icon';

class Movies extends Component {
  state = {
    searchValue: '',
    movies: [],
  };

  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  static getDerivedStateFromProps(props, state) {
    if (state.movies !== props.movies) {
      return {
        movies: props.movies,
      };
    }
    return null;
  }

  activeInput = value => {
    this.setState({ isActiveInput: value });
  };

  onChange = (val) => {
    this.setState({
      searchValue: val,
      searchRuValue: val,
    });

    if (val.length >= 3) {
      const { fetchMovies } = this.props;
      fetchMovies(val);
    }
  };

  render() {
    const { movies, searchValue } = this.state;

    return (
      <div className="content movies">
        <form className="search-documents">
          <Input
              className="search-input"
              type="text"
              value={searchValue}
              placeholder="Write here the name of the movie"
              onChange={this.onChange}
              activeInput={this.activeInput}
          />
          <Icon icon="search" className="search-bt" />
        </form>
        <div className="card-list">
          {
            movies.length ? movies.map(({Poster, Year, Type, Title, imdbID}) => (
                <Card
                    key={imdbID}
                    image={Poster}
                    date={Year}
                    description={Title}
                    type={Type}
                    onChangeToggle={() => {}}
                />
            )) : <div className="movies-card_title">Empty movie list</div>
          }
        </div>
      </div>
    );
  }
}

Movies.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies,
});

const mapDispatchToProps = {
  ...moviesActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
