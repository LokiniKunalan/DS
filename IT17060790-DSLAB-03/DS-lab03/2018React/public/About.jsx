'use strict';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="col-sm">
           <h2>About</h2>
        </div>;
    }
}
