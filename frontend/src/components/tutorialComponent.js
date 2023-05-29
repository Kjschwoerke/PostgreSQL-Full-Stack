import React, { useState, useEffect } from 'react';
import { CreateTutorial } from "./createTutorial.js"
import { BASE_URL, getData } from '../api/api.js'

export const TutorialsComponent = () => {
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        getData(BASE_URL)
        .then(res => {
            setTutorials(res)
        });
    }, [])

    return <>
        <h2>Tutorial Data</h2>
        <CreateTutorial setTutorials={setTutorials}/>
        <ul>
            {tutorials.map(tutorial => {
                return <li key={tutorial.id}>
                    <h3>Title: {tutorial.title}</h3>
                    <p>Description: {tutorial.description}</p>
                    </li>
            })}
        </ul>
    </>
}