import { useState, useEffect } from 'react';
import tasks from './data';
import TodoCard from './TodoCard';

const Todo = () => {

    function changeStatus(index) {
        setItems((prev) => {
            return prev.map((item, i) => 
            {
                if(i === index)
                    items[i-1] = {
                        id: index,
                        msg: items[i-1].msg,
                        completed: items[i-1].completed ? false : true
                    }
                return item;
            }
        )});
        console.log(items);
    }

    const [isLoading, setIsLoaded] = useState(true)
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch(tasks)
            .then(() => {
                setIsLoaded(false)
                setItems(tasks)
            })
            .catch(err => console.log('An error occured - ' + err))
    }, [items])

    return (
        <div className="tasks__list">
            {isLoading && <div className="loading-blk">Loading Your Tasks...</div>}

            {items && items.map((item) => (
                <TodoCard key={ item.id } content={ item.msg } id ={ item.id } status={ item.completed } changeStatus = { changeStatus }  />
            ))}
        </div>
    );
}

export default Todo;