import React from 'react';


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


  render () {

    console.log(this.state.current);
    return (
    <div>
      <input type='text' value={this.state.current} onChange={this.onChange.bind(this)}></input>
      <button onClick={this.onThisSearch.bind(this)}>Enter</button>

    </div>)
  }
}


export default Search;
