import React from 'react';


class SearchForm extends React.Component {
    state = {
        value: ''
    }

    handleChange = (event) =>{
        this.setState({value: event.target.value})
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.onUserSubmit(this.state.value)
    }
    render(){
    return(
        <div>
            <div className="form-group">
            <form  onSubmit={this.handleSubmit} action="">
            <h1 className="text-center">Search for any image you want</h1>
            <input value={this.state.value} onChange={this.handleChange} className="form-control" type="text" placeholder="Search free high resolution photos"/>
            </form>
            </div>
        </div>
    )
}
}

export default SearchForm