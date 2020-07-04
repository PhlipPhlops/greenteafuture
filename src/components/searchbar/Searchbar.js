import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Searchbar.scss';

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.handleSubmit();
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit() {
        this.props.onSubmit(this.state.value);
    }

    render() {
        
        return (
            <div className='container'>
                <input
                    type='text'
                    id='search'
                    className='searchBar'
                    onKeyDown={this.onKeyDown}
                    onChange={this.handleChange}
                />
                <SearchIcon className='searchIcon' />
            </div>
        );
    }
}

export default Searchbar;