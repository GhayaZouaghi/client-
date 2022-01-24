


import axios from 'axios'
import { USER_FAIL, USER_LOAD, USER_SUCC} from "../ActionsType/user"

// actions for register
export const register=(newUser)=>async(dispatch)=>{
   
   dispatch({type:USER_LOAD})
    try {
       let result= await axios.post ('/api/user/register', newUser) 
       dispatch({type:USER_SUCC, payload: result.data}) // {msg, user, token}
    } catch (error) {
        dispatch({type:USER_FAIL, payload:error.response.data})
    }
}

// actions for login
export const login=(user)=>async(dispatch)=>{
   
    dispatch({type:USER_LOAD})
     try {
        let result= await axios.post ('/api/user/login', user) 
        dispatch({type:USER_SUCC, payload: result.data}) // {msg, user, token}
     } catch (error) {
         dispatch({type:USER_FAIL, payload:error.response.data})
     }
 }