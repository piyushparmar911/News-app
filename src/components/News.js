import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'
export class News extends Component {
  constructor ()
  {
    super();
    this.state =
    {
      articals: [],
      loding: false,
      page:1

    } 
  }
  static defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general'
  }
  
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  
  async   componentDidMount()
  {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4b6e240fe764daf9283e729de8f8b42&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedata = await data.json();
      this.setState({articals: parsedata.articles, totalResult: parsedata.totalResult});
      
    }

   handleNextClick =  async() => {
     console.log("handleNextClick"); 
     if(this.state.page + 1 >  Math.ceil (this.state.totalResult/this.props.pageSize))
      {

      }
       else{

         let url = `
         https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4b6e240fe764daf9283e729de8f8b42&page=${this.state.page}&pageSize=${this.props.pageSize}`;
         let data = await fetch(url);
         let parsedata = await data.json();
         this.setState({
           page: this.state.page + 1, 
           articals: parsedata.articles
          })
        }
      }
      
    handlePrevClick = async() => {
      console.log("handlePrevClick");
      
     let url = `
     https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4b6e240fe764daf9283e729de8f8b42&page=${this.state.page}&pageSize=${this.props.pageSize}`
     let data = await fetch(url);
     let parsedata = await data.json();
     this.setState({
    page: this.state.page - 1, 
    articals: parsedata.articles
    })
    }
    render() {
      return (
      <div className="container ">
        <h1 className="text-center my-4">{this.props.heading}</h1>
        <div className="mx-2 row">
        {this.state.articals.map((element)=>{  
            return <div className="col-md-3" key={element.url}>
            <NewsItem   title={element.title? element.title.slice(0,45): ""} description={element.description ? element.description.slice(0,70): ""} imageUrl={element.urlToImage?  element.urlToImage: "https://static.dw.com/image/69054620_6.jpg"} newsUrl={element.url}/>
          </div>
        })}
        </div>
        <div className="d-flex justify-content-between py-5">
        <button type="button" disabled={this.state.page<=1} className="btn btn-danger" onClick={this.handlePrevClick}> &larr; Previous</button>                  
        <button type="button" disabled={this.state.page + 1 >  Math.ceil (this.state.totalResult/this.props.pageSize) } className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>                  
          </div>                  
     
      </div>
    );
  }
}

export default News;
