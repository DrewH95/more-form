import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    // ======================================
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    // ======================================
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    // ======================================
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    // ======================================
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    // ======================================
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    // ======================================


    const inputFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value === "") {
            setFirstNameError("") 
        } else if(e.target.value.length <= 2) {
            setFirstNameError("First Name should be more than 2 characters long.")
        }
        else {
            setFirstNameError("")
        }
    }
    const inputLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value === "") {
            setLastNameError("")
        } else if(e.target.value.length <= 2) {
            setLastNameError("Last Name should be more than 2 characters long.")
        }
        else {
            setLastNameError("")
        }
    }
    const inputEmail = (e) => {
    // const inputEmail = () => { (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        setEmail(e.target.value);
        if(e.target.value === "") {
            setEmailError("")
        } else if(e.target.value.length <= 5) {
            setEmailError("Enter an email of more than 5 characters.")
        }
        else {
            setEmailError("")
        }
    }
    const inputPassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value === "") {
            setPasswordError("")
        } else if(e.target.value.length <= 7) {
            setPasswordError("Password should be more than 7 characters long.")
        }
        else {
            setPasswordError("")
        }
    }
    const inputConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value === "") {
            setConfirmPasswordError("")
        } else if(e.target.value !== password) {
            setConfirmPasswordError("Password incorrect, please try again.")
        }
        else {
            setConfirmPasswordError("")
        }
    }
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword }
        console.log("Welcome", newUser,"!")
        setHasBeenSubmitted(true);
    };

    return (
        <div>
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted ?
                    <h1>Thank you for your submission!</h1> :
                    <h1>Welcome to Form!</h1>
                }
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange = {inputFirstName} value={firstName} />
                    {
                        firstNameError ?
                        <p style={{color:"red"}} > {firstNameError}</p> : ""
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange = {inputLastName} value={lastName} />
                    {
                        lastNameError ?
                        <p style={{color:"red"}} > {lastNameError}</p> : ""
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange = {inputEmail} value={email} />
                    {
                        emailError ?
                        <p style={{color:"red"}} > {emailError}</p> : ""
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange = {inputPassword} value={password} />
                    {
                        passwordError ?
                        <p style={{color:"red"}} > {passwordError}</p> : ""
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange = {inputConfirmPassword} value={confirmPassword} />
                    {
                        confirmPasswordError ?
                        <p style={{color:"red"}} > {confirmPasswordError}</p> : ""
                    }
                </div>
                <input type="submit" value="Create User Form!" />

            </form>
            <div className="container">
                <h1>Form Data:</h1>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
            </div>
        </div>
    );
}
export default UserForm;