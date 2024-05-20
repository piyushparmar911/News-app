import React, { Component } from 'react'

export class NewsItem extends Component {
    

    render() {
      let {title, description,imageUrl,Date,author,source,mode,mode1, newsUrl} = this.props;
    return (
      <div className="px-2 my-3 " >
        <span className="badge bg-danger my-2">{source}</span>
        <div className={`card bg-${mode} ` }>
        <img className={`img-fluid img-thumbnail bg-${mode}`} style={{ height: "200px", width: "280px"}} src={imageUrl} alt="" />
  <div className="card-body">
    <h5 className={`card-title text-${mode1}`}>{title}...</h5>
    <p className={`card-text text-${mode1}`}>{description}...</p>
    <p className={`card-text text-muted text-${mode1}`} ><small>Last Updated by {author} on {Date}</small></p>
    <a rel='noreferrer' href={newsUrl} target='_blank' className={`btn btn-sm btn-${mode === 'dark'? 'primary' : 'dark'}`}>Read More</a>
  </div>
</div>     
      </div>
    )
  }
}

export default NewsItem
