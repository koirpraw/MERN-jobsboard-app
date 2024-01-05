import React, { useState,useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserSignup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const isUsernameValid = username.trim() !== '';
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const isPasswordValid = password.trim() !== '';
        setIsFormValid(isUsernameValid && isEmailValid && isPasswordValid);
      }, [username, email, password]);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        // handle form submission logic here
        const userData = {username,email,password};
        try {
            const response = await fetch("http://localhost:4100/users/signup",
            {method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(userData)});
            if (!response.ok){
                window.alert(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json();
            console.log(data);

            
        } catch (error) {
            console.log(error);
            
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow border-0">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Sign Up</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                                </Form.Group>

                                <Button variant="success" type="submit" className="w-100 mt-3" block disabled={!isFormValid}>
                                    Sign Up
                                </Button>
                                <Form.Text className="text-muted text-center mt-3">
                                    Already have an account? <a href="/login">Log In</a>
                                </Form.Text>
                                
                            </Form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSignup;
