import React,{Component} from "react";
import "../Todo/Todo.css"


class Todo extends Component{

    state={isEditing:false, task:this.props.task}

    toggleEdit=()=>{
        this.setState({isEditing:!this.state.isEditing})
    }

    handleUpdate=(evt)=>{
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({isEditing:false})

    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        
    }

    toggleComplete=(

    )=>{
        this.props.togglecompleted(this.props.id)
    }

    render(){
        let results;

        if (this.state.isEditing){
            results= (
                <div className='Todo'>
                    <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
                        <input type='text'
                        name='task'
                        value={this.state.task}
                        onChange={this.handleChange}/>
                        <button>save</button>
                    </form>
                </div>
            )
        }else{
            results=(
                <div className='Todo-buttons'>   
                    <button onClick={this.toggleEdit}>
                        <i class='fas fa-pen'/>
                    </button>
                    <button onClick={this.props.delete}>
                        <i class ='fas fa-trash'/>
                    </button>
                    <li 
                    onClick={this.toggleComplete}
                    className={this.props.completed? "Todo completed":"Todo"}>{this.props.task}</li> 
                </div>
            )
        }


        return results;
    }
}

export default Todo;