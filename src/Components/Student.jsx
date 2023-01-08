import React, { useState } from 'react'
import './Student.css'

function Student() {
    // State variable
    const [formObject, setFormObject] = useState({})
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    // Helper Function
    let btnfunc = () => {
        setFormObject([{
            firstName,
            lastName,
            userName,
            email,
            password,
            confirmPassword
        }])
        console.log([
            {
                firstName,
                lastName,
                userName,
                email,
                password,
                confirmPassword
            }
        ])
        {
            alert('Form submitted')
        }
    }
    return (
        <React.Fragment>
            <div className="container">
                <div>
                    <input onChange={(e) => { return setFirstName(e.target.value) }} type="text" placeholder='First Name' />
                </div>
                <div>
                    <input onChange={(e) => { return setLastName(e.target.value) }} type="text" placeholder='Last Name' />
                </div>
                <div>
                    <input onChange={(e) => { return setUserName(e.target.value) }} type="text" placeholder='username' />
                </div>
                <div>
                    <input onChange={(e) => { return setEmail(e.target.value) }} type="text" placeholder='Email' />
                </div>
                <div>
                    <input onChange={(e) => { return setPassword(e.target.value) }} type="password" placeholder='Password' />
                </div>
                <div>
                    <input onChange={(e) => { return setConfirmPassword(e.target.value) }} type="password" placeholder='Confirm Password' />
                </div>
                <div>
                    <button onClick={btnfunc}>Submit</button>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Student