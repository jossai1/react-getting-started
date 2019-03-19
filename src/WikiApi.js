import React, {Component} from 'react';

class WikiApi extends Component {
    state = {
        wikiData: []
    };

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Nigeria&format=json&origin=*";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    wikiData: result
                })
            });
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
