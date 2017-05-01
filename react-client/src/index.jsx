import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './search.jsx';
import Graph from './components/graph.jsx';
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

  HistSearch(input) {
    $.ajax({
    url: '/history/import',
    type: 'POST',
    contentType: 'application/JSON',
    data: JSON.stringify({tag: input})
    })
    .done(function(data) {
    console.log('POST History Successful', data);
    })
    .fail(function(err) {
    console.error('POST History failed', data);
    })
  }


  render () {
    const styles = reactCSS({
    'default': {
      body0: {
        font: 'futura',

      },
      title: {
        fontSize: '2.8rem',
        justifyContent: 'center',
        alignItems: 'center',

      },
    },
  })


    return (

    <div className="text-center" style={styles.body0}>
      <div className="heading">COOL APP NAME HERE</div>
      <br></br>
      <h3>SEARCH A HASHTAG OR PEEP YOURSELF</h3>
      <Search onTag={this.HistSearch.bind(this)} onSearch={this.Search.bind(this)}/>

      <div className="text-center">
      <List items={this.state.items}/>


      <h3>Like Count Chart By ID</h3>
      </div>
      <Graph bar={this.state.items}/>
      </div>



  )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
