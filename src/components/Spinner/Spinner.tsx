import React from "react";
import  spinnerStyles  from './spinner.module.css';

 const  Spinner = () => {
    return (
        <div className={spinnerStyles.spinnerContainer}>
            <div className={spinnerStyles.loadingSpinner}>
            </div>
        </div>
    );
}

export default Spinner