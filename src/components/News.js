import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
  }
  constructor(){
    super();
    this.state = {
      articles: [],
      page: 1
    }
  }
  async componentDidMount() {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fbef4ffa45694ebbafdd544b984dd9b5&page=1pageSize=20`;
    let data= await fetch(url);
    let parsedData= await data.json() 
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
}
handlePrevClick = async ()=>{
  console.log("Previous");
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fbef4ffa45694ebbafdd544b984dd9b5&page=${this.state.page - 1}&pageSize=20`;
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);  
  this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
  })

}

handleNextClick = async ()=>{
  console.log("Next"); 
  if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

  }
  else{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fbef4ffa45694ebbafdd544b984dd9b5&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);  
      this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles
      })
}
}
  render() {
    return (
      <div>
        <div className='container my-3'>
            <h2>News Monkey</h2>
            <div className='row'>
                {this.state.articles.map((element)=>{
                   return <div className='col-md-4'key={element.url}>
                    <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                </div>
                })}
                
            </div>
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News