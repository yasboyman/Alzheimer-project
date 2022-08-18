import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {register, reset} from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner/Spinner";
import {AppDispatch, RootState} from "../../store";
import styles from './Register.module.css'


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formData
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const {user, isLoading, isError, isSuccess, message} = useSelector(
        (state: RootState) => state.auth
    )

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
        if (password !== password2) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name,
                email,
                password
            }
            dispatch(register(userData))
        }
    }

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.formContent}>
                <section>
                    <h1>Register</h1>
                    <p>Please create an account</p>
                </section>

                <section>
                    <form>
                        <label> Name
                        <div>
                            <input
                                type={'text'}
                                name={'name'}
                                id={'name'}
                                aria-label={'register name'}
                                placeholder={'Enter your name'}
                                onChange={onChange}

                            />
                        </div>
                        </label>
                        <label> Email
                        <div>
                            <input
                                type={'email'}
                                name={'email'}
                                id={'email'}
                                aria-label={'register email'}
                                placeholder={'Enter your email'}
                                onChange={onChange}
                            />
                        </div>
                        </label>

                        <label> Password
                        <div>
                            <input
                                type={'password'}
                                name={'password'}
                                id={'password'}
                                aria-label={'register password'}
                                placeholder={'Enter your password'}
                                onChange={onChange}
                            />
                        </div>
                        </label>

                        <label>
                        <div>
                            <input
                                type={'password'}
                                name={'password2'}
                                id={'password2'}
                                aria-label={'confirm password'}
                                placeholder={'Confirm your password'}
                                onChange={onChange}
                            />
                        </div>
                        </label>
                            <div>
                                <button type="submit" onClick={onSubmit}>Submit</button>
                            </div>

                    </form>
                </section>
            </div>
        </div>
    );
};

export default Register;
