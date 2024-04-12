import { Link } from "react-router-dom"

export default function HomePage(){
    return(
    <>
    <h1>My HOme</h1>
    <p>Go To
        <Link to="/product">Products</Link>
    </p>
    </>)
}