import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import Home from './Home';
import Subject from './Subject';
import AddSubject from './AddSubject';
import AddCourse from './AddCourse';
import About from './About';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    

    render() {
        return <div>
            <h2>React JS Sample</h2>
            <Router>
                <div>
                    <div className="row">
                        <div className="col-sm">
                            <Link to="/">Home</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/addSubject">Add Subject</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/addCourse">Add Course</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/about">About</Link>
                        </div>
                    </div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/course/:id" component={Subject}/>
                    <Route path="/addSubject" component={AddSubject}/>
                    <Route path="/addCourse" component={AddCourse}/>
                </div>
            </Router>
        </div>;
    }
}
