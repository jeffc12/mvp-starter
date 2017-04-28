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
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
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
    $.ajax({
    url: '/items/import',
    type: 'POST',
    contentType: 'application/JSON',
    data: JSON.stringify(username: input)
    })
    .done(function(data) {
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
      <h1>Search User</h1>
      <input type='text'></input>
      <button>Enter</button>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
