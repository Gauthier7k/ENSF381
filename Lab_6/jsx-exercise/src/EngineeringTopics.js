import React from 'react';

const topics = [
    {title: "Software Engineering", description: "Building innovative software solutions for the modern world."},
    {title: "Electrical Engineering", description: "Powering innovation in electronics and systems."},
    {title: "Mechanical Engineering", description: "Designing machines and systems that shape the future."},
    {title: "Chemical Engineering", description: "Advancing processes for a sustainable future."}
    ];

function EngineeringTopics() {
return (
    <div>
    <h2>Engineering Topic</h2>
    {topics.map(function(item) {
        return (
            <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            </div>
        );
    }
    )
    }
    </div>
);
}

export default EngineeringTopics;