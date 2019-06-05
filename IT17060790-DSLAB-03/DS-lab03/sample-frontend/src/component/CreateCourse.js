import React, {Component} from 'react';
import axios from 'axios';

export default class CreateCourse extends Component{

    constructor(props){
        super(props);

        this.onChangeCourseName=this.onChangeCourseName.bind(this);
        this.onChangeSubjectCode=this.onChangeSubjectCode.bind(this);
        this.onChangePassmark=this.onChangePassmark.bind(this);
        this.onChangeLecturerInCharge=this.onChangeLecturerInCharge.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            course_name:'',
            subject_code :'',
            pass_mark: '',
            lectureIn_Charge:'',
            completed: false

        }
    }



    onChangeSubjectCode(e){
        this.setState({
            subject_code:e.target.value
        });
    }

    onChangePassmark(e){
        this.setState({
            pass_mark:e.target.value
        });
    }

    onChangeCourseName(e){
        this.setState({
            course_name:e.target.value
        });
    }

    onChangeLecturerInCharge(e){
        this.setState({
            lectureIn_Charge:e.target.value
        });
    }


    onSubmit(e){
        e.preventDefault();
        console.log(`Form Submitted`);
        console.log(`Course Name: ${this.state.course_name}`);
        console.log(`Subject Code : ${this.state.subject_code}`);
        console.log(`Pass Mark : ${this.state.pass_mark}`);
        console.log(`Lecture In charge : ${this.state.lectureIn_Charge} `);
        console.log(`Completed : ${this.state.completed}`);

        const newCourse={
            course_name :this.state.course_name,
            subject_code:this.state.subject_code,
            pass_mark:this.state.pass_mark,
            lectureIn_Charge:this.state.lectureIn_Charge
        }

        axios.post('http://localhost:4000/course/add', newCourse)
            .then(res => console.log(res.data));



        this.setState({

                course_name:'',
                subject_code :'',
                pass_mark: '',
                lectureIn_Charge:'',
                completed: false

        })
    }


    render(){
        return(
            <div style={{marginTop :20}}>
                <h3>Welcome to Create Courses!!! </h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label> Course Name:</label>
                        <input type="text" className="form-control" value={this.state.course_name} onChange={this.onChangeCourseName}/>
                    </div>

                    <div className="form-group">
                        <label> Subject Code :</label>
                        <input type="text" className="form-control" value={this.state.subject_code} onChange={this.onChangeSubjectCode}/>
                    </div>

                    <div className="form-group">
                        <label> Pass mark:</label>
                        <input type="text" className="form-control" value={this.state.pass_mark} onChange={this.onChangePassmark}/>
                    </div>

                    <div className="form-group">
                        <label> Lecture-In-Charge:</label>
                        <input type="text" className="form-control" value={this.state.lectureIn_Charge} onChange={this.onChangeLecturerInCharge}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Create Courses"/>
                    </div>
                    </form>
            </div>
        )
    }
}