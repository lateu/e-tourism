import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            list: [0]
        }

    }
    // exceute base on the buton cliked by user
    compute = (op) => {

        let sign = op === "+" ? 1 : -1;
        let temp = this.state.count + sign;
        if (temp >= 0)
            this.setState(
                {
                    count: this.state.count + sign,
                    list: new Array(temp).fill()
                });



    };

    render() {
        return (
            <div className="card m-3">
                <div className="card-header"><strong>{this.props.title ? this.props.title : "default title"} : {this.state.count}</strong></div>
                <div className="ml-auto">
                    <button onClick={() => this.compute("+")} className="btn btn-primary m-2">+</button>
                    <button onClick={() => this.compute("-")} className="btn btn-danger m-2">-</button>
                </div>
                <div className="card-body">

                    {
                        this.state.list.map((value, index) =>

                            <span key={index}>
                                <img src={this.props.image ? this.props.image : "images/cat.jpeg"} alt="Img" width="100" className="m-2" />
                            </span>

                        )
                    }
                </div>

            </div>
        )
    }
}
