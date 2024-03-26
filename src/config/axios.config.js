const axios = require('axios').default;
const querystring = require('querystring');

const apiConfig = require('./api.config');
const { access } = require('fs');

/**
 * crea una nueva instancia de Axios llamada token.
 * Utiliza el ID de cliente y el secreto de cliente del archivo api.config
 * establece el encabezado Content-Type 
 * en 'application/x-www-form-urlencoded' 
 * como se requiere para la solicitud del token.

 * Un token de actualización es una credencial 
 * de seguridad que permite a las aplicaciones 
 * cliente obtener nuevos tokens de 
 * acceso sin necesidad de que los usuarios 
 * vuelvan a autorizar la aplicación.
 */

const token = axios.create({
    baseURL: apiConfig.TOKEN_BASE_URL,
    headers: {
        'Authorization': `Basic ${(Buffer.from(apiConfig.CLIENT_ID + ':' + apiConfig.CLIENT_SECRET).toString('base64'))}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

/**
 * se utiliza para hacer solicitudes de API 
 * distintas a la obtención del token de acceso
 */

const api = axios.create({ baseURL: apiConfig.BASE_URL });

/** 
 * getData realiza una solicitud GET 
 * autenticada a un punto final de la API especificado
*/

const getData = async (apiUrl, access_token) => {

/**
 * El bloque try utiliza la instancia de 
 * Axios api para hacer una solicitud GET a la apiUrl
 */

    try {
        const response = await api.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })
        return response;
    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    token,
    getData
}

/**Un token Bearer se utiliza para proporcionar 
 * seguridad entre el cliente y el servidor. 
 * autenticación HTTP donde el portador del token, 
 * el cliente que lo posee, es autorizado para 
 * acceder a ciertos recursos o rutas en el servidor o API.


*/