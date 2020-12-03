import React from 'react'
import './App.css';
import ArticlesContainer from './Containers/ArticlesContainer'
import FavoritesContainer from './Containers/FavoritesContainer';


class App extends React.Component {
  state = {
    api: [],
    faveArticles: [],
  }

  componentDidMount = () => {
    fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=Us77sDTWfyukAOFew4Mg681PWZK2AmjN')
    .then(r => r.json())
    // .then(data => console.log(data))
    .then(data => this.setState({api: data.results}))
  }

  addToFaves = (article) => {
    // console.log("added article to faves", article)
    const faveArray = [...this.state.faveArticles, article]
    this.setState({ faveArticles: faveArray})
  }

  removeFromFaves = (article) => {
    const newArray = this.state.faveArticles.filter(articleObj => articleObj.id !== article.id)
    this.setState({faveArticles: newArray})
  }

  filteredArticles = () => {
    const uniqueArticles = Array.from(new Set(this.state.faveArticles))
    return uniqueArticles
  }

  render() {
    return (
      <div className="container">
        <h1 className="app-name">newspaper clippings</h1>
        <div>
          <hr>
          </hr>
        </div>
        <div className="searchbar">
          <h1>search form</h1>
        </div>

        <div className="favorites-list">
          <h1>favorites</h1>
          <FavoritesContainer faveArray={this.filteredArticles()} clickHandler={this.removeFromFaves}/>
        </div>
        <hr>
        </hr>
        <div className="articles-list">
          <h1>articles</h1>
          <ArticlesContainer articleArray={this.state.api} clickHandler={this.addToFaves}/>
        </div>
      </div>
    );
  }
}

export default App;
