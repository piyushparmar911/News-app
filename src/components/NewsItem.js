import React, { Component } from 'react'

export class NewsItem extends Component {
    

    render() {
      let {title, description,imageUrl, newsUrl} = this.props;
    return (
      <div className='px-2 my-3' >
        <div className="card ">
        <img className='img-fluid img-thumbnail' src={imageUrl} alt="" />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>     
      </div>
    )
  }
}

export default NewsItem
