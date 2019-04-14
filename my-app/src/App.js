import React, { Component } from 'react';
import search from './magnifier-tool.png';
import './App.scss';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatiach: {id: 12, songName: "Hana Zelda", worngLine: "blah", correctLine:"boo"},
      home: !true
    };    
  }

  render() {
    return (
      <div className="App">
        <div className="header">HEADER</div>
        <div className="nav">NAV<Search></Search></div>
        <Main avatiach={this.state.avatiach} home={this.state.home}>
        </Main>
        <div className="aside">ASIDE</div>
        <div className="footer">FOOTER</div>
      </div>
    );
  }
}
class Main extends Component {
  render() {
    if (this.props.home === true) {
      return (
      <Home></Home>
      )
    }
    if (this.props.avatiach) {
      return (
      <Avatiach avatiach={this.props.avatiach}></Avatiach>
      )
    }
    return (<div className="main">MAIN</div>)
  }
}
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
    };    
  }
  
  handdleClick() {
    this.setState({search: !this.state.search})
  }
  
  render() {
    var serachInput
    if (this.state.search)  {
      serachInput = <div><input className = "search-input"></input><button>search</button></div>
    }
    return (
      <div>
        <img onClick = {() => this.handdleClick()} src = {search} className = "search-img"></img>
        {serachInput}
      </div>
    );    
  }
}
function Home() {
  return (
  <h1>Welcome to Avatiach</h1>
  )
}
function Avatiach(props) {
  console.log(props)
  return (
  <div>
    <h2>{props.avatiach.songName}</h2>
    <h3>{props.avatiach.worngLine}</h3>
    <h3>{props.avatiach.correctLine}</h3>
  </div>
  )
}
export default App;
