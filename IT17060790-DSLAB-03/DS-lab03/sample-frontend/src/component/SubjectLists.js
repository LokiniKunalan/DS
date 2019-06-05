import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Subject=props =>(
    <tr>
        <td> {props.subject.subject_name}</td>
        <td> {props.subject.description}</td>
        <td> {props.subject.amount}</td>
    </tr>
)
export default class SubjectLists extends Component{
    constructor(props){
        super(props);
        this.state={ subject:[]};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/subject/')
            .then(response => {
                this.setState({subject : response.data});
            }).catch(function (error) {
            console.log(error);
        })
    }

    SubjectList(){
        return this.state.subject.map(function (currentSubject, i) {
            return <Subject subject={currentSubject}key={i} />
        })  ;

    }




    render(){
        return(
            <div>
                <h3> Subject List </h3>
                <table className="table table-striped" style={{marginTop :20}}>
                    <thead>
                    <tr>
                        <th>Subject Name</th>
                        <th>Description</th>
                        <th>Amount</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.SubjectList()}
                    </tbody>
                </table>
            </div>
        )
    }
}