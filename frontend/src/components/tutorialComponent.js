import React from 'react';

export const TutorialsComponent = ({tutorials, ...props}) => {
    console.log(tutorials);
    return <>
        <h2>Tutorial Data</h2>
        <ul>
            {tutorials.map(tutorial => {
                return <li>
                    <h3>Title: {tutorial.title}</h3>
                    <p>Description: {tutorial.title}</p>
                    </li>
            })}
        </ul>
    </>
}