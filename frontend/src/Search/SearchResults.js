import React from 'react';
import '../stylesheets/SearchResults.css';

class SearchResults extends React.Component {

    render() {
        const { results } = this.props;
        if (results.length) {
            return (
                <div className="results-container">
                    {results.map((result, idx) => {
                        return (
                            <div key={idx} className="results-box">
                                <a href={result.url} target="_blank" rel="noreferrer">
                                    <label># {idx+1} </label>
                                    <label>CITY: {result.name} </label>
                                    <label>STATE: {result.state_name} ({result.state_abrv})</label>
                                </a>
                            </div>
                        );
                    })}
                </div>
            );
        }

        return null;
    }

}

export default SearchResults;