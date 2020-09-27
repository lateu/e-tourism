import React, { Component } from 'react';
import HitItem from './HitItem';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
export default class HitDetails extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            hit: null
        })

    }


    //preload the hits list
    componentDidMount() {
        this.gethits(this.props.match.params.id)
    }

    // return the hit base on a given id
    gethits(iden) {
        let id = iden.replace('id=', "")
        let url = "https://pixabay.com/api/?key=18328524-4d59f925588561173524be16f&id=" +
            id

        axios.get(url).then((resp) => {
            this.setState({
                hit: resp.data.hits[0],
            })
            console.log("/////////id////////")
            console.log(id)
        }).catch((error) => {
            console.log(console.error)
        })
    }

    render() {
        if (this.state.hit != null) {
            return (
                <HitItem hit={this.state.hit} detailShow={true} />
            )
        } else {
            return <div><Spinner animation="border" variant="dark" /></div>
        }
    }
}
