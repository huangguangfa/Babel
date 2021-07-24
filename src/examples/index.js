const { fsReadFileSync } = require("../nodeApi/index");
let sourceCode = fsReadFileSync('./code.js');
const { transformFromAstSync } = require("@babel/core");

const parser = require('@babel/parser');
const insertParametersPlugin = require('./BabelPlugin/insertParametersPlugin');
// const testPlugin = require("./BabelPlugin/testPlugin");

const ast = parser.parse(sourceCode, {
    sourceType: 'unambiguous',
    plugins: ['jsx']
});

const { code } = transformFromAstSync(ast, sourceCode, {
    plugins: [ insertParametersPlugin ]
});
console.log(code);