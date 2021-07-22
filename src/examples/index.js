const { fsReadFileSync } = require("../nodeApi/index");
let sourceCode = fsReadFileSync('./code.js');

const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

const ast = parser.parse(sourceCode,{
    sourceType:"unambiguous"
})

traverse(ast, {
    enter(path,state){
        console.log('aaaa',path)
    },
    ArrayExpression(a, state) {
        console.log(a)
    }
});
