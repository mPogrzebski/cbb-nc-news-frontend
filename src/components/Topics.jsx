import React, { useState, useEffect } from 'react';
import { getAllTopics } from '../utils/api';

const Topics = () => {
const [allTopics, setAllTopics] = useState([])

useEffect(() => {
    getAllTopics().then(topics=>{
        setAllTopics(topics)
    }).catch(err=>{
        console.log(err);
    })
  
}, [])

    return (
        <div>
            <h2>Topics</h2>
            <ul>

            {allTopics.map(topic=>{
                return (
                    <li key={topic.slug}>
                        {topic.slug}
                    </li>
                )
            })}
            </ul>
        </div>
    );
};

export default Topics;