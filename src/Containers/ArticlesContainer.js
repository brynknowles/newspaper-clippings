import React from 'react'
import ArticleCard from '../Components/ArticleCard'

class ArticlesContainer extends React.Component {
    // console.log("props in ArticlesContainer: ", this.props)
    renderAllArticles = () => {
        return this.props.articleArray.map(articleObj => <ArticleCard key={articleObj.id} article={articleObj} clickHandler={this.props.clickHandler}/>)
    }

    render() {
        return (
            <div>
                {this.renderAllArticles()}
            </div>
        )
    }

}

export default ArticlesContainer