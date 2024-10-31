import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { UpdateDataAction } from "../Redux/Actions/EmployeeAction"

function UpdateData() {

    let list = useSelector((state) => (state.emp.employee))
    let getData = useParams()
    let dispatch=useDispatch()
    let [singleData, setSingleData] = useState({})
    let navigate=useNavigate()

    useEffect(() => {
        setTimeout(() => {
            FetchData()
        }, 1000)
    }, setSingleData)

    let FetchData = () => {
        let contactdetail = list.filter((v, i) => {
            if (i == getData.pos) {
                return v
            }
        })
        setSingleData(contactdetail[0])
    }
    function changeInput(e) {
        let { name, value } = e.target;
        setSingleData({ ...singleData, [name]: value })
    }

    function submitData(e) {
        e.preventDefault()
        dispatch(UpdateDataAction(getData.pos,singleData))
        navigate("/showemployee")
    }

    return (
        <>
            <h1>Update Page</h1>
            <form action="" method="post" onSubmit={(e) => submitData(e)}>
                <table align="center" border={"1"}>
                    <tr>
                        <td>Enter Name</td>
                        <td><input type="text" name="username" value={singleData.username ? singleData.username : ""} onChange={(e) => changeInput(e)} /></td>
                    </tr>

                    <tr>
                        <td>Enter Phone</td>
                        <td><input type="text" name="phone" value={singleData.phone ? singleData.phone : ""} onChange={(e) => changeInput(e)} /></td>
                    </tr>

                    <tr>
                        <td>Enter Email</td>
                        <td><input type="text" name="email" value={singleData.email ? singleData.email : ""} onChange={(e) => changeInput(e)} /></td>
                    </tr>

                    <tr>
                        <td>Enter Address</td>
                        <td><input type="text" name="address" value={singleData.address ? singleData.address : ""} onChange={(e) => changeInput(e)} /></td>
                    </tr>

                    <tr>
                        <td><input type="submit" name="submit" value={"Edit"} /></td>
                    </tr>
                </table>
            </form>


        </>
    )
}
export default UpdateData