const {
    getData,
    musixmatchApi
} = require('../config/axios.config');

const getRecommendedTrack = async (req, trackSeed, itemLimit) => {
    const { data: { tracks: recommendedTracks } } = await getData(`/recommendations?seed_tracks=${trackSeed}&limit=${itemLimit}`, req.cookies.access_token);

    return recommendedTracks;
}


/**
 * Get Spotify catalog information for a single track 
 * identified by its unique Spotify ID
 */
const getDetail = async (req) => {
    const { trackId } = req.params;

    const { data: trackDetail } = await getData(`/tracks/${trackId}`, req.cookies.access_token);

    return trackDetail;
}


/**
 * Retrieves lyrics for a given track and artist using the Musixmatch API.
 */
const getLyrics = async (trackName, artistName, isrc = null) => {

    const { message: { body: { lyrics } } } = await musixmatchApi('matcher.lyrics.get?', {
    q_track: trackName.toLowerCase(),
    q_artist: artistName.toLowerCase(),
    track_isrc: isrc
    });

    return lyrics;
}


module.exports = {
    getRecommendedTrack,
    getDetail,
    getLyrics
}