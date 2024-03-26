const { getData } = require('../config/axios.config');
const { getUrlQuery } = require('../utils/helpers.util');


/**
 * Get a list of new album releases featured in Spotify
 * función asincrónica getNewRelease toma una 
 * solicitud (req) y un límite de elementos (itemLimit) como argumentos
 * Extrae limit, offset, y page utilizando la función getUrlQuery
 */
const getNewRelease = async (req, itemLimit) => {
  const { limit, offset, page } = getUrlQuery(req.params, itemLimit);

  const { data: { albums: newRelease } } = await getData(`/browse/new-releases?limit=${limit}&offset=${offset}`, req.cookies.access_token);

  return { baseUrl: req.baseUrl, page, ...newRelease }
}


/**
 * Get Spotify catalog information for a single album.
 * Extrae albumId de los parámetros de la solicitud
 * llamada asincrónica a la API de Spotify para obtener los detalles de un álbum específico, 
 * identificado por albumId, utilizando el token de acceso para autenticación
 */
const getDetail = async (req) => {
  const { albumId } = req.params;

  const { data: albumDetail } = await getData(`/albums/${albumId}`, req.cookies.access_token);

  return albumDetail
}


module.exports = {
  getNewRelease,
  getDetail
}