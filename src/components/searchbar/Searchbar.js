import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Searchbar.scss';

class Searchbar extends React.Component {

    render() {
        
        return (
            <div className='container'>
                <input type='text' id='search' className='searchBar' />
                <SearchIcon className='searchIcon' />
            </div>
        );
    }
}

export default Searchbar;