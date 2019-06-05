import axios from 'axios';
import React, {Component} from 'react';

export default class CreateSubject extends Component{

    constructor(props){
        super(props);

        this.onChangeSubjectName=this.onChangeSubjectName.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onChangeAmount=this.onChangeAmount.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            subject_name:'',
            decription :'',
            amount: ''

        }
    }



    onChangeSubjectName(e){
        this.setState({
            subject_name:e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description:e.target.value
        });
    }

    onChangeAmount(e){
        this.setState({
            amount:e.target.value
        });
    }


    onSubmit(e){
        e.preventDefault();
        console.log(`Form Submitted`);
        console.log(`Subject Name: ${this.state.subject_name}`);
        console.log(`Description : ${this.state.description}`);
        console.log(`Amount : ${this.state.amount}`);


        const newSubject={
            subject_name :this.state.subject_name,
            description:this.state.description,
            amount:this.state.amount,

        }

        axios.post('http://localhost:4000/subject/addSub', newSubject)
            .then(res => console.log(res.data));



        this.setState({

            subject_name:'',
            description :'',
            amount: '',

        })
    }


    render(){
        return(
            <div style={{marginTop :20}}>
                <h3>Welcome to Create Subjects!!! </h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label> Subject Name:</label>
                        <input type="text" className="form-control" value={this.state.subject_name} onChange={this.onChangeSubjectName}/>
                    </div>


                    <div className="form-group">
                        <label> Description:</label>
                        <input type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription}/>
                    </div>

                    <div className="form-group">
                        <label> Amount:</label>
                        <input type="text" className="form-control" value={this.state.amount} onChange={this.onChangeAmount}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Create Subjects"/>
                    </div>
                </form>
            </div>
        )
    }
}