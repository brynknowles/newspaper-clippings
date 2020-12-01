import React from 'react'

const ArticleCard = (props) => {
    // console.log(props)
    let {article} = props
    return (
        <div>
            <h1>{article.title}</h1>
            <h3>{article.byline}</h3>
            <p>{article.abstract}</p>
        </div>
    )
}

export default ArticleCard