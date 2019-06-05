//import React from 'react';
import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import CreateCourse from "./component/CreateCourse";
import EditCourses from "./component/EditCourses";
import CourseLists from "./component/CourseLists";
import CreateSubject from "./component/CreateSubject";
import SubjectLists from"./component/SubjectLists";




class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <div className="bg">


                    <nav className="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">

                        <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">

                        </a>
                        <Link to="/" className="navbar-brand">Welcome</Link>
                        <div className="collpase nav-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link">Course List</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link">Create Course</Link>
                                </li>

                                <li className="navbar-item">
                                    <Link to="/subject" className="nav-link">Create Subjects</Link>
                                </li>

                                <li className="navbar-item">
                                    <Link to="/getSubject" className="nav-link">Subject List</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Route path="/" exact component={CourseLists} />
                    <Route path="/edit/:id" component={EditCourses} />
                    <Route path="/create" component={CreateCourse} />
                    <Route path="/subject" component={CreateSubject}/>
                    <Route path="/getSubject" exact component={SubjectLists} />


                    </div>

                </div>
            </Router>
        );
    }
}

export default App;
