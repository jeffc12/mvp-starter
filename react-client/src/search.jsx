import React from 'react';
import $ from 'jquery';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       current: ''
    }
  }

  onChange (e) {

    this.setState({
      current: e.target.value
    })
  }


  onThisSearch() {
    this.props.onSearch(this.state.current);
  }

  dropDB() {

    $.ajax({
      url: 'items/drop',
      type: 'GET',
    })
    .done(function(data){
      console.log('RESET COMPLETE');

    })
    .fail(function(err) {
      console.error('DATA BASE DID NOT REST');
    })
  }

  render () {
    console.log(this.state.current);

    return (
    <div>
      <input type='text' value={this.state.current} onChange={this.onChange.bind(this)}></input>
      <button onClick={this.onThisSearch.bind(this)}>Enter</button>
      <button onClick={this.dropDB.bind(this)}>Reset</button>


    </div>)
  }
}


export default Search;
