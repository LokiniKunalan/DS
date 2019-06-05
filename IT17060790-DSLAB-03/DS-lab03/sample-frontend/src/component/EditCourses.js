import React, {Component} from 'react';
import axios from 'axios';

export default class EditCourses extends Component{
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
componentDidMount() {
    axios.get('http://localhost:4000/course/'+this.props.match.params.id)
        .then(response => {
            this.state({
                course_name: response.data.course_name,
                subject_code:response.data.subject_code,
                pass_mark: response.data.pass_mark,
                lectureIn_Charge:response.data.lectureIn_Charge
            })
        }).catch(function (error) {
            console.log(error)
        })
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
        const obj={
            course_name :this.state.course_name,
            subject_code:this.state.subject_code,
            pass_mark:this.state.pass_mark,
            lectureIn_Charge:this.state.lectureIn_Charge,
            completed: this.state.completed
        };
        axios.post('http://localhost:4000/course/update'+this.props.match.params.id,obj)
        
            .then(res=> console.log(res.data));
        
        this.props.history.push('/');
    }
    render(){
        return(
            <div style={{marginTop :20}}>
                <h3>Welcome to Update Courses!!! </h3>
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

                    <div className="form-check">
                        <input  type="checkbox"
                                className="form-check-input"
                                id="completedCheckbox"
                                name="completedCheckbox"
                                onChange={this.onChangeTodoCompleted}
                                checked={this.state.todo_completed}
                                value={this.state.todo_completed}
                        />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}