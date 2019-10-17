import React, { useState } from 'react';

export default function New() {
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');

    function handleSubmit() {

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="company">EMPRESA *</label>
                <input 
                    id="company"
                    placeholder="Sua empresa incrivel"
                    value={company} 
                    onChange={event => setCompany(event.target.value)}
                />
            </form>
            <form onSubmit={handleSubmit}>
                <label htmlFor="company">TECNOLOGIAS *<span>(separadas por vírgula)</span></label>
                <input 
                    id="techs"
                    placeholder="Quais tecnologias usam?"
                    value={techs} 
                    onChange={event => setTechs(event.target.value)}
                />
            </form>
        </>
    )
}