import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  static defaultProps = {
    pageSize : 6,
    category :'general',
  }

  static propTypes = {
    pageSize : PropTypes.number,
    category : PropTypes.string 
  }

  constructor() {
    super()
    this.state = {
      results: [],
      loading: false,
      page:1,
    };
  }

  async updateNews(){
    this.props.setProgress(10);
    let url=`https://newsdata.io/api/1/news?apikey=pub_99705e2e1d16f3534d9f7a3a0a155f4af694&country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&language=en`;
    this.setState({loading : true})
    let data1 = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data1.json();
    this.props.setProgress(70);
    this.setState({results : parsedData.results, totalResults : parsedData.totalResults, loading : false})
    this.props.setProgress(100);
  }

//life-cycle method , runs after the execution of render
async componentDidMount(){
  this.updateNews();
}

prePage =async () =>{
  this.setState({page: this.state.page - 1});
  this.updateNews();
}

nexPage =async () =>{
  this.setState({page: this.state.page + 1});
  this.updateNews();
}
fetchMoreData =async () => {
  this.setState({page : this.state.page + 1})
  let url=`https://newsdata.io/api/1/news?apikey=pub_99705e2e1d16f3534d9f7a3a0a155f4af694&country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&language=en`;
  let data1 = await fetch(url);
  let parsedData = await data1.json();
  this.setState({
    results : this.state.results.concat(parsedData.results),
    totalResults : parsedData.totalResults,
  })
};

  render() {
    return (
      <>
      <h2 className="text-center" style={{fontFamily:"'Moon Dance', cursive",fontWeight:"bold",margin:"23px",fontSize:"47px"}}>{this.props.category.charAt(0).toUpperCase() + this.props.category.substr(1)} - Trending - Top Headlines</h2>
      {/* {this.state.loading && <Spinner/>} */}
      <InfiniteScroll
          dataLength={this.state.results.length}
          next={this.fetchMoreData}
          hasMore={this.state.results.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
      <div className="row">
      {this.state.results.map((element) => {
        return  <div className="col-md-4" key={element.url}>
      <NewsItem title={element.title} description={element.description}   source={element.source_id} author={element.creator} date={new Date(element.pubDate)} imageurl={element.image_url?element.image_url:"https://image.shutterstock.com/image-vector/oops-sorry-dont-know-young-260nw-1902071413.jpg"} newsUrl={element.link} />
      </div>
      })} 
      </div>
      </div>
       </InfiniteScroll>
       </>
    );
  }
}

export default News;


