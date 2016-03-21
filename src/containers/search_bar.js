import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchStock} from '../actions/index';


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {symbol: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({symbol: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        // We need to go fetch weather data
        this.props.fetchStock(this.state.symbol);
        this.setState({ symbol: ''});
    }


    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input
                    placeholder="Ticker Symbol"
                    className="form-control"
                    value={this.state.symbol}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchStock}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

