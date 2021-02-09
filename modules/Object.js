// let a={
//     x:{
//         y:1,
//         b:{
//             a:2
//         }
//     },
//     z:{
//         b:2
//     }
// }
// traverse(a)

// 遍历对象
const  traverse=function(o){
    for (let i in o) {
        if (!!o[i] && typeof (o[i]) === "object") {
            console.log(i, o[i]);
            traverse(o[i]);
        }
    }
}


export {
    traverse
}
