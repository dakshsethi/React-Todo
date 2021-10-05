import { useState, useEffect } from 'react';
import tasks from './data';
import TodoCard from './TodoCard';

const Todo = () => {

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
            {isLoading && <div className="loading-blk">Loading...</div>}

            {items && items.map((item) => (
                <TodoCard id={ item.id } content={ item.msg } status={ item.completed }  />
            ))}
        </div>
    );
}

export default Todo;