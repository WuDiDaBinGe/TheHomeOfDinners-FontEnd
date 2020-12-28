function Nrange(n){
    var f = length => Array.from({length}).map((v, k) => k);
    return f(n);
}
export {Nrange};