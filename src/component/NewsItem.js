
import React, { Component } from 'react'


export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,Newsurl,date,author}=this.props
    return (
      <div className='my-3'>
<div className="card" style={{width:"18rem"}}>
  <img src={!imageUrl?"https://static.toiimg.com/thumb/msid-100559745,width-1070,height-580,imgsize-694254,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}<h6>Example heading <span class="badge bg-secondary">New</span></h6>
</h5>
    <p className="card-text">{description}</p>
    <p class="card-text"><small class="text-body-secondary">Last updated {new Date(date).toGMTString() } ago by  {!author?"Uknown": author}</small></p>
    <a rel="noreferrer" href={Newsurl} target='_blank' className="btn btn-primary btn-ms btn-dark">Read More </a>
  </div>
</div>
</div>

     )
  }
}

export default NewsItem
