const axiosConfig = require('../config/axios.config');

const getRefreshToken = async (refreshToken) => {
    try {
        const response = await axiosConfig.token.post('/token', {
            grant_type: 'refresh_token',
            refresh_token: refreshToken
        });

        return response;
    } catch (err) {
    }
}

module.exports = { getRefreshToken }

/**
 * proporciona una manera de renovar tokens
 * de acceso para mantener la autenticación 
 * de usuario en aplicaciones que requieren 
 * comunicación segura con APIs o servidores web.
 */