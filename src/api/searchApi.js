// Seach api docs
// https://developers.google.com/youtube/v3/docs/search/list?apix_params=%7B%22part%22%3A%5B%22what%20is%20it%20like%20to%20be%20a%20youtuber%22%5D%7D

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search?'
const STATIC_KEY = 'AIzaSyCHncXHGTpBentOFU2GGapLaFfNBEEXXhc';
const QUERY_PART = 'what is it like to be a professional ';

function formatParams(params={}) {
    var paramString = '';
    Object.keys(params).forEach((paramKey) => {
        paramString = paramString + paramKey + '=' + params[paramKey] + '&';
    })
    return paramString;
}

export default function search(profession) {
    return new Promise((resolve, reject) => {
        var params = {
            key: STATIC_KEY,
            q: QUERY_PART + profession,
            part: 'snippet',
            maxResults: 15,
        }
        var url = SEARCH_URL + formatParams(params);

        fetch(url, {
            async: true,
            crossDomain: true,
            method: 'GET'
        }).then((response) => {
            return response.json();
        })
        .then((responseText) => {
            resolve(responseText)
        })
        .catch((error) => {
            reject(error)
        })
    })
}
