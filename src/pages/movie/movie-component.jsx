import React, { Component } from 'react';

import { APP_TITLE } from 'app-constants';

import { MovieDetailsComponent } from 'app-components/movie';
import { Spinner } from 'app-components';

export class MovieComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: null
    };
  }

  componentDidMount() {
    const {
      match: {
        params: {
          movieId
        }
      },

      fetchMovieById
    } = this.props;

    fetchMovieById(movieId)
      .then(data => {
        document.title = `${APP_TITLE} ${data.title}`;

        this.setState({
          movieData: data
        })
      });
  }

  componentWillUnmount() {
    document.title = `${APP_TITLE}`;
  }

  render() {
    let mdc = <Spinner />;

    if (this.state.movieData !== null) {
      mdc = <MovieDetailsComponent movieData={this.state.movieData} />
    }

    return (
      <div className="section">
        {mdc}

        <hr/>

        <p>
          Similar movies will be here soon!
        </p>
      </div>
    );
  }
}
