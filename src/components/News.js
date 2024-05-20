import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loding: false,
      page: 1,
      totalResults: 0,
    };
    document.title = this.props.heading;
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
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=033410d6447244e1b724971bea667404&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({ loding: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loding: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 }, async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=033410d6447244e1b724971bea667404&pageSize=${this.props.pageSize}&page=${this.state.page}`;
      let data = await fetch(url);
      let parsedata = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedata.articles),
        totalResults: parsedata.totalResults,
      });
    })
  };
  render() {
    return (
      <div
        className={`container  text-${this.props.mode1}`}
        style={{ background: this.props.mode1 }}
      >
        <h1
          className={`text-center text-${
            this.props.mode === "dark" ? "white" : "dark"
          }  my-4`}
          >
          {this.props.heading}{" "}
        </h1>
            {this.state.loding  && <Spinner/>}
            {/* <Spinner/>             */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
          >
          <div className="mx-2 row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    mode={this.props.mode}
                    mode1={this.props.mode === "dark" ? "light" : "dark"}
                    title={element.title ? element.title.slice(0, 45) : ""}
                    source={element.source.name}
                    Date={
                      element.publishedAt
                        ? element.publishedAt.slice(0, 10)
                        : ""
                    }
                    author={element.author ? element.author : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 70)
                        : ""
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
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
