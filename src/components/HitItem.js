import React, { Component } from 'react';
import { Link, } from 'react-router-dom';

export default class HitItem extends Component {

    constructor(props) {
        super(props);

    }


    // return hit element details to show

    render() {
        return (
            <div className={this.props.detailShow === false ? "col-md-4 mt-2" : "container"} key={this.props.hit.id}>
                <div className="card">
                    <div className="card-header">{this.props.hit.tags} | {this.props.detailShow === true ? this.props.hit.imageWidth + "X" + this.props.hit.imageHeight : ""}</div>


                    <div className="card-body">
                        {(this.props.detailShow === false) ? <img height="200" src={this.props.hit.webformatURL} className="card-img" /> :
                            <img src={this.props.hit.largeImageURL} className="card-img" />
                        }

                    </div>


                    {this.props.detailShow === false ?
                        <div >
                            <Link to={'/details/id=' + this.props.hit.id} className="btn btn-success mb-2">hit details</Link>
                        </div> :
                        <div>
                            <div className="row">
                                <div className="col-auto">
                                    <img src={this.props.hit.userImageURL} className="img-thumbnail" />
                                    <p><i class="fa fa-user">: {this.props.hit.user}</i></p>
                                </div>
                                <div>
                                    <ul className="nav nav-pills">
                                        <li className="list-group-item"> <i class="fa fa-comment">:{this.props.hit.comments}</i></li>
                                        <li className="list-group-item"> <i class="fa fa-download">:{this.props.hit.downloads}</i></li>
                                        <li className="list-group-item"> <i class="fa fa-thumbs-up">:{this.props.hit.likes}</i></li>
                                        <li className="list-group-item"> <i class="fa fa-heart">:{this.props.hit.favorites}</i></li>
                                        <li className="list-group-item"> <i class="fa fa-eye">:{this.props.hit.views}</i></li>


                                    </ul>
                                </div>

                            </div>
                            <div> <Link to="/gallery" className="btn btn-primary">Home</Link>   </div>

                        </div>
                    }


                </div>
            </div>
        )
    }
}
