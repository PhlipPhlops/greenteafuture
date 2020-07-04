import React from 'react';
import './Watch.scss';
import Searchbar from '../../components/searchbar/Searchbar'
import YouTube from 'react-youtube';
import search from '../../api/searchApi';

class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestionList: [],
            playingVideoId: 'bvAEJ8G9l9U',
        }

        this.searchForSuggestions = this.searchForSuggestions.bind(this);
    }

    componentDidMount() {
        this.searchForSuggestions('computer science major');
    }

    searchForSuggestions(profession) {
        search(profession).then((res) => {
            this.setState({
                suggestionList: res.items
            })
        })
    }

    youtubePlayer() {
        function _onReady(event) {
            // Access to player in all event handlers via event.target
            event.target.pauseVideo();
        }

        const opts = {
            playerVars: {
                autoplay: 1,
            },
        }

        return <YouTube
                    className="youtube-player"
                    videoId={this.state.playingVideoId}
                    opts={opts}
                    onReady={_onReady}
                />;
    }

    suggestionItemView(videoJson, idx) {
        const _playVideo = () => {
            this.setState({
                playingVideoId: videoJson.id.videoId, 
            });
        };

        return (
            <a className="suggestion-item" id={idx} onClick={_playVideo}>
                <div className="thumbnail-container">
                    <img src={videoJson.snippet.thumbnails.medium.url} />
                </div>
                <div className="info-container">
                    <span className="title">{videoJson.snippet.title}</span>
                    <span className="channel-title">{videoJson.snippet.channelTitle}</span>
                    {/* <span className="description">{videoJson.snippet.description}</span> */}
                </div>
            </a>
        );
    }

    suggestionListView() {
        var suggestionList = this.state.suggestionList || [];

        return (
            <div className="suggestion-list">
                {suggestionList.map((suggestion, idx) => {
                    return this.suggestionItemView(suggestion, idx)
                })}
            </div>
        )
    }

    render() {

        return (
            <div className='root'>
                <div className='headerbar'>
                    <div className='title-wrapper'>
                        <span className='title-text'>greentea</span>
                        <span className='title-text-thin'>future</span>
                    </div>
                    <Searchbar onSubmit={this.searchForSuggestions} />
                </div>
                <div className='body'>
                    <div className='player-container'>
                        {this.youtubePlayer()}
                    </div>
                    {this.suggestionListView()}
                </div>
            </div>
        );
    }
}

export default Watch;