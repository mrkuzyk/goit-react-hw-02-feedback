import { Component } from 'react';


export class App extends Component {
  
  state = {
    good: 1,
    neutral: 2,
    bad: 3
  }
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul>
          {Object.keys(this.state).map(key => <button key={key}>{ key}</button>)}
        </ul>
        <h1>Statistics</h1>
        <ul>
          <li>Good : {good} </li>
          <li>Neutral : {neutral} </li>
          <li>Bad : {bad} </li>
          <li>Total: {bad + good + neutral} </li>
          <li>Bad : {bad} </li>
        </ul>
      </div>
  );
  }
};
