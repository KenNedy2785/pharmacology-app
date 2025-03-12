import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ completedModules, quizScores, improvementAreas }) => {
    return (
        <>
            <h2>Progress Tracking</h2>
            <div>
                <h3>Completed Modules</h3>
                <ul>
                    {completedModules.map((module, index) => (
                        <li key={index}>{module}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Quiz Scores</h3>
                <ul>
                    {quizScores.map((score, index) => (
                        <li key={index}>{score}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Areas for Improvement</h3>
                <ul>
                    {improvementAreas.map((area, index) => (
                        <li key={index}>{area}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

Dashboard.propTypes = {
    completedModules: PropTypes.array.isRequired,
    quizScores: PropTypes.array.isRequired,
    improvementAreas: PropTypes.array.isRequired,
};

export default Dashboard;