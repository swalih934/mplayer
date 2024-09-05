import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { checkEmailApi, registerApi } from '../Services/Allapis';
import { useNavigate } from 'react-router-dom';
function Register() {
    const [user, setUser] = useState({
        username: "", email: "", password: ""
    })
    const nav = useNavigate()
    const handleRegister = async () => {
        console.log(user);
        const { username, email, password } = user
        if (!username || !email || !password) {
            toast.warning("enter valid inputs!!")
        }
        else {
            const result = await checkEmailApi(email)
            console.log(result);
            if (result.data.length > 0) {
                toast.warning("Email ID already use!!!")
            }
            else {
                const result = await registerApi(user)
                if (result.status == 201) {
                    toast.success("Success")
                    setUser({
                        email: "", username: "", password: ""
                    })
                    nav('/Log')
                }
                else {
                    toast.error("Registration Failed!!")
                    console.log(result);

                }

                toast.success("sucess")
            }

        }
    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{ height: "80vh" }}>
                <div className='w-75 border shadow bg-light p-5'>
                    <h1>Register</h1>
                    <input type="email" className='form-control mb-3' onChange={(e) => { setUser({ ...user, email: e.target.value }) }} placeholder='Enter Email Id' />
                    <input type="text" name='' className='form-control mb-3' onChange={(e) => { setUser({ ...user, username: e.target.value }) }} placeholder='Enter username' />
                    <input type="password" className='form-control mb-3' onChange={(e) => { setUser({ ...user, password: e.target.value }) }} placeholder='Enter password' />

                    <div className='d-flex justify-content-between'>
                        <button onClick={handleRegister} className='btn btn-success'>Register</button>
                        <Link to={'/Log'}>Already a User</Link>
                    </div>
                </div>

            </div>



        </>

    )
}

export default Register