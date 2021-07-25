import React from 'react';


interface IProps {
     Task: string ,
     Day: number
}

const Contact = ({ Task, Day }: IProps) => {
    return (
        <div className="card">
            <h3><strong>Title:</strong> {Task}</h3>
            <h3><strong>Task:</strong> {Day}</h3>
        </div>
    );
};

export default Contact;