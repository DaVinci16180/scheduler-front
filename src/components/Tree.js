import React, { useEffect, useState } from "react";
import Node from "./Node";
import Screen from "./Screen";
const axios = require('axios').default;

export default function Tree() {

    const [processes, setProcesses] = useState();

    useEffect(() => {
        request();
    })

    function nest(data) {
        for (let i = data.length - 1; i > 0; i--) {
            let fatherIndex = Math.floor((i - 1) / 2);
            let children = []

            if (i % 2 === 0) {
                i--;
                children = [data[i]];
                data.splice(i, 1);

            }

            children.push(data[i])
            data.splice(i, 1);
            
            data[fatherIndex].children = children;
        }

        setProcesses(data)
    }

    const request = () => {
        axios
            .get('http://localhost:8080/scheduler/priorityList')
            .then(res => {
                let data = res.data
                nest(data)
            })
            .catch(error => {
                console.log(error)
            });
    }
    
    return (
        <>
            { processes !== undefined && 
            <>
                <Screen /> 
                <div className="tree">
                    <Node nodes={ processes } />
                </div>
            </>
            }
        </>
    )
}