import React from 'react';
import { Button } from 'react-bootstrap';

const BreakBtn = () => {
    const btns = [
        {
            name:"10.00 AM Coffee Break",
            classname:"break break1"
        },
        {
            name:"12.00 PM Lunch Break",
            classname:"break break2"
        },
        {
            name:"15.00 PM Tea Break",
            classname:"break break3"
        },
    ]
    return (
        <div className='section_gap d-flex flex-column flex-lg-row justify-content-center pt-5'>
            {
                btns.map((btn,index)=><div key={index}>
                    <Button className={btn.classname}>{btn.name}</Button>
                </div>)
            }
        </div>
    );
};

export default BreakBtn;