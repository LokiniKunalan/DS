import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Course=props =>(
    <tr>
    <td> {props.course.course_name}</td>
        <td> {props.course.subject_code}</td>
        <td> {props.course.pass_mark}</td>
        <td> {props.course.lectureIn_Charge}</td>
        <td>
            <Link to={"/getSubject/"+props.course._id}>Subject</Link>
        </td>
    </tr>
)
export default class CourseLists extends Component{
    constructor(props){
        super(props);
        this.state={ course:[]};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/course/')
            .then(response => {
                this.setState({course : response.data});
            }).catch(function (error) {
            console.log(error);
        })
    }
    
    CourseList(){
      return this.state.course.map(function (currentCourse, i) {
          return <Course course={currentCourse}key={i} />
      })  ;
   
    }
 
    
    
    
    render(){
        return(
            <div>
                <h3> Course List </h3>
                <table className="table table-striped" style={{marginTop :20}}>
                    <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Subject Code</th>
                        <th>Pass Marks</th>
                        <th>Lecture In Charge</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.CourseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}