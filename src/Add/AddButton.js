import { BrowserRouter, Link } from 'react-router-dom';

const AddButton = () => {
    return(
        <div className="add__btn">
            <BrowserRouter>
                <Link to="/add" className="plus">+</Link>
            </BrowserRouter>
        </div>
    )
}

export default AddButton;