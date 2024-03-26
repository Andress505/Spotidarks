const { getData } = require('../config/axios.config');
const { getUrlQuery } = require('../utils/helpers.util');


/**
 * Get a list of Spotify featured playlists
 */
const getFeatured = async (req, itemLimit) => {
  const { offset, limit, page } = getUrlQuery(req.params, itemLimit);

  const { data: featuredPlaylist } = await getData(`/browse/featured-playlists?limit=${limit}&offset=${offset}`, req.cookies.access_token);

  return { baseUrl: req.baseUrl, page, ...featuredPlaylist }
}


/**
 * Get a list of Spotify playlists tagged with a particular category
 */
const getCategoryPlaylist = async (req, itemLimit) => {
  const { offset, limit, page } = getUrlQuery(req.params, itemLimit);
  const { categoryId = 'toplists' } = req.params;

  const { data: catPlaylist } = await getData(`/browse/categories/${categoryId}/playlists?limit=${limit}&offset=${offset}`, req.cookies.access_token);

  const baseUrl = `${req.baseUrl}/${categoryId}`;

  return { baseUrl, page, ...catPlaylist }
}


module.exports = {
  getFeatured,
  getCategoryPlaylist,
}