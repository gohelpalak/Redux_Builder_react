import { DELETE_DATA, EMPOYEE, UPDATE_DATA } from "../ActionTypes";

export const EmployeeAction=(data)=>{
    return{
        type:EMPOYEE,
        payload:data
    }
}

export const DeleteDataAction=(pos)=>{
    return{
        type:DELETE_DATA,
        payload:pos
    }
}
export const UpdateDataAction=(pos,data)=>{
   return{
    type:UPDATE_DATA,
    payload:{
       pos: pos,
       data:data
    }
   }
}