const { getData } = require('../config/axios.config');

const getProfile = async (req) => {
    const { data: currentProfile } = await getData('/me', req.cookies.access_token);

    return currentProfile;
}

module.exports = {
    getProfile
}

/**
 * acceder y obtener el perfil del usuario actual 
 * desde un servicio web, 
 * o de un servidor API.
 */