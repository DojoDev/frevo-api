const jwt = require('jsonwebtoken');
const variables = require('../bin/config/variables');

module.exports = async (req, res, next) => {
    let token = req.body.token || req.query.query || req.headers['frevo-access-token'];
    let secKey = variables.Security.secretKey;

    if (token) {
        try {
            let decoded = await jwt.verify(token, secKey);
            console.log(decoded);
            req.userLog = decoded;
            next();
        } catch (error) {
     res.status(401).send({message: 'Tolken Inválido'});
     return;
        }

    } else {
        res.status(401).send({ message: 'Você precisa informar o token correto' });
        return;
    }


}