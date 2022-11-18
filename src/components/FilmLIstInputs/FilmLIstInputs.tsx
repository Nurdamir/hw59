import React, {Component} from 'react';
import {Film} from "../types";

interface FilmListProps {
  film: Film;
  onDelete: (id: string) => void;
  onChange: (filmName: string, id: string) => void;
}

interface State {
  film: Film;
}


class FilmLIstInputs extends Component<FilmListProps, State> {
  state: State = {
    film: this.props.film
  }


  // shouldComponentUpdate(nextProps: Readonly<FilmListProps>, nextState: Readonly<State>, nextContext: any): boolean {
  //   return nextProps.film.filmName !== nextProps.film.filmName;
  // }

  // shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
  //   return this.props.author !== nextProps.author || this.props.title !== nextProps.title;

  // if (this.props.author === nextProps.author && this.props.title === nextProps.title) {
  //   return false;
  // }
  // return true;
  //  Это первый вариант!
// }


  render() {
    return (
      <>
        <input
          type="text"
          value={this.props.film.filmName}
          onChange={(e) => this.props.onChange(e.target.value, this.props.film.id)}
        />
        <button
          onClick={() => this.props.onDelete(this.props.film.id)}
        >X
        </button>
      </>
    );
  }
}

export default FilmLIstInputs;