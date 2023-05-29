import React, {useState } from 'react';
import { BASE_URL, getData, postData } from '../api/api.js';

export const CreateTutorial = ({ setTutorials }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submitData = (e) => {
        e.preventDefault();
        const data = {
            title,
            description
        }

        postData(BASE_URL, data)
            .then(() => {
                getData(BASE_URL)
                    .then(res => {
                        setTutorials(res)
                    })
            })
        
    }   

    return <>
        <form onSubmit={submitData}>
            <label>
                Title:
                <input
                    type='text'
                    id='title-input'
                    placeholder='Tutorial Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                 />
            </label>
            <label>
                Description:
                <input
                    type='text'
                    id='desc-input'
                    placeholder='Tutorial Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                 />
            </label>
            <input type='submit' value='submit'/>
        </form>
    </>
} 