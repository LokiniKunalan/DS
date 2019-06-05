'use strict';

import React, {Component} from 'react';
import axios from 'axios';


const SubjectDetails = props => (
    <tr>
        <td>{props.subject.name}</td>
        <td>{props.subject.description}</td>
        <td>{props.subject.amount}</td>
       
        
    </tr>
)
export default class Subject extends Component {
    constructor(props) {
        super(props);

        this.state = {subjects:[]};
    }


    componentDidMount(){
       
        let url=window.location.href;
        let cid=(url.split('/')[4]);

        console.log(cid);

        axios.get('http://localhost:3000/course/'+ cid).then(response=>{
            console.log(response);
            console.log(response.data.data[0].subjects);
            this.setState({subjects:response.data.data[0].subjects});
        })
        .catch(err=>{
            console.log(err);
        });
    }

    courseList(){
        return this.state.subjects.map(function(currentCourse,i){
                  return <SubjectDetails subject = {currentCourse} key={i}/>;
        });
    }

    render() {
        return  <div>
        <h3>Subject List</h3>
        <table className="table table-striped" style={{marginTop:20}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Amount</th>
                    

                </tr>

            </thead>

            <tbody>
                {this.courseList() }
            </tbody>

        </table>
    </div>;
    }
}
