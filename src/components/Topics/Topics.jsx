import React, { useState, useEffect } from "react";
import { getAllTopics } from "../../utils/api";
import { Link } from "react-router-dom";

const Topics = () => {
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    getAllTopics()
      .then((topics) => {
        setAllTopics(topics);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="section">
      <h2 className="mt-5 title has-text-centered is-size-2">Topics</h2>
      <ul className=" flex ">
        {allTopics.map((topic) => {
          return (
            <li className="ml-5 mr-5 box has-text-centered is-size-3" key={topic.slug}>
              <Link to={`/topics/${topic.slug}`} topic={topic.slug}>
                <div>#{topic.slug}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Topics;
