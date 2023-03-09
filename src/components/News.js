import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'



export class News extends Component {

  static defaultProps = {
    country: 'us',
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  }
  
  constructor(){
    super();
    console.log("constructor is running");
    this.state={
    articles: [],
    page: 1,
    }
  }

  async componentDidMount(){
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=979c0c8bf0ba419a9f8045c21966ca39&pageSize=20`;
    let data= await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
    this.setState({articles: parseData.articles})

  }

  handleNextClick= async ()=>{
    console.log("Next");
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=979c0c8bf0ba419a9f8045c21966ca39&page=${this.state.page + 1}&pageSize=20`;
    let data= await fetch(url);
    let parseData=await data.json();
    console.log(parseData);

    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles
    })
  }

  handlePreviousClick= async ()=>{
    console.log("Previous");
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=979c0c8bf0ba419a9f8045c21966ca39&page=${this.state.page - 1}&pageSize=20`;
    let data= await fetch(url);
    let parseData=await data.json();
    console.log(parseData);

    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles
    })
  }

  render() {
    return (
      <div>
        
        <div className="container">
          <h1 style={{margin: "35px", textAlign: 'center'}}>News Component</h1>
          
          <div className="row my-3" >
            {this.state.articles.map((element)=>{
              return <div className="col-4" key={element.url}>
        <NewsItem  title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
            })}
    
          </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePreviousClick}>&#8592; Previous</button>
    <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &#8594;</button>
            </div>
      </div>
      
      
        
        {/* <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/> */}

      </div>
    )
  }
}

export default News
