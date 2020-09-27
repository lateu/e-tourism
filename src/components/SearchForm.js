import React, { Component } from 'react';




export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = { "keyWordValue": "paris" }

    }

    //update the state with de provided keyword
    setKeyword = (event) => {
        this.setState({
            keyWordValue: event.target.value
        })
    }

    doSearch = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.keyWordValue)
        //this.gethits();
    }

    render() {
        return (
            <form onSubmit={this.doSearch}>
                <div className="row m-2 p-2">
                    <div className="col">
                        <input type='text' value={this.state.keyWordValue} placeholder="search criteria" className="form-control" onChange={this.setKeyword}></input>

                    </div>
                    <div className="col-auto"><button type="submit" className="btn btn-primary">Search</button></div>

                </div>
            </form>
        )
    }
}
