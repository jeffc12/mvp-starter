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
    this.props.onSearch();
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


  onThisTag() {
    console.log('passdowntoOntag', this.state.current);
    this.props.onTag(this.state.current);
  }


  render () {
    

    return (
    <div>
      <input type='text' value={this.state.current} onChange={this.onChange.bind(this)}></input>
      <button onClick={this.onThisTag.bind(this)}>Enter</button>
      <button onClick={this.dropDB.bind(this)}>Reset</button>
      <button onClick={this.onThisSearch.bind(this)}>Display Yourself</button>


    </div>)
  }
}


export default Search;
