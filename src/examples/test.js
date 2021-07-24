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
    VariableDeclaration(path){
        path.buildCodeFrameError(path, {})
    }
    
});

const { code } = generate(ast);

// console.log(code)

