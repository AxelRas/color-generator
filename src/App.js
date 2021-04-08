import { Component } from "react";
import $ from 'jquery';
import Colors from './components/Colors';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#f15025'
    }

    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    $('#submit-btn').css("background-color", this.state.color);
  }

  componentDidUpdate() {
    $('#submit-btn').css("background-color", this.state.color);
  }

  submit() {
    this.setState({
      color: document.getElementById('input-text').value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div id="title"><h1>Color generator</h1></div>
          <div id="controls">
            <input id="input-text" placeholder={this.state.color} type="text"></input>
            <button onClick={this.submit} id="submit-btn">Submit</button>
          </div>
        </div>

        <Colors data={this.state.color} />
      </div>
    );
  }
}

export default App;
