import { useAddTaskMutation, useGetTasksQuery  } from "../slices/apiSlice";
import { useState } from "react";


const Todolist = () => {
    const [ title, setTitle ] = useState('')


    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTasksQuery()

    const [addTask, { isSuccess : isAdd}] = useAddTaskMutation()
    
    const addTaskSubmit = (e) => {
        e.preventDefault()
        addTask({title, completed : false})
        setTitle('')
    }

    return(
        <>
        <h1>Todolist</h1>

        {isSuccess && (
            <ul>
                {data.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        )}

        <form onSubmit={addTaskSubmit}>
            <div>
                <label htmlFor="title">Titre</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
        </form>
        </>
    )
}

export default Todolist