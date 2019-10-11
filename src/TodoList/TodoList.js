import React, {Component} from 'react';
import NewTodoForm from '../NewTodoForm/NewTodoForm'
import Todo from '../Todo/Todo'
import '../TodoList/style.css'


class TodoList extends Component{
    state={todos:[]}

    createTodo=(newTodo)=>{
        this.setState({
           todos: [...this.state.todos,newTodo]
        })

        
    }
    delete=(id)=>{
        this.setState({todos:this.state.todos.filter(todo => todo.id !== id)})

    }
    
    update=(id, updatedTask)=>{
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id){
                return {...todo, task:updatedTask}
            }
            return todo;
        })
        this.setState({todos:updatedTodos})
    }

    toggleCompletion=(id)=>{
       const comp = this.state.todos.map(todo=>{
            if (todo.id ===id){
                return {...todo, completed:!todo.completed}
            }
            return todo
        })
        this.setState({todos:comp})
    }

    render(){
        const todos = this.state.todos.map(todo=>{
            return <Todo 
            task={todo.task}
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            delete={()=>this.delete(todo.id)}
            updateTodo={this.update}
            togglecompleted={this.toggleCompletion}/>
         })
        return(
            <div className='TodoList'>
                <h1>Todo List<span>React Todo List App</span></h1>
                
                <ul>{todos}</ul>
                <NewTodoForm createTodo={this.createTodo}/>
            </div>
           
        )
    }
}

export default TodoList;