import React, {Component} from 'react';
import InputForm from "../FilmInputForm/InputForm";
import {Film} from "../../../types";
import FilmLIstInputs from "../FilmLIstInputs/FilmLIstInputs";

interface State {
  films: Film[];
}

class Films extends Component<{}, State> {
  state: State = {
    films: [],
  }

  addFilmToList(newFilm: Film) {
    this.setState({films: [...this.state.films, newFilm]})
  }

  deleteFilmFromList(id: string) {
    const copyFilms = [...this.state.films];
    copyFilms.splice(this.state.films.findIndex(item => item.id === id), 1);
    this.setState({films: copyFilms});
  }

  changeFilm(id: string, value: string) {
    const copyFilms = [...this.state.films];
    const index = copyFilms.findIndex(item => item.id === id);
    const copyFilmObj = {...this.state.films[index]}
    copyFilmObj.filmName = value;
    copyFilms[index] = copyFilmObj;
    this.setState({films: copyFilms})
  }

  render() {
    return (
      <>
        <h4 className="text-white">Blog about films</h4>
        <InputForm
          onSubmit={(film) => this.addFilmToList(film)}
        />
        <div>
          {this.state.films.length > 0 ? <h6 className="text-white">To watch list:</h6> : null}

          {this.state.films.map(film => (
            <FilmLIstInputs
              key={film.id}
              film={film}
              onDelete={() => this.deleteFilmFromList(film.id)}
              onChangeInput={(e) => this.changeFilm(film.id, e.target.value)}
            />
          ))}
        </div>
      </>
    )
  }

}


export default Films;