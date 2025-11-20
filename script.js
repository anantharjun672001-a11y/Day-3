/* function add(a,b,c){
    console.log(a+b+c)
}
add(10,10,30)
add(50,10,40)

function sub(a,b,c){
    console.log(a-b-c)
}
sub(30,40,50)
sub(10,2,3) */

/* function add(a,b,c){
    return a+b+c;
}
function sub(a,b,c){
    return a-b-c;
}
console.log(add(10,20,30))
console.log(sub(10,2,2)) */

//Function with multiple returns
//Type:1 Object

function arithmetic(a,b){
    return{        
        sum:a+b,
        sub: a-b,
        mul: a*b,
        div: a/b,
        reminder: a%b
    }

}
console.log(arithmetic(10,3))

//Type:2 Array

function arithmetic1(a,b){
    return [a+b,a-b,a*b,a/b,a%b]
}
console.log(arithmetic1(10,3))


//array print

var arr=['a','123','true','undefined']
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr.length)
console.log(arr.length-1)