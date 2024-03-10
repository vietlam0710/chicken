import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../model/User";
export default function Login() {
    const nav = useNavigate();
    const userRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const [dataLogin, setDataLogin] = useState<IUser>();
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const res = await fetch('../api/User.json');
                const data = await res.json(); 
                setDataLogin(data)
            }catch(error){
                console.log("Can't Fetching Data", error);
                
            }
            
        }
        console.log(dataLogin);
        
        fetchData();
    },[])
    
    const handleSubmit = ()=>{
        const username = userRef.current?.value;
        const password = passRef.current?.value;
    if (username !== undefined && password !== undefined && username===dataLogin?.name && password===dataLogin.password){
        localStorage.setItem("name", username);
        localStorage.setItem("password", password);
        nav("/home");
    }
    }
    
  return (
    <div className="flex justify-content-center align-items-center h-screen">
            <div className="text-center bg-cyan-200 p-5 border-round inline-block">
            <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                <label className="w-6rem">Username:</label>
                <InputText ref={userRef} id="username" type="text" className="w-12rem" />
            </div>
            <div className="flex flex-wrap justify-content-center align-items-center gap-2 mt-3">
                <label className="w-6rem">Password:</label>
                <InputText ref={passRef} id="password" type="password" className="w-12rem" />
            </div>
            <Button onClick={handleSubmit} label="Login" icon="pi pi-user" className="w-10rem mx-auto text-center mt-3 "></Button>
            </div>
        
    </div>
  )
}
