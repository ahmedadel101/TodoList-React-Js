import React from 'react';
import './AddItem.css';

class AddItem extends React.Component{

    state = {
        name : "" ,
        age : "" 
    }

    handleChange = (e) => {
        this.setState( {
            [e.target.id] : e.target.value
        })
    }
    handeSubmit = (e) => {
        e.preventDefault();
        if(e.target.name.value  === '' & e.target.age.value === ''){
            return false
        }else { 
        this.props.addItem(this.state)
        this.setState({
            name: "",
            age: ""
        }) 
        }; 
     
    }

    render(){
        return (
            <div className="AddItem">
                <form onSubmit={this.handeSubmit}>
                    <input type="text" placeholder="Enter Name..." id="name"  onChange={this.handleChange} value={this.state.name} required/>
                    <input type="number" placeholder=" Enter Age..." id="age"  onChange={this.handleChange} value={this.state.age} required />
                    <input name="" id="add"  type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default AddItem;