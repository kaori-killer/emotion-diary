import { Link } from "react-router-dom";
import Home from './../pages/Home';
import Diary from './../pages/Diary';
import Edit from './../pages/Edit';
import New from './../pages/New';

const RouteTest = () => {
    return <>
        <Link to={"/"}>Home</Link> <br/>
        <Link to={"/new"}>New</Link> <br/>
        <Link to={"/diary"}>Diary</Link> <br/>
        <Link to={"/edit"}>Edit</Link> <br/>
    </>
}

export default RouteTest;