const TodoCard = (props) => {
    return(
        <div className="item">
            { props.status ? <span className="done">{ props.content }</span> : <span>{ props.content }</span> }
            { props.status ? <i class="fas fa-check-circle icon-done"></i> : <i class="far fa-circle icon-not-done"></i> }            
        </div>
    )
}

export default TodoCard;