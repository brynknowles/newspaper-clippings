import React from 'react'

const ArticleCard = (props) => {
    // console.log(props)
    let {article, clickHandler} = props

    const cardClickHandler = () => {
        // console.log("clicked", props) 
        clickHandler(article.id)
    }

    return (
        <div className="card" onClick={cardClickHandler}>
            <div className="card-container">
                <h1>{article.title}</h1>
                <h3>{article.byline}</h3>
                <p>{article.abstract}</p>
            </div>
        </div>
    )
}

export default ArticleCard
