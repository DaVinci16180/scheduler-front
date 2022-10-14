import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Screen() {

    const [process, setProcess] = useState({})

    useEffect(() => {
        request();
    })

    const request = () => {
        axios
            .get('http://localhost:8080/scheduler/executingNow')
            .then(res => {
                if (res.data.name !== undefined) {
                    setProcess(res.data)
                } else {
                    setProcess(undefined)
                }
            })
            .catch(error => {
                console.log(error)
            });
    }

    return (
        <>
        {console.log(process)}
            { 
                process !== undefined 
                &&
                <div className="content">
                    <div className="screen">
                        <div className="screen-buttons"></div>
                        <div className="screen-content">
                            <div>{ process.message }</div>
                            <div className="discrete">id: { process.id } - name: { process.name }</div>
                        </div>
                    </div>
                </div>
            }
            { 
                process === undefined &&
                <div className="content">
                    <div className="screen">
                        <div className="screen-buttons"></div>
                        <div className="screen-content">
                            <span className="discrete">Welcome!!!</span>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}