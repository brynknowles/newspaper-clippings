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

  addToFaves = (id) => {
    // console.log("Id in App", id)
    let newArray = [...this.state.api] 
    let foundArticle = newArray.find(article => article.id === id)
    // console.log("found object", foundArticle)
    foundArticle.favorite = true
    this.setState({api: newArray})
  }

  removeFromFavorites = (id) => {
    let newArray = [...this.state.api] 
    let foundArticle = newArray.find(article => article.id === id)
    foundArticle.favorite = false
    this.setState({api: newArray})
  }

  findFaveArticles = () => {
    return this.state.api.filter(article => article.favorite)
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
        <h2><span>***</span></h2>
          this is where the searchbar lives
        </div>

        <div className="favorites-list">
          <h2><span>My Favorite Articles</span></h2>
          <FavoritesContainer faveArray={this.findFaveArticles()} clickHandler={this.removeFromFavorites}/>

        </div>
        <hr>
        </hr>
        <div className="articles-list">
          <h2><span>***</span></h2>
          <ArticlesContainer articleArray={this.state.api} clickHandler={this.addToFaves}/>
        </div>
      </div>
    );
  }
}

export default App;
