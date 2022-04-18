const expressJWT = require("express-jwt");
const secret = require("../configs/chave");

module.exports = expressJWT({
    secret: secret.key, algorithms: ["HS256"],
});