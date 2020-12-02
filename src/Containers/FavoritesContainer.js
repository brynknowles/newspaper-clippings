import React from 'react'
import ArticleCard from '../Components/ArticleCard'

class FavoritesContainer extends React.Component {
    // console.log("props in favorites container", this.props)

    renderFaveArticles = () => {
        return this.props.faveArray.map(articleObj => <ArticleCard key={articleObj.id} article={articleObj} clickHandler={this.props.clickHandler}/>)
    }

    render() {
        return (
            <div>
                {this.renderFaveArticles()}
            </div>
        )
    }


}

export default FavoritesContainer