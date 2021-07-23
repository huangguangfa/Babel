
module.exports = function({types}){
    return {
        visitor:{
            BinaryExpression(path, state) {
                if(path.node.operator === "==="){
                    path.node.left = types.identifier("aaaa");
                    path.node.right = types.identifier("bbbb");
                }
            }
        }
    }
}