import React, {useState} from "react";
import { useForm } from "react-hook-form";

function Login() {

    const[loginInfo, setLoginInfo] = useState('')
    const[alert, setAlert] = useState('')
    const {register,handleSubmit,formState: { errors }} = useForm();
    const onSubmit = (userdata) => {
        const userData = JSON.parse(localStorage.getItem("userdata"));
        if (userData.email === userdata.email) {
            if (userData.password === userdata.password) {
                setLoginInfo(userData.name + " You Are Successfully Logged In");
                setAlert("alert alert-success")
                sessionStorage.setItem("userName",JSON.stringify({name: userData.name}
                ));
            } else {
                setLoginInfo("Email or Password is not matching with our record");
                setAlert("alert alert-danger")
            }
        } else {
            setLoginInfo("Email or Password is not matching with our record") ;
            setAlert("alert alert-danger")
        }
    };

    return (
        <div className='container mt-5 ml-5'>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <input type="email" className='form-control' {...register("email", { required: true })} />
                    {errors.email && <span style={{ color: "red" }}>
                    *Email* is required </span>}
                </div>
                <div className="mb-3">
                    <input type="password"  className='form-control'{...register("password")} />
                </div>
                <div className="mb-3">
                    <input type="submit" className="btn btn-primary mb-3" value="Login" />
                </div>
                <div className="mb-3">
                    <p className={alert}>{loginInfo}</p>
                </div>
            </form>
        </div>
    );
}
export default Login;