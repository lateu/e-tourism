import React, { Component } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import HitItem from "./HitItem";
import SearchForm from "./SearchForm";

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
        this.gethits(this.state.currentKeyword);
    }

    //return hit base on the provided city
    gethits(keyWord) {

        let url = "https://pixabay.com/api/?key=18328524-4d59f925588561173524be16f&q=" +
            keyWord + "&page=" + this.state.currentpage +
            "&per_page=" + this.state.pageSize;

        axios.get(url).then((resp) => {
            let tp = resp.data.totalHits % this.state.pageSize;
            let totalPages = tp === 0 ? resp.data.totalHits / this.state.pageSize : 1 + Math.floor((resp.data.totalHits / this.state.pageSize));
            this.setState({
                hits: resp.data.hits,
                totalPages: totalPages,
                pages: new Array(totalPages).fill(0),
                currentKeyword: keyWord
            })
            //console.log("/////////////////")
            //console.log(resp)
        }).catch((error) => {
            console.log(console.error)
        })
    }


    // search a hit of the city
    //Search = (event) => {
    search = (keyWord) => {
        //event.preventDefault();

        this.gethits(keyWord);
    }

    //return the page requested by user
    goTopage = (page) => {
        this.setState({
            currentpage: page,
        }, () => {
            this.gethits(this.state.currentKeyword)
        })


    }

    render() {

        return (
            <div>
                <strong>Gallery Component:{this.state.currentKeyword}</strong>
                <SearchForm onSearch={this.search} />
                <div className="row">
                    {

                        this.state.hits.map(hit =>

                            <HitItem hit={hit} key={hit.id} detailShow={false} />

                        )


                    }
                </div>
                <br />
                <div className="row">
                    <ul className="nav nav-pills">
                        {
                            this.state.pages.map((val, index) =>
                                <li key={index}>
                                    <button onClick={() => this.goTopage(index + 1)} className={this.state.currentpage === index + 1 ? "btn btn-success" : "btn btn-link"}> {index + 1}</button>

                                </li>
                            )
                        }

                    </ul>

                </div>

            </div>
        )
    }

}