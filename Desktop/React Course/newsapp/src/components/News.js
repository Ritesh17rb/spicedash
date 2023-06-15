import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category:'general'
    }
    static defaultProps = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category:PropTypes.string
    }



    constructor(props) {
        super(props)

        this.state = {
            articles: [],
            loading: true,
            page: 1

        }

    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=52a3e13d405749b4b6b04ae7654dd79e&page=1&pageSize=${this.props.pageSize}`;

        this.setState({ loading: true });

        let data = await fetch(url);

        let parsedData = await data.json()
        this.setState({

            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading: false
        })


    }


    handlePreviousClick = async () => {

        console.log("Previous")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=52a3e13d405749b4b6b04ae7654dd79e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

        this.setState({ loading: true });
        let data = await fetch(url);

        let parsedData = await data.json()
        this.setState({

            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })

    }


    handleNextClick = async () => {

        console.log("Next")
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {


            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=52a3e13d405749b4b6b04ae7654dd79e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

            this.setState({ loading: true });
            let data = await fetch(url);

            let parsedData = await data.json()

            this.setState({

                articles: parsedData.articles,
                page: this.state.page + 1,
                loading: false
            })

        }
    }

    render() {
        return (
            <div className='container my-3  '>
                <h1 className="text-center" style={{margin:'35px '}}>NewsMonkey  Headlines </h1>
                {this.state.loading && <Spinner />}


                <div className="row">

                    { this.state.loading &&this.state.articles.map((element) => {

                        return <div className="col-md-4" key={element.url}>

                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage}
                                newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                            />
                        </div>



                    })}



                </div>

                <div className="container d-flex justify-content-between">

                    <button disabled={this.state.page <= 1} type="button" class="btn btn-light" onClick={this.handlePreviousClick}>&laquo; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>

                </div>



            </div>
        )
    }
}

export default News
