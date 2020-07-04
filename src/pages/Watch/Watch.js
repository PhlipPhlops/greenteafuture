import React from 'react';
import './Watch.scss';
import Searchbar from '../../components/searchbar/Searchbar'

class Watch extends React.Component {

    render() {
        return (
            <div className='root'>
                <div className='headerbar'>
                    <span className='title-text'>greentea</span>
                    <Searchbar />
                </div>
            </div>
        );
    }
}

export default Watch;