import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageurl, newsUrl,author, date, source} = this.props;
    return (
      <div className="my-3"  data-aos="zoom-in" >
        <div className="card" style={{borderRadius:"4px",boxShadow:"13px 13px 9px #888888"}}>
         <img className="card-img-top" src={imageurl} style={{height:"180px"}} alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{title}
          <span className="badge badge-danger" style={{backgroundColor: "#c71515", marginLeft: "11px"}}>{source}</span></h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {date.toGMTString()}</small></p>
          <a href={newsUrl} rel="noreferrer" style={{fontWeight:"bold"}} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
  </div>
    )
  }
}

export default NewsItem