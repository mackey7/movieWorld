import React, { Component } from 'react'
import SearchContainer from '../../containers/SearchContainer/SearchContainer'



class SearchPage extends Component {
    render() {
        const UrlId = this.props.match.params.id
        return (
            <div>
                <SearchContainer UrlId={UrlId} />
            </div>
        )
    }
}
export default SearchPage