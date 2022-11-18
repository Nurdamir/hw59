import React, {Component} from 'react';
import InputForm from "../../components/FilmInputForm/InputForm";
import {Film} from "../../components/types";
import FilmLIstInputs from "../../components/FilmLIstInputs/FilmLIstInputs";

interface State {
  films: Films[]
}

class Films extends Component<{}, State> {

  state: State = {
    films: [],
  }

  // togglePostForm = () => {
  //   this.setState(prevState => ({
  //     ...prevState,
  //     postFormShow: !prevState.postFormShow,
  //   }))
  //
  // };

  // const addUser = (newUser: User) => {
  //   setUsers(prev => [...prev, newUser]);
  // }

  addFilmToList (newFilm: Film) {

  }

  render() {
    return (
      <div>
        <InputForm onSubmit={this.addFilmToList}/>

        {/*<FilmLIstInputs film={} onDelete={} onChange={}/>*/}

      </div>
    );
  }
}

export default Films;