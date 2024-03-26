const apiConfig = require('../config/api.config');
const axiosConfig = require('../config/axios.config');

/**
 * "(code)"es un código de autorización 
 * obtenido después de que un usuario 
 * autoriza una aplicación para actuar en su nombre
 */

const getToken = async (code) => {
    try {

/**
 * Utiliza la instancia de Axios configurada 
 * (esperada como axiosConfig.token) para hacer 
 * una solicitud POST asíncrona al endpoint '/token' 
 * "endpoint" es la URL específica donde un 
 * servicio API puede ser accedido 
 * por una aplicación para realizar una operación
 */

        const response = await axiosConfig.token.post('/token', {
            grant_type: 'authorization_code',
            code, 
            redirect_uri: apiConfig.REDIRECT_URI
        });

        /**
         * grant_type: Este es el tipo de concesión de token 
         * que se está solicitando. Los tipos comunes incluyen 
         * authorization_code para el flujo de autorización de 
         * código o refresh_token para obtener un nuevo 
         * token de acceso utilizando un token de actualización.

         * code: Código de autorización que se obtiene 
         * después de que el usuario autoriza la aplicación
         */

        return response;

    } catch (err) {
        console.log(err);
    }
}

module.exports = { getToken }
