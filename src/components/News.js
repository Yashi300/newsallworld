import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export class News extends Component {

  static defaultProps = {
    pageSize : 6,
    category :'general',
  }

  static propTypes = {
    pageSize : PropTypes.number,
    category : PropTypes.string 
  }

  constructor(props) {
    super(props)
    console.log("Hi i am a news constructor");
    this.state = {
      articles: [],
      loading: false,
      page:1,
    };
  }

//life-cycle method , runs after the execution of render
async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=01000aa40fc14b4eb68975e6a828a639&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({loading : true})
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({articles : parsedData.articles, totalResults : parsedData.totalResults, loading : false})
}

prePage =async () =>{
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=01000aa40fc14b4eb68975e6a828a639&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  this.setState({loading : true})
let data = await fetch(url);
let parsedData = await data.json();
console.log(parsedData);
this.setState({
  articles : parsedData.articles,
  page : this.state.page - 1,
  loading : false
})
}

nexPage =async () =>{
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=01000aa40fc14b4eb68975e6a828a639&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  this.setState({loading : true})
let data = await fetch(url);
let parsedData = await data.json();
console.log(parsedData);
this.setState({
  articles : parsedData.articles,
  page : this.state.page + 1,
  loading : false
})
}

  render() {
    return (
      <div className="container my-3">
      <h2 className="text-center" style={{fontFamily:"'Moon Dance', cursive",fontWeight:"bold",margin:"23px",fontSize:"47px"}}>{this.props.category.charAt(0).toUpperCase() + this.props.category.substr(1)} - Trending - Top Headlines</h2>
      {this.state.loading && <Spinner/>}
      <div className="row">
      {!this.state.loading && this.state.articles.map((element) => {
        return  <div className="col-md-4" key={element.url}>
      <NewsItem title={element.title} description={element.description}   source={element.source.name} author={element.author} date={new Date(element.publishedAt)} imageurl={element.urlToImage?element.urlToImage:"https://media.news9live.com/h-upload/2022/04/21/309268-image-2022-04-21t170629671.jpg"} newsUrl={element.url} />
      </div>
      })} 
        </div>
        <div className="container">
          <button disabled={this.state.page<=1} id="pre" onClick={this.prePage}>&laquo; previous</button>
          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} id="nex" onClick={this.nexPage}>Next &raquo;</button>
        </div>
      </div>
    );
  }
}

export default News;


