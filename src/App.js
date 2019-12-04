import React, {Component} from 'react';
import  { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      kittens:[],
      searchField:''
    };
  }

  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({kittens:users}));
  }

  handleChange = e => (this.setState({searchField: e.target.value}));

  render(){
    const{ kittens, searchField } = this.state;
    const filteredKittens =  kittens.filter(kittens => kittens.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
      <h1> My Awesome Kittens</h1>
      <SearchBox 
          placeholder='search Kittens...'
          handleChange={this.handleChange}
      />
    
      <CardList kittens={filteredKittens}>
      </CardList>
    </div>
    );
  }
}
export default App;
