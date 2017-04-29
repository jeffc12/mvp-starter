import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  var componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      type: 'GET',
      success: (data) => {
        console.log('GET SUCCESFUL');
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }


  Search(input) {
    var outside = this;
    $.ajax({
    url: '/items/import',
    type: 'POST',
    contentType: 'application/JSON',
    data: JSON.stringify({username: 'hi'})
    })
    .done(function(data) {
      outside.componentDidMount();
    console.log('POST Successful', data);
    })
    .fail(function(err) {
    console.error('POST failed', data);
    })
  }


  render () {
    return (<div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
      <h2>Search User</h2>
      <input type='text'></input>
      <button onClick={this.Search.bind(this)}>Enter</button>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
