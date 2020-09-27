import React, { Component } from "react";

export default class About extends Component {

    constructor(props) {
        super(props)
        this.state = {
            "title": "About me",
            contact: { name: "Richard Lateu", email: "richardlateu@gmail.com", role: "software engineer", profile: "images/cat.jpeg" },
            skills: [
                { id: 1, role: "software development" },
                { id: 2, role: "software design" },
                { id: 5, role: "software team leading" },
                { id: 6, role: "software architecture" },
            ],
            skillvalue: '',


        }
        // this.delta = this.delta.bind(this);

    }

    addSkill = (event) => {
        //alert('A name was submitted: ' + this.state.skillvalue);
        event.preventDefault();

        let skill = {
            id: this.state.skills.length + 1,
            role: this.state.skillvalue
        }

        this.setState({
            skills: [...this.state.skills, skill]
        })

        console.log("/////////////////////////////////////")
        console.log(this.state.skills)
    };

    setSkill = (event) => {
        //event.preventDefault();
        this.setState({ skillvalue: event.target.value })

    }
    onDelete = (sk) => {

        let skillscp = [...this.state.skills]
        let index = skillscp.indexOf(sk)
        skillscp.splice(index, 1)

        this.setState({
            skills: skillscp
        })

    }

    render() {

        return (
            <div>
                <p>{this.state.skillvalue}</p>
                <div className="card-header"><strong>{this.state.title}</strong></div>
                <div className="row">
                    <div className="col col-auto"><img width={220} src={this.state.contact.profile} alt="" /></div>
                    <div className="col ">
                        <ul className="list-group">
                            <li className="list-group-item">{this.state.contact.name}</li>
                            <li className="list-group-item">{this.state.contact.role}</li>
                            <li className="list-group-item">{this.state.contact.email}</li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">Skills</div>
                    <div className="card-body">
                        <form onSubmit={this.addSkill}>
                            <div className="row">
                                <div className="col">
                                    <input type="text" name="skill"
                                        className="col"
                                        placeholder="add new skill"
                                        value={this.props.skillvalue}
                                        onChange={this.setSkill} />
                                </div>
                                <div className="col col-auto">
                                    <button className="btn btn-primary" type="submit">Add</button>
                                </div>
                            </div>
                        </form>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Skill</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.state.skills.map((sk, index) =>
                                    <tr key={index}>
                                        <td>{sk.id}</td>
                                        <td className="text-align-center">{sk.role}</td>
                                        <td><button className="btn btn-danger" name="X" onClick={() => this.onDelete(sk)}>X</button></td>
                                    </tr>

                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        )
    }


}