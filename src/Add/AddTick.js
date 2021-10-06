import { Link } from "react-router-dom";

const AddTick = () => {
    return(
        <div className="add__btn">
            <Link to="/add" className="plus">+</Link>
        </div>
    )
}

export default AddTick;
