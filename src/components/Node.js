import React from 'react';

export default function Node(props) {


    if (props.nodes !== undefined) {
        return (
            <ul>
                { props.nodes.map((node) => (
                    <>
                        <li>
                            <div className="node">
                                <p>{ node.id } - { node.name }</p>
                                <p>{ node.millisLeftToProcess } ms</p>
                            </div>
                            { node.children !== undefined && node.children.length > 0 &&
                                <Node nodes={ node.children } />
                            }
                        </li>
                    </>
                ))}
                
            </ul>
        )
    } else {
        return(<>undefined</>)
    }
}