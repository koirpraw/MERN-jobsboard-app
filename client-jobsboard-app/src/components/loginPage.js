import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function LoginPage(){
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

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission logic here
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow border-0">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Log In</h3>
                            <Form onSubmit={handleSubmit}>
                                

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                                </Form.Group>

                                <Button variant="success" type="submit" className="w-100 mt-3 " block disabled={!isFormValid}>
                                    Log-In
                                </Button>
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Text className="text-muted text-center mt-3">
                                    Dont Have an Account? <a href="/register">Sign up</a>
                                </Form.Text>
                                </Form.Group>
                                
                            </Form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}