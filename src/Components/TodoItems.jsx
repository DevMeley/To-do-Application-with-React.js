import style from './Input.module.css'

export default function TodoItems({todo, todos, setTodos}) {
    const deletebtn = (todo) =>{
        console.log('delete button clicked for', todo)
        setTodos(todos.filter((item =>(todo !== item))))
    }
    
    const handleClick = (name) =>{
        setTodos(todos.map((todoItem) => 
            todoItem.name === name ? 
            {...todoItem, done: !todoItem.done} : todoItem
        )
    )
        console.log(todos)
    }

    const classNameStyle = todo.done ? style.completesTodoStyle : ''
    return <div className={style.todo}>
        <p className={classNameStyle} onClick={()=>handleClick(todo.name)}>🔘{todo.name}</p>
        <span>
            <button onClick={()=> deletebtn(todo)} className={style.deletebtn}>X</button>
        </span>
    </div>
}