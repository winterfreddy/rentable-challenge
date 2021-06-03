import React from 'react';
import axios from 'axios';
import '../stylesheets/Search.css';
import SearchResults from './SearchResults';

class Search extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			query: '',
            jsonBlob: [],
            results: [],
            message: ''
		};
        this.cancel = '';

        this.handleChange = this.handleChange.bind(this);
	}

    handleChange(e) {
        const query = e.target.value;
        // window.localStorage.removeItem('query');
        this.props.history.push(query);
        console.log(this.props.history);
            
        if(!query) {
            this.setState({ query, results: [], message: '' } );
        }
        else {
            this.setState({ query, message: '' }, () => {
                this.fetchSearchResults(query);
            });
        }
    };

    componentDidMount() {
        this.checkLocalStorage();

        axios.get('https://abodo-misc.s3.amazonaws.com/us_cities.json')
            .then(res => {
                // console.log(res);
                this.setState({jsonBlob: res.data})
            })
    }

    checkLocalStorage() {
        let data = this.props.match.params ? this.props.match.params.query : '';

        if(data !== "null" && data !== "undefined") {
            this.setState({ query: data }, () => {
                this.fetchSearchResults(data);
            });
        }
    }

    fetchSearchResults = (query) => {
        // const searchURL = 'https://abodo-misc.s3.amazonaws.com/us_cities.json';
        // if (this.cancel) {
        //     this.cancel.cancel();
        // }
        // this.cancel = axios.CancelToken.source();
        
        // axios.get(searchURL, { cancelToken: this.cancel.token })
        //     .then(res => {
        //         window.localStorage.setItem('query', query);
        //         let data = res.data.filter(entry => (entry.name).includes(query) || (entry.state_name).includes(query));
        //         const resultNotFoundMsg = !data.length ? 'No places found. Search differently.' : '';
        //         this.setState({
        //             results: data,
        //             message: resultNotFoundMsg
        //         });
        //     })
        //     .catch((error) => {
        //         if (axios.isCancel(error) || error) {
        //             this.setState({ message: `Failed to fetch results.` });
        //         }
        //     });
        let { jsonBlob } = this.state;

        let data = jsonBlob.filter(entry => (entry.name).includes(query) || (entry.state_name).includes(query));
        this.setState({results: data});
    };

	render() {
        const {query, message, results} = this.state;

		return (
			<div className="search-container">
                <div className="search-container-bar">
                    <label>Searching for</label>
                    <label className="search-label" htmlFor="search-input">
                        <input
                            type="text"
                            value={query}
                            id="search-input"
                            placeholder="City or State name..."
                            onChange={this.handleChange}
                        />
                        <i className="fa fa-search search-icon"/>
                    </label>
                </div>

                { message && <p className="message">{message}</p> }
                <SearchResults results={results}/>
			</div>
        )
	}

}

export default Search;