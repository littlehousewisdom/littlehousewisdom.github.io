import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Wisdoms';
import { Wisdoms } from './Wisdoms';

class App extends Component {
  render() {

    const wisdoms = Wisdoms.items.map(item => {
      return (
        <div class="tile is-child box">
          <p>{item.text}</p>
        </div>
      );
    });

    return (
      <section class="section">
        <div class="container">
          <h1 class="title">
            The Little House
          </h1>

          <p class="subtitle">
            <strong>Book</strong> of <strong>Wisdom</strong>
          </p>
          <p class="subtitle">
            By <em>Laura Ingalls Wilder</em>
          </p>
          <hr/>
          <div class="content is-large">
            <div class="tile is-ancestor">
              <div class="tile is-vertical is-8">
                {wisdoms}
              </div>
            </div>
          </div>
        </div>
    </section>
    );
  }
}

export default App;
