import React, { Component } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import HitItem from "./HitItem";

export default class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            hits: [],
            currentpage: 1,
            pageSize: 10,
            currentKeyword: "paris",
            totalPages: 1,
            pages: []

        })
    }



    componentDidMount() {
        this.gethits();
    }

    gethits() {
        //let myapikey = '18328524-4d59f925588561173524be16f';
        let url = "https://pixabay.com/api/?key=18328524-4d59f925588561173524be16f&q=" +
            this.state.currentKeyword + "&page=" + this.state.currentpage +
            "&per_page=" + this.state.pageSize;

        axios.get(url).then((resp) => {
            let tp = resp.data.totalHits % this.state.pageSize;
            let totalPages = tp == 0 ? resp.data.totalHits / this.state.pageSize : (resp.data.totalHits / this.state.pageSize) + 1;
            this.setState({
                hits: resp.data.hits,
                totalPages: totalPages,
                pages: new Array(totalPages).fill(0)
            })
            //console.log("/////////////////")
            //console.log(resp)
        }).catch((error) => {
            console.log(console.error)
        })
    }

    setKeyword = (event) => {
        this.setState({
            currentKeyword: event.target.value
        })
    }

    doSearch = (event) => {
        event.preventDefault();
        this.gethits();
    }
    goTopage = (page) => {
        this.setState({
            currentpage: page,
        }, () => {
            this.gethits()
        })


    }

    render() {

        return (
            <div>
                <strong>Gallery Component:{this.state.currentKeyword}</strong>
                <form onSubmit={this.doSearch}>
                    <div className="row m-2 p-2">
                        <div className="col">
                            <input type='text' value={this.state.currentKeyword} placeholder="search criteria" className="form-control" onChange={this.setKeyword}></input>

                        </div>
                        <div className="col-auto"><button type="submit" className="btn btn-primary">Search</button></div>

                    </div>
                </form>
                <div className="row">
                    {

                        this.state.hits.map(hit =>

                            <HitItem hit={hit} />

                        )


                    }
                </div>
                <div className="row">
                    <ul className="nav nav-pills">
                        {
                            this.state.pages.map((val, index) =>
                                <li key={index}>
                                    <button onClick={() => this.goTopage(index + 1)} className={this.state.currentpage == index + 1 ? "btn btn-success" : "btn btn-link"}> {index + 1}</button>

                                </li>
                            )
                        }

                    </ul>

                </div>

            </div>
        )
    }

}