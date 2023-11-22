function identity(val) {
    return val;
}
// 文字列と数字以外も入れられる
var boolOutput = identity(true);
var strOutput = identity('hoge');
// 文字列として扱える
console.log(strOutput.length);
