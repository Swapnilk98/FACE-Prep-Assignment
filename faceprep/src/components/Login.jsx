
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from "../styles/Login.module.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'foo' && password === 'bar') {
        localStorage.setItem('auth', 'true');
        navigate('/home');
        } else {
        setError(true);
        }
    };
    
    return (
        <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.container}
        >
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className={styles.error}>Invalid Username or Password</p>}
            <button type='submit'>Login</button>
        </form>
        </motion.div>
    );
}

export default Login;