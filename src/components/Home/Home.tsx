import React from 'react';
import HomeStyles from './Home.module.css'
import alzVsDementiaImage from '../../assets/Alz-Vs-Dem-1024x683.png'

const Home = () => {
    return (
        <div>
            <h1>Welcome to Dear-Diary</h1>
            <img src={alzVsDementiaImage} alt={'image of alzheimers and dementia'}/>
        </div>
    );
};

export default Home;
