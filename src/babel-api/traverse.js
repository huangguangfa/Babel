const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default

const code = `
    let user = {
        name:'gf',
        age:18
    }
    function test(){}
`
// 源码转AST
const ast = parser.parse(code);
// 遍历AST节点, 指定 visitor 函数
traverse(ast,{
    VariableDeclarator(path){
        console.log('path',path)
        console.log(path.node) // 当前 AST 节点
        console.log(path.get()) // 获取和设置当前节点属性的 path
        console.log(path.parent) // 父级 AST 节点
        console.log(path.scope) // 获取当前节点的作用域信息
        // 获取兄弟节点
        path.getSibling(function (path){ console.log(path) })
        // 获取上兄弟节点
        path.getPrevSibling(function ( path ){ console.log(path) })
        // 获取下兄弟节点
        path.getNextSibling(function (path){  console.log(path)  })
        // 从当前节点向上查找节点
        path.find(function (path){ console.log(path)  })
        // path.isXxx 判断当前节点是不是 xx 类型
        // path.assertXxx 判断当前节点是不是 xx 类型，不是则抛出异常
        // path.insertBefore、path.insertAfter 插入节点
        // path.replaceWith、path.replaceWithMultiple、replaceWithSourceString 替换节点
        // path.remove 删除节点
        // path.skip 跳过当前节点的子节点的遍历
        // path.stop 结束后续遍历
    },
    FunctionDeclaration:{
        // 遍历当前节点的子节点前调用
        enter (path, state) {
            console.log(path)
            path.node.id.name = 'demo';
        },
        // 调用是遍历完当前节点的子节点后调用
        exit (path, state) {
            console.log(path)
        }
    },
    // 也支持多种节点类型callback
    // 'FunctionDeclaration|VariableDeclarator'(path, state){
    //     console.log(path)
    // }
})

console.log(ast)