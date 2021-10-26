const { transformFromAstSync } = require("@babel/core");
const parser = require('@babel/parser');
const traverse = require("@babel/traverse").default
const generate = require("@babel/generator").default
const { fsReadFileSync } = require("../nodeApi/index");
let sourceCode = fsReadFileSync('./code.js');
// const insertParametersPlugin = require('./BabelPlugin/insertParametersPlugin');
// const testPlugin = require("./BabelPlugin/testPlugin");

const codes = `
    console.log(1);
    function func() {
        console.info(2);
    }
`

// 第一步先把源码转AST树
const ast = parser.parse(codes, { sourceType: 'unambiguous' });

traverse(ast,{
    CallExpression(path, state){
        console.log(11111)
        // console.log(path)
    }
})

const { code, map } = generate(ast);


// console.log(code, map);






// 第一步先把源码转AST树
// const ast = parser.parse(codes, { sourceType: 'unambiguous' });


// 【插件形式】 进行AST循环、这里做源码的增删改查
// const { code } = transformFromAstSync(ast, sourceCode, {
//     plugins: [testPlugin]
// });

