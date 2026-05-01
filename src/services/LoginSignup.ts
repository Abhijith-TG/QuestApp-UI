import { useAuth } from "../contexts/authContext";



export const RegisterAccount = async (username:string, password:string, email:string)=>{
    try{
        const response = await fetch('http://localhost:5000/api/users/register',
            {
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                    username,
                    password,
                    email
                })

        })
        const data = await response.json();
        console.log("data",data)
        return data;
    }catch(err:any){
        throw new Error(err.message || "Failed to register")
    }
}

export const LoginAccount = async (email:string, password:string)=>{
    try {
        const response = await fetch("http://localhost:5000/api/users/login",
            {
                method:"POST",
                headers:{
                    "content-type":"application/json",

                },
                body:JSON.stringify({
                    email,
                    password
                })

            }
        )
        const data = await response.json();
        if(!data.success){
            console.log("Er",data)
            return data;
        }
        return data;
    } catch (error:any) {
        throw Error(error)
    }
}