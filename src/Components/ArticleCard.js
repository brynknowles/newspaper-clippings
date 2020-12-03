import React from 'react'

const ArticleCard = (props) => {
    // console.log(props)
    let {article, clickHandler} = props

    const cardClickHandler = () => {
        // console.log("clicked", props) 
        clickHandler(article)
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

// class ArticleCard extends React.Component {
//     // console.log(this.props)

//     state = {
//         clicked: false
//     }

//     cardClickHandler = () => {
//         // console.log("clicked article")
//         this.setState({clicked: !this.state.clicked})
//         console.log("clicked article", this.state.clicked)
//     }

//     faveClickHandler = () => {
//         // console.log("clicked", props) 
//         this.props.clickHandler(this.props.article)
//     }

//     render() {
//         return (
//             <div className="card" onClick={this.cardClickHandler}>
//                 <div className="card-container"> 
//                     <h1>{this.props.article.title}</h1>
//                     <h3>{this.props.article.byline}</h3>
//                     <p>{this.props.article.abstract}</p>
//                 </div>
//             </div>
//         )
//     }

// }

export default ArticleCard
