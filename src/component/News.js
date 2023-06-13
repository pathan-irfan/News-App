import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Sppiner from "./Sppiner";
import PropTypes from 'prop-types'




export class News extends Component {
mycolor={
  color:"green"
}

  static defaultProps={

   country:"in",
   pagesize:5,
   category:"general"
  }
  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,

  }
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=37201f624fa04dcdac87b294f4165878&pagesize=${this.props.pagesize}`;
    
    let data = await fetch(url);
    this.setState({loading :true})
    let parsedData = await data.json();
  
    this.setState({ articles: parsedData.articles,totalResults: parsedData.totalResults, loading:false});
  }

  handelNext = async ()=>{

   if(!(this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pagesize))){

   }
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=37201f624fa04dcdac87b294f4165878&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
    this.setState({loading :true})
   let data = await fetch(url);
   
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ 
       
      articles: parsedData.articles ,
      page:this.state.page + 1 ,
      loading:false
    
    });
  }
  

  handelPrev = async ()=>{


    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=37201f624fa04dcdac87b294f4165878&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`
    this.setState({loading :true})
   let data = await fetch(url);
    let parsedData = await data.json();
  
    this.setState({ 
      page:this.state.page - 1 ,
      articles: parsedData.articles ,
      loading:false
    
    });
  }
   
   
   
    
  
 
  render() {
    return (
      <>
        <div className="container my-4">
        <h1 className="text-center" >top headline news {this.props.news} </h1>
             {this.state.loading &&<Sppiner/>}
          <div className="row">
            { !this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem 
                    title={element.title ? element.title.slice(0, 45) : ""  }
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                        
                    }
                    imageUrl={element.urlToImage ? element.urlToImage : ""}
                    Newsurl={element.url ? element.url : ""}
                     author={element.author} date={element.publishedAt}/>
                </div>
              );
            })}
          </div>
          <div className=" container d-flex justify-content-between ">
          <button disabled={this.state.page<=1}type="button"  className="btn btn-dark" onClick={this.handelPrev}> &larr; previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handelNext}>Next &rarr;</button> 
          </div>
        </div>
      </>
    );
  }
}

export default News;
