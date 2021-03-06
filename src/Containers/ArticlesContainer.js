import React from 'react'
import ArticleCard from '../Components/ArticleCard'
import SearchForm from '../Components/SearchForm'

class ArticlesContainer extends React.Component {

    state = {
        searchValue: ""
    }

    renderAllArticles = () => {
        let filteredArticles = this.props.articleArray.filter(articleObj => articleObj.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
        
        return filteredArticles.map(articleObj => <ArticleCard key={articleObj.id} article={articleObj} clickHandler={this.props.clickHandler}/>)
    }

    searchForArticles = (e) => {
        this.setState({ searchValue: e.target.value })
    }

    render() {
        return (
            <div>
                <div className="search-form">
                    <SearchForm searchValue={this.state.searchValue} changeHandler={this.searchForArticles}/>
                </div>
                <div>
                    {this.renderAllArticles()}
                </div>
                
            </div>
        )
    }

}

export default ArticlesContainer
