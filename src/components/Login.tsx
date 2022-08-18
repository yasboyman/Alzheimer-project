import React, {useState} from 'react';
import {useLocalStorage} from './customHooks/useLocalStorage'

const Login = () => {
    const [inputUser, setInputUser] = useState('')
    const [userName, setUserName] = useState('')
    const [name, setName] = useLocalStorage('username','' )


    const handleSubmit = () => {
        // e.preventDefault()
        setUserName(inputUser)
        setName('username', inputUser)
        setInputUser('')
    }
    console.log(userName)

    return (
        <div>
            <input
                aria-label="Log in input"
                value={inputUser}
                onChange={ (e) => setInputUser(e.target.value)}
                type="text"
            />
            <button
                aria-label="submit user button"
                onClick={handleSubmit}
            >Submit user</button>

        </div>
    );
};

export default Login;
