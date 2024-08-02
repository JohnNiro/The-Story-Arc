import axios from "axios";
import create from "zustand"

const Authorization = create((set) => ({
    login: {
        email: "",
        password: "",

    },

updateLogin: (e) =>{
    const {name,value} = e.target;

    set(state =>{
     return{
        Login: {
            ...state.login,
            [name]: value,
        },
     };
    });

   
},
}));


export default Authorization;