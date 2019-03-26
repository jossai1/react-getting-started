import React, { Component } from 'react';
import Table from './Table';
import './App.css';
import Form from "./Form";
import { withRouter } from "react-router";

class Home extends Component {
    state = {
        characters: [
            {name: 'Jane', job: 'Software Engineer'}
        ]
    };

    removeCharacter = index => {
        const {characters } = this.state;
        this.setState({characters: characters.filter((element,i) => {
                return i !==  index;
            })
        });
    };

    handleSumbit = (character) => {
        this.setState(
            {characters: [...this.state.characters, character]
        });

    };

  render() {
      const {characters } = this.state;

    return (
        <div className="container">
            <Table characterData={characters}
                    removeCharacter={this.removeCharacter}
            />
            <Form userText={this.userText}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSumbit}
            />
        </div>
    );
  }
}

export default withRouter(Home);
