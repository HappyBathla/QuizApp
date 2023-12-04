import React from "react";
import { useNavigate } from 'react-router-dom';
import "./right.css";
const Right = () => {
    const navigate = useNavigate();

    const handleNextPage = () => {
        navigate('/right-next');
    };

    return (
        <div className="right">
            <span>Report a Mistake</span>
            <h1>Task Quiz</h1>
            <button onClick={handleNextPage}>Resume Assignment</button>
        </div>
    );
}
export default Right;