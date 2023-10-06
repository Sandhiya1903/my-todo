import styles from '../style.module.css';
import { v4 as uuidv4 } from 'uuid';
const Form=(
    {todo,
    setTodo, todoList,
    setTodoList})=>{
    const handleChange=(event)=>{
    setTodo(event.target.value);
    console.log(todo)
    }
const handleSubmit=(event)=>{
    event.preventDefault();
    setTodoList([...todoList,{name:todo,id:uuidv4()}]);
   
}
    return(
        <div>
            <form onSubmit={handleSubmit} className={styles.todoform}>
            <input value={todo} onChange={handleChange} className={styles.todoinput} placeholder='Add Todo Item'>
            </input>
            <div className={styles.centeradd}>
            <button type='submit' className={styles.todobutton}>Add</button>
            </div>
            
            </form>
        </div>
    )
}
export default Form;