const admin = require('../config/firebase-node-config');
class Middleware{
    async decodeToken(req,res,next) {
        const token = req.headers.authorization;
        
        try {
            const decodeValue = await admin.auth().verifyIdToken(token);
            console.log(decodeValue);
            if (decodeValue){
                req.user = decodeValue;
                return next();
            }
            
            return res.json({message: "unauthorised"});
            
        } catch(e){
            return res.json("internal server error");
            }
        
    }
}
module.exports = new Middleware();