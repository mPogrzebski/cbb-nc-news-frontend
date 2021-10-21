import React, { useState, useEffect } from 'react';
import { getAllTopics } from '../../utils/api';
import { Link } from 'react-router-dom';

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
                    <Link to={`/topics/${topic.slug}`} topic={topic.slug}>{topic.slug}</Link>
                  </li>
                );
            })}
            </ul>
        </div>
    );
};

export default Topics;