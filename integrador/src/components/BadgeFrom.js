import React from 'react'; 


class BadgeFrom extends React.Component {
    //state = {
        //jobs:'Designer',
    //};
    //handleChange = e => {
        //console.log({
            //name:e.target.name,
            //value:e.target.value
        //});
        //this.setState({
            //[e.target.name]: e.target.value,
        //});
    //}
    handleClick = e => {
        console.log('Button was clicked');
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submit');
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input onChange = {this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}/>
                    </div>
                    <div className="form-group">
                        <label>Apellido</label>
                        <input onChange = {this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange = {this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}/>
                    </div>
                    <div className="form-group">
                        <label>Jobs</label>
                        <input onChange = {this.props.onChange} className="form-control" type="text" name="jobs" value={this.props.formValues.jobs}/>
                    </div>
                    <div className="form-group">
                        <label>twitter</label>
                        <input onChange = {this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}/>
                    </div>
                    <button onClick = {this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}
export default BadgeFrom;
