import React from 'react'
import './App.css';
import ArticlesContainer from './Containers/ArticlesContainer'
import FavoritesContainer from './Containers/FavoritesContainer';

class App extends React.Component {
  state = {
    api: []
  }

  componentDidMount = () => {
    fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=Us77sDTWfyukAOFew4Mg681PWZK2AmjN')
    .then(r => r.json())
    // .then(data => console.log(data))
    .then(data => this.setState({api: data.results}))
  }


  render() {
    return (
      <div className="App">
        <h1>newspaper clippings</h1>
        <h2>a single page web app</h2>
        <hr>
        </hr>
        <div className="searchbar">
          this is where the searchbar lives
        </div>
        <hr>
        </hr>
        <div className="favorites-list">
          <FavoritesContainer />
        </div>
        <hr>
        </hr>
        <div className="articles-list">
          <ArticlesContainer articleArray={this.state.api}/>
        </div>
      </div>
    );
  }
}

export default App;
