import './student.style..css';
import React from 'react';
import maleimage from './maleimage.png'; 
import womanimage from './womanimage.png';


const StudentComponent = (props) => {
    return (
        <tr>
            <td>{props.student.name}</td>
            <td>
                {props.student.grade>=3?<span>{props.student.grade}</span>:<span className="color-red">{props.student.grade}</span>}
            </td>
            <td className="gender-td">
                {props.student.gender} 
                {props.student.gender === "Male"?<img src={maleimage} className="gender-image"/>:<img src={womanimage} className="gender-image" /> }
            </td>
        </tr>
    );
}

export default StudentComponent;