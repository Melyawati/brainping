import { Link } from 'react-router-dom';

const index = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default index
