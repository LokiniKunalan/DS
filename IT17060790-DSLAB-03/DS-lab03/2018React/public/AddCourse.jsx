import React, { Component } from 'react';
import axios from 'axios';


const Sub = props => (

    <div className="form-group">
        <input type="checkbox" name={props.sub._id} style={{ marginRight: "10px" }} />{props.sub.name}


    </div>



);

export default class AddSubejct extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangePass = this.onChangePass.bind(this);
        this.onChangeLecture = this.onChangeLecture.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            code: '',
            pass: '',
            lecture: '',
            allSubjects: [],
            subjects: []
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeCode(e) {
        this.setState({
            code: e.target.value
        });
    }
    onChangePass(e) {
        this.setState({
            pass: e.target.value
        });
    }
    onChangeLecture(e) {
        this.setState({
            lecture: e.target.value
        });
    }

    componentDidMount() {

        axios.get('http://localhost:3000/subject/')
            .then(response => {
                console.log(response);
                console.log(response.data.data);
                console.log(response.data.data.length);




                this.setState({ allSubjects: response.data.data });

                this.state.allSubjects.forEach(element => {
                    console.log('element');
                    console.log(element.name);
                });

                let myArray = [];

                response.data.data.forEach(element => {
                    myArray.push("uncheked");
                });



            }).catch(err => {
                console.log(err);
            });
    }

    subjectList() {
        return this.state.allSubjects.map(function (currentSub, i) {
            return <Sub sub={currentSub} key={i} />;
        });
    }


    // handleCheckChieldElement = (event) => {
    //     let fruites = this.state.fruites
    //     fruites.forEach(fruite => {
    //        if (fruite.value === event.target.value)
    //           fruite.isChecked =  event.target.checked
    //     })
    //     this.setState({fruites: fruites})
    //   }



    onSubmit(e) {
        e.preventDefault();

        const course = {
            name: this.state.name,
            code: this.state.code,
            pass: this.state.pass,
            lecture: this.state.lecture
        }


        axios.post('http://localhost:3000/course', course)
            .then(res => console.log(res));

        this.setState({

            name: '',
            code: '',
            pass: '',
            lecture: ''

        });


        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>

                <h3 className="text-primary">Add New Course</h3>

                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Course Name:</label>
                        <input type="text" className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Course Code:</label>
                        <input type="text" className="form-control"
                            value={this.state.code}
                            onChange={this.onChangeCode}
                        />
                    </div>


                    <div className="form-group">
                        <label>Pass Mark:</label>
                        <input type="text" className="form-control"
                            value={this.state.pass}
                            onChange={this.onChangePass}
                        />
                    </div>

                    <div className="form-group">
                        <label>Lecture In Charge:</label>
                        <input type="text" className="form-control"
                            value={this.state.lecture}
                            onChange={this.onChangeLecture}
                        />
                    </div>

                    <div className="form-group">

                        <ul>
                            {this.subjectList()}
                        </ul>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Subject" className="btn btn-primary" />
                    </div>

                </form>




            </div>
        )
    }

}