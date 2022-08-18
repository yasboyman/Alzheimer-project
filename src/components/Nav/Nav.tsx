import React from 'react';
import navStyles from './nav.module.css'
import {Link, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {logout, reset} from "../../features/auth/authSlice";
import {AppDispatch, RootState} from "../../store";


const Nav = () => {
    const {user} = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <nav className={navStyles.nav} data-testid="navigation_list">
            <div>
                <ul
                    className={navStyles.ul}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li>
                </ul>
            </div>
            <div className={navStyles.rightSide}>
                <ul>
                    {user ? (<li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>) : (
                        <>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/register'>Register</Link>
                            </li>
                        </>)

                    }
                </ul>
            </div>
        </nav>
    )
        ;
};

export default Nav;
