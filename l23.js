function outerFunc() {
    var money=150;
    function innerFunc() {
        money++;
        var a=10;
        function innermostFunc() {
            money++;
            a++;
            console.log('money:', money, 'a:', a);
        }
        return innermostFunc;
    }
    return innerFunc;
}
var fun=outerFunc();
var fun1=fun();
var fun2=fun();
fun1();
fun1();
fun2();
fun2();
fun2();
fun1();