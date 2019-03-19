import React, { Component } from 'react';
import logo from './logo.svg';
import Table from './Table';
import './App.css';
import Form from "./Form";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
    state = {
        characters: [],
        userText:''
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

export default App;
