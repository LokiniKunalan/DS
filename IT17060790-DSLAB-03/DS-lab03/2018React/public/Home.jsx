'use strict';

import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Course = props => (
    <tr>
        <td>{props.course._id}</td>
        <td>{props.course.name}</td>
        <td>{props.course.code}</td>
        <td>{props.course.pass}</td>
        <td>{props.course.lecture}</td>
        <td>
            <Link to={"/course/" + props.course._id}>Subjects</Link>
        </td>
    </tr>
);

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.onChangeCourseId = this.onChangeCourseId.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            courses: [],
            courseId: ''
        };
    }

    onChangeCourseId(e) {
        console.log(e.target.value);
        this.setState({
            courseId: e.target.value
        });
    }



    componentDidMount() {
        document.title = "Add Subjects";
        axios.get('http://localhost:3000/course')
            .then(response => {
                console.log(response);
                this.setState({ courses: response.data.courses });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    /*this metthod return our Train functional component and uses a callback function*/
    courseList() {
        return this.state.courses.map(function (currentCourse, i) {
            return <Course course={currentCourse} key={i} />;
        });
    }


    onSubmit(e) {
        e.preventDefault();

        if (this.state.courseId === '' || this.state.courseId === null) {
            alert('Enter ID');
        } else {

            console.log(this.state.courseId);
            const myId = this.state.courseId;
            axios.get('http://localhost:8080/spring/course/fee/' + myId)
                .then(response => {
                    console.log(response);
                    alert(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });



        }


    }


    render() {
        return (

            <div>
                <br />

                <h3 className=" text-primary"><b>Couse Price</b></h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Enter Course ID:</label>
                        <input type="text" className="form-control"
                            value={this.state.courseId}
                            onChange={this.onChangeCourseId}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Calculate" className="btn btn-primary" />
                    </div>

                </form>

                <h3 className=" text-primary"><b>Couse List</b></h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Pass Mark</th>
                            <th>Lecture</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.courseList()}
                    </tbody>
                </table>

            </div>


        )
    }
}
