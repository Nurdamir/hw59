import React, {Component, FormEvent} from 'react';
import {Film} from "../../../types";

interface Props {
  onSubmit: (newFilm: Film) => void;
}

interface State {
  data: string
}

class FilmLIstInputs extends Component<Props> {
  state: State = {
    data: ''
  }


  add(e: FormEvent) {
    e.preventDefault()
    this.props.onSubmit({
      id: Math.random().toString(),
      filmName: this.state.data,
    });
    this.setState({data: ''});
  }


  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({data: e.target.value});
  }

  render() {
    return (
      <>
        <form onSubmit={(e) => this.add(e)}>
          <input
            type="text"
            value={this.state.data}
            onChange={(e) => this.onChange(e)}
          />
          <button type={"submit"}>Add</button>
        </form>
      </>
    );
  }
}

export default FilmLIstInputs;