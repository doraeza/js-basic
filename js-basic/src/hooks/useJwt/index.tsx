import jwt from 'jsonwebtoken'
import fs from 'fs'
const useJwt = () => {
    const privateKey = fs.readFileSync("private.key");
    const token = jwt.sign({ email: "test@user.com" }, privateKey, {
      algorithm: "RS256",
      expiresIn: "1h"
    });
    console.log(token)
}
export default useJwt