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


//for loop

for(var a=100;a<=200;a++){
    console.log(a)
}
console.log(a)

// for loop with array

var arr=[5,'ab','true',2.5]
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

// function with array,loop,push,if methods

var even=[];
var odd=[];
var invalid=[];

function evenOrOdd(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            invalid.push(arr[i]);
        }
        else if(arr[i]===0){
            invalid.push(arr[i]);
        }
        else if(arr[i]%2===0){
            even.push(arr[i]);
        }
        else{
            odd.push(arr[i]);
        }
    }
    return {
        evenarray:even,
        oddarray:odd,
        invalidarray:invalid
    }
}
console.log(evenOrOdd([1,2,3,4,5,0,-5,6,-7,8]))