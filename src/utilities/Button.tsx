import React, {FC} from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

const ButtonWrapper = ({title,...props}: Props) => {
    return (
        <button   {...props}>
            {title}
        </button>
    );
};

export default ButtonWrapper;
