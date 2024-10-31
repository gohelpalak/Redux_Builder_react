import { useDispatch, useSelector } from "react-redux"
import { DeleteDataAction } from "../Redux/Actions/EmployeeAction";
import { Link } from "react-router-dom";

function ShowEmployee()
{

    let list=useSelector((state)=>(state.emp.employee))||[]
    console.log(list);
    let dispatch=useDispatch()

    let Deletedata=(pos)=>{
        dispatch(DeleteDataAction(pos))
        // console.log(pos);
        

    }
    
    
    
    return(
        <>
        <table border={1} align="center">
            <th>Username</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Delete</th>
      {
        list.map((v,i)=>{
            return(
                <>
                <tr>
                    <td>{v.username}</td>
                    <td>{v.phone}</td>
                    <td>{v.email}</td>
                    <td>{v.address}</td>
                    <button onClick={()=>Deletedata(i)}>Delete</button>
                    <Link to={"/updateData/"+i}>Update</Link>

                </tr>
                </>
            )
        })
      }
      </table>

        </>
    )
}
export default ShowEmployee