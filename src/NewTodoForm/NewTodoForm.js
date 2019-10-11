import React,{Component} from "react";
import '../NewTodoForm/style.css'
import uuid from 'uuid/v4'


class NewTodoForm extends Component{
    state={task:''}

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }


    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createTodo({...this.state, id: uuid(), completed:false});
        this.setState({task:''})
    }


    render(){
        
        return(
            <form className='NewTodoForm' onSubmit={this.handleSubmit}>
            <div>
                 <label htmlFor='task'>New Todo </label>
                 <input
                     type='text' placeholder='Enter New Todo' id='task'
                     name='task'
                     value={this.state.task}
                     onChange={this.handleChange}  
                 />
                <button>Submit Todo</button>
             </div>
        </form>
        )
    }
}

export default NewTodoForm;