import React from 'react';
import axios from 'axios';
import '../stylesheets/Search.css';

class Search extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			query: '',
            results: [],
            message: ''
		};
        this.cancel = '';

        this.handleChange = this.handleChange.bind(this);
	}

    handleChange(e) {
        const query = e.target.value;

        if(!query) {
            this.setState({ query, results: [], message: '' } );
        }
        else {
            this.setState({ query, message: '' }, () => {
                this.fetchSearchResults(query);
            });
        }
    };

    fetchSearchResults = (query) => {
        const searchURL = 'https://abodo-misc.s3.amazonaws.com/us_cities.json';
        if (this.cancel) {
            this.cancel.cancel();
        }
        this.cancel = axios.CancelToken.source();
        
        axios.get(searchURL, { cancelToken: this.cancel.token })
            .then(res => res.json().filter(entry => (entry.name).includes(query) || (entry.state_name).includes(query)))
            .then((data) => {
                const resultNotFoundMsg = !data.length ? 'No places match requested query. Search differently.' : '';
                this.setState({
                    results: data,
                    message: resultNotFoundMsg
                });
            })
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    this.setState({ message: 'Failed to fetch results.' });
                }
            });
    };

    renderResults = () => {
        const { results } = this.state;
        if (results.length) {
            return (
                <div className="results-container">
                    { results.map((result) => {
                        return (
                            <div>
                                <label>Location: {result.name}, {result.state_name}</label>
                            </div>
                        );
                    })}
                </div>
            );
        }
    };

	render() {
        const {query} = this.state;
		return (
			<div className="search-container">
				<label className="search-label" htmlFor="search-input">
                <input
                    type="text"
                    value={query}
                    id="search-input"
                    placeholder="Search..."
                    onChange={this.handleChange}
                />
                <i className="fa fa-search search-icon"/>
				</label>

                { this.renderResults() }
			</div>
        )
	}

}

export default Search;