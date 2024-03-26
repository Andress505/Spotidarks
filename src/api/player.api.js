/**
 * Responses:
 * 200 
 * 401 (issue with authentication) 
 * 403 (server understands the request but refuses to authorize) 
 * 429 (Too Many Requests)
 */
const { getData } = require('../config/axios.config');
const apiConfig = require('../config/api.config');


/**
 * Get tracks from the current user's recently played tracks
*/

const getRecentlyPlayed = async (req, itemLimit = apiConfig.DEFAULT_LIMIT) => {
  const { data: recentlyPlayed } = await getData(`/me/player/recently-played?limit=${itemLimit}`, req.cookies.access_token);

  return recentlyPlayed;
}


module.exports = { getRecentlyPlayed }

/**
 * realiza una solicitud a una API de música 
 * para obtener las pistas que el usuario ha reproducido 
 * recientemente, utilizando un token de acceso 
 * almacenado en las cookies 
 * y un límite de elementos que puede ser 
 * configurado al llamar a la función.
 */