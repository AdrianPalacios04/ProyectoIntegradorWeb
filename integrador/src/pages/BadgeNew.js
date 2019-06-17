import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeFrom from '../components/BadgeFrom'; 

class BadgeNew extends React.Component {
    state ={form:{
        firstName: '',
        lastName: '',
        email: '',
        jobs: '',
        twitter: ''
    }};
    handleChange = e => {
        //const nextForm = this.state.form
        //nextForm[e.target.name] = e.target.value;
        this.setState({
            form:{
                ...this.state.form,
            [e.target.name] : e.target.value,
            },
        });
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                    <div className="BadgeNew__hero">
                        <img className="img-fluid" src={header} alt="Logo"/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Badge firstName={this.state.form.firstName} 
                                lastName={this.state.form.lastName} 
                                twitter={this.state.form.twitter}
                                jobs={this.state.form.jobs}
                                />
                            </div>
                            <div class="col-6">
                            <BadgeFrom onChange={this.handleChange} formValues={this.state.form}/>
                            </div>
                            
                        </div>
                         

                    </div>
                </div>
                
            </div>
        )
    }
}

export default BadgeNew;
