const { fsReadFileSync } = require("../nodeApi/index");
let sourceCode = fsReadFileSync('./code.js');

const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const types = require("@babel/types")
const ast = parser.parse(sourceCode,{
    sourceType:"unambiguous"
})
traverse(ast, {
    CallExpression(path,state){
        // const calleeName = generate(path.node.callee).code;
        // console.log(path.node.callee)
        // if ( types.isMemberExpression(path.node.callee) 
        //     && path.node.callee.object.name === 'console' 
        //     && ['log', 'info', 'error', 'debug'].includes(path.node.callee.property.name) 
        //    ) {
        //     const { line, column } = path.node.loc.start;
        //     path.node.arguments.unshift(types.stringLiteral(`filename: (${line}, ${column})`))
        // }
    },
    // FunctionDeclaration(path, state){
    //     console.log(path.node)
    // },
    // VariableDeclaration(path){
    //     num ++
    //     // console.log(path.node)
    // }
    ExportNamedDeclaration(path){
        console.log(path.node)
    }
});

