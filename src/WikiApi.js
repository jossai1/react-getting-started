import React, {Component} from 'react';
import axios from 'axios';
class WikiApi extends Component {
    state = {
        wikiData: []
    };

    fetchWikiData () {
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Nigeria&format=json&origin=*";
        let promise = axios.get(url)
            .then( (response) => {
                this.setState({
                    wikiData: response.data
                });
                console.log(response.data);
            })
            .catch( (error) => {
                // handle error
                console.log("error", error);
            });
        return promise;
    }
    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
       this.fetchWikiData();
    }

    render() {
        const {wikiData} = this.state;
        const data = wikiData.map((item, index) => {
            return (
                    <li key={index}>
                       {item}
                    </li>
            )
        });
        return (
            <ul>{data}</ul>
        )
    }
}

export default WikiApi;
