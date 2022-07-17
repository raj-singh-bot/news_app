import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let{title, description, imageUrl, newsUrl, author, date} = this.props;
    return (
        <div>
            <div className="card" >
                <img src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">by {author} on {new Date(date).toGMTString() }</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Go somewhere</a>
                </div>
            </div>
      </div>
    )
  }
}

export default Newsitem