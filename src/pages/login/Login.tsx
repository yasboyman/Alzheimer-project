import React, {MouseEventHandler, useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {login, reset} from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner/Spinner";
import {AppDispatch, RootState} from "../../store";



const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const {user, isLoading, isError, isSuccess, message} = useSelector(
        (state: RootState) => state.auth
    )

    const {email, password} = formData
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    useEffect( () => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())
    },[user, isLoading, isError, isSuccess, message, login])


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
        if (!email || !password) {
            toast.error('Please enter login info')
        } else {
            const userData = {
                email,
                password
            }
            dispatch(login(userData))
        }
    }

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div>
            <section>
                <h1>Login</h1>
                <p>Please Login</p>
            </section>

            <section>
                <div>
                    <form>
                        <input
                            type={'email'}
                            name={'email'}
                            id={'email'}
                            aria-label={'register email'}
                            placeholder={'Enter your email'}
                            onChange={onChange}

                        />
                    </form>
                </div>
                <div>
                    <form>
                        <input
                            type={'password'}
                            name={'password'}
                            id={'password'}
                            autoComplete={'current-password'}
                            aria-label={'register password'}
                            placeholder={'Enter your password'}
                            onChange={onChange}
                        />
                    </form>
                </div>
                <div>
                    <form>
                        <div>
                            <button type="submit" onClick={onSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;

