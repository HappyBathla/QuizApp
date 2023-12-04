import React from "react";
import "./left.css";
import { MdDone } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
const Left = () => {
    return (
        <div className="outer">
            <h2>Task</h2>
            <select className="inside1">
                <option>Enter lesson # here</option>
                <option>Task</option>
            </select>
            <hr className="horizontal"/>
            <div className="insidediv">
                    <FaPlay className="faplay"/>
                    <span>Task</span>
                    <p>1 Problem Set</p>
                    <MdDone className="mdddone"/>
            </div>

        </div>
    )
}
export default Left;