const { transformFromAstSync } = require("@babel/core");
const parser = require('@babel/parser');
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const types = require("@babel/types");
const { fsReadFileSync } = require("../nodeApi/index");
let sourceCode = fsReadFileSync('./code.js');
// const insertParametersPlugin = require('./BabelPlugin/insertParametersPlugin');
// const testPlugin = require("./BabelPlugin/testPlugin");

const codes = `
    console.log(1);
    function test() {
    }
    function demo(){
        let a = 'aa'
    }
`

// 第一步先把源码转AST树
const ast = parser.parse(codes, { sourceType: 'unambiguous' });

traverse(ast,{
    FunctionDeclaration(path){
        if( generate(path.node.id).code === 'test' ){

        }
        console.log(path)
    },
    // VariableDeclaration(path, state){
    //     let [ node ] = path.node.declarations;
    //     node.init.value = 'change value';
    // }
})

const { code, map } = generate(ast);


console.log("code",code)


// 第一步先把源码转AST树
// const ast = parser.parse(codes, { sourceType: 'unambiguous' });


// 【插件形式】 进行AST循环、这里做源码的增删改查
// const { code } = transformFromAstSync(ast, sourceCode, {
//     plugins: [testPlugin]
// });

