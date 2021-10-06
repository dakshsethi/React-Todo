import { useState, useEffect } from 'react';
import tasks from './../Todo/data';

const AddTask = () => {

    function handleSubmit(e) {
        const t_name = e.target.new_task.value;
        setItems((prev) => {
            const tt = {
                id: prev.length+1,
                msg: t_name,
                completed: false
            }
            prev[prev.length] = tt;
            return prev;
        })
        alert('New Task Has Been Added!!');
        e.preventDefault();
        return false
    }

    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch(tasks)
            .then(() => {
                setItems(tasks)
            })
            .catch(err => console.log('An error occured - ' + err))
    }, [items])


    return(
        <div className="add__task">
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <input type="text" name="new_task" placeholder="Add Task" />
            </form>
        </div>
    )
}

export default AddTask;