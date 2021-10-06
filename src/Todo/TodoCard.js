const TodoCard = (props) => {
    return(
        <div className="item">
            { props.status ? <span className="done">{ props.content }</span> : <span>{ props.content }</span> }
            { props.status ? <span className="icon" onClick = {() => props.changeStatus(props.id) }></span> : <span className="no-icon" onClick = {() => props.changeStatus(props.id) }></span> }            
        </div>
    )
}

export default TodoCard;