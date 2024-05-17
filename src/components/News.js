import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articals: [],
      loding: false,
      page: 1,
    };
  }
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=74c376544e224d5c832afcd80741374f&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articals: parsedata.articles,
      totalResult: parsedata.totalResult,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResult / this.props.pageSize)
    ) {
    } else {
      this.setState({ page: this.state.page + 1 });
      this.updateNews();
    }
  };

  handlePrevClick = async () => {

    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  render() {
    return (
      <div className={`container  text-${this.props.mode1}`} style={{background: this.props.mode1}}> 
        <h1 className={`text-center text-${this.props.mode === 'dark'? 'white' : 'dark'}  my-4`}>{this.props.heading} </h1>
        <div className="mx-2 row">
          {this.state.articals.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                mode ={this.props.mode}
                mode1 ={this.props.mode === 'dark'? 'light' : 'dark'}
                  title={element.title ? element.title.slice(0, 45) : ""}
                  source={element.source.name}
                  Date={
                    element.publishedAt ? element.publishedAt.slice(0, 10) : ""
                  }
                  author={element.author ? element.author : ""}
                  description={
                    element.description ? element.description.slice(0, 70) : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://static.dw.com/image/69054620_6.jpg"
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between py-5">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-danger"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResult / this.props.pageSize)
            }
            className="btn btn-info"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
