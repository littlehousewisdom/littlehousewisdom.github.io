import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './Wisdoms';
import { Wisdoms } from './Wisdoms';

class App extends Component {
  constructor() {
    super();

    // cache voice to avoid find voice on every click.
    this.voice = null;
  }

  speak(event, text) {

    // alert(text);

    if (!('speechSynthesis' in window)) {
      alert('TTS is not available');
      return;
    }

    if (!this.voice) {
      let voices = speechSynthesis.getVoices();

      for (var i in voices) {
          if (voices[i].lang === 'en-US') {
              this.voice = voices[i];
              break;
          }
      }
    }

    var msg = new SpeechSynthesisUtterance();
    msg.voice = this.voice;
    msg.rate = 1;   // TODO: allow user change it
    msg.pitch = 1;  // TODO: allow user change it
    msg.text = text;
    msg.onend = function(event) {
        console.log('Finished in ' + event.elapsedTime + 'milliseconds.');
    };

    speechSynthesis.speak(msg);
  }

  render() {
    const wisdoms = Wisdoms.items.map(item => {
      return (
        <div class="tile is-child box">
          <p>{item.text}</p>
          <a class="button" onClick={ (event) => this.speak(event, item.text)}>
            <span class="icon is-medium">
              <i class="fas fa-play"></i>
            </span>
            <span>Speak to me</span>
          </a>
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
            <strong>Book of Wisdom</strong>
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
