const parsers = require('@babel/parser');

// @babel/parser把源码转成 AST
const code = `
    let user = {
        name:'gf',
        age:18
    }
`
// parse 返回的 AST 根节点是 File（整个 AST）
let ast = parsers.parse(code);
console.log(ast)

// parseExpression 返回的 AST 根节点是是 Expression（表达式的 AST），粒度不同
try{
    let ExpressionAST = parsers.parseExpression(code);
    console.log(ExpressionAST)
}catch(e){
    console.log(e)
}
