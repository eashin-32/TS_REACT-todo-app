import React from 'react';


interface IProps {
     Task: string ,
     Day: number
}

const Contact = ({ Task, Day }: IProps) => {
    return (
        <div className="card">
            <h3><strong>Task:</strong> {Task}</h3>
            <h3><strong>Day:</strong> {Day}</h3>
        </div>
    );
};

export default Contact;