import { useState } from "react";
import {useDispatch} from "react-redux"
import { EMPOYEE } from "../Redux/ActionTypes";
import { EmployeeAction } from "../Redux/Actions/EmployeeAction";
import { Link } from "react-router-dom";

function EmployeePage() {
    let [data, setData] = useState({})
    let dispatch =useDispatch()


        let ChangeInput = (e) => {
            let { name, value } = e.target
            setData({ ...data, [name]: value })
        }
    console.log(data);

    let submitData = (e) => {
        e.preventDefault()
        dispatch(EmployeeAction(data))
setData({})

    }


    return (
        <>
        <Link to="/showemployee">Show Employee Data</Link>
            <form action="" method="post" onSubmit={(e) => submitData(e)}>
            <table border={1} align="center">
                <tr>
                    <td>Name</td>
                    <td><input type="text" name="username" onChange={(e) => ChangeInput(e)} value={data.username?data.username:""} /></td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td><input type="text" name="phone" onChange={(e) => ChangeInput(e)} value={data.phone?data.phone:""} /></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type="text" name="email" onChange={(e) => ChangeInput(e)} value={data.email?data.email:""} /></td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td><textarea type="text" name="address" onChange={(e) => ChangeInput(e)} value={data.address?data.address:""} > </textarea></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" name="Submit" value={"Submit"} /></td>
                </tr>
            </table>
            </form> 
        </>
    )
}

export default EmployeePage;