import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imgUrl, newsUrl}=this.props;
    return (
      <div>
        <div className="card" >
  <img src={!imgUrl?"https://cdn.cnn.com/cnnnext/dam/assets/220622114834-kraft-mac-and-cheese-super-tease.jpeg": imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
