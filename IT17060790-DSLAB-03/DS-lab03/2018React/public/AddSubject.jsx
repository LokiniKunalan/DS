import React, { Component } from 'react';
import axios from 'axios';

export default class AddSubejct extends Component {

    constructor(props) {
        super(props);

        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onChangeAmount=this.onChangeAmount.bind(this);

        this.onSubmit=this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            amount: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeAmount(e) {
        this.setState({
            amount: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const subject={
            name:this.state.name,
            description:this.state.description,
            amount:this.state.amount
        }


        axios.post('http://localhost:3000/subject',subject)
        .then(res=>console.log(res));

        this.setState({
            name: '',
            description: '',
            amount: ''
        });


        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>

                <h3 className="text-primary">Add New Subject</h3>

                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Subject Name:</label>
                        <input type="text" className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Subject Description:</label>
                        <input type="text" className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>


                    <div className="form-group">
                        <label>Subject Amount:</label>
                        <input type="text" className="form-control"
                            value={this.state.amount}
                            onChange={this.onChangeAmount}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Subject" className="btn btn-primary" />
                    </div>

                </form>




            </div>
        )
    }

}