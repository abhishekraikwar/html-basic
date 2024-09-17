import { Link } from 'react-router-dom';
import './ViewResult.css';

const ViewResult = ({ results }) => {
    return (
        <div className="results-container">
            <div className="back-button">
                <Link to="/"><button>Back</button></Link>
            </div>
            <div className="results-header">Results</div>
            {results && results.length > 0 ? (
                results.map((val, index) => (
                    <div key={index} className="result-item">
                        <p><strong>Roll No:</strong> {val.rollno}</p>
                        <p><strong>Name:</strong> {val.name}</p>
                        <p><strong>Date of Birth:</strong> {val.dob}</p>
                        <p><strong>Score:</strong> {val.score}</p>
                    </div>
                ))
            ) : (
                <div className="no-results-message">No results to display</div>
            )}
        </div>
    );
};

export default ViewResult;
