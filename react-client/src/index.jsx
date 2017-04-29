import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './search.jsx';
import reactCSS from 'reactcss';

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
    console.log(input);
    $.ajax({
    url: '/items/import',
    type: 'POST',
    contentType: 'application/JSON',
    data: JSON.stringify({username: input})
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
    const styles = reactCSS({
    'default': {
      body0: {
        background: '#F0FFF0',
        font: 'futura',
        boxShadow: '0 2px 4px rgba(0,0,0,.15)',

      },
      title: {
        fontSize: '2.8rem',
        justifyContent: 'center',
        alignItems: 'center',

      },
    },
  })


    return (
    <div style={styles.body0}>
      <h1 style={styles.title}>NAME OF THIS APP</h1>
      <h3>Search Hashtag</h3>
      <Search onSearch={this.Search.bind(this)}/>

      <List items={this.state.items}/>



    </div>
  )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
