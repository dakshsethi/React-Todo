import { Link } from "react-router-dom";

const AddButton = () => {
    return(
        <div className="add__btn">
            <Link to="/add" className="plus">+</Link>
        </div>
    )
}

export default AddButton;