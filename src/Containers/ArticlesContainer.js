import React from 'react'
import ArticleCard from '../Components/ArticleCard'

class ArticlesContainer extends React.Component {

    renderAllArticles = () => {
        return this.props.articleArray.map(articleObj => <ArticleCard key={articleObj.id} article={articleObj}/>)
    }

    render() {
        // console.log(this.props.articleArray)
        return (
            <div>
                <h1>Articles To View</h1>
                {this.renderAllArticles()}
            </div>
        )
    }

}

export default ArticlesContainer