import axios from "axios";
import React, { useState } from "react";

export default function Form() {

    const [amount, setAmount] = useState('');

    const createProcesses = () => {
        axios.get(`http://localhost:8080/scheduler/createProcesses?amount=${amount}`)
    }

    const handleChange = (e) => {
        setAmount(e.target.value)
    }

    return (
        <div className="form">
            <div className="row">
                <span>Criar</span>
                <input type="text" onChange={ handleChange } />
                <span>novos procesos</span>
            </div>
            <div className="row">
                <button onClick={ createProcesses }>Enviar</button>
            </div>

        </div>
    )
}