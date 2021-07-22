const fs = require('fs');                
const fsReadFileSync = function(path){
    let code = fs.readFileSync(path,'utf-8');
    return code;
}

module.exports = {
    fsReadFileSync
}
