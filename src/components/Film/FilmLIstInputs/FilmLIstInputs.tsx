import React, {Component} from 'react';
import {Film} from "../../../types";

interface FilmListProps {
  film: Film;
  onDelete: React.MouseEventHandler<HTMLButtonElement>;
  onChangeInput: React.ChangeEventHandler<HTMLInputElement>;
}

interface State {
  film: Film;
}


class FilmLIstInputs extends Component<FilmListProps, State> {

  state: State = {
    film: this.props.film
  }

  shouldComponentUpdate(nextProps: Readonly<FilmListProps>, nextState: Readonly<State>): boolean {
    return nextProps.film.filmName !== nextState.film.filmName;
  }

  render() {
    return (
      <>
        <input
          type="text"
          value={this.props.film.filmName}
          onChange={this.props.onChangeInput}
        />
        <button
          onClick={this.props.onDelete}
        >X
        </button>
      </>
    );
  }
}

export default FilmLIstInputs;