/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 *10/ 2 % 3 스트링으로 변환해서
 * 반환받고 싶다면 어떻게 해야할까?
 */

console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

/**
 * DRY 
 * 반복하지 마라. DRY를 지키는 게 좋은 코드를 작성하는 방법
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */

function calculate(){
    console.log((3 * 10 / 2 % 3).toString());
}

// calculate(파라미터);

function calculate(number){
    console.log((number * 10 / 2 % 3).toString());
}
/**
 * 함수에서 입력받는 값에대한 정의를 Parameter라고 한다.
 * 
 * 실제 입력하는 값은 argument라고 한다.
 */
calculate(4);
calculate(5);

function multiply(x, y){
    console.log(x * y);
}

multiply(2,4);

function multiply(x,y = 10){ // =으로 y에 기본값으로 10을 할당해줬다.
    console.log(x * y);
}

multiply(2,4);
multiply(2);

console.log('----------');
/**
 * 반환받기
 * return 받기
 */

function multiply(x,y){
    return x * y;
}

const result1 = multiply(2,4);
console.log(result1);

const result2 = multiply(4,5);
console.log(result2);

/**
 * Arrow 함수 , 화살표 함수
 */
const multiply2 = (x,y)=>{
    return x * y;
}

console.log(multiply2(3,4));

const multiply3 = (x,y)=> x*y; //블록문이 하나 일 경우 {}와 return을 생략할 수 있다.
console.log(multiply3(4,5));

const multiply4 = x => x*2; //매개변수가 1개라면 ()를 생략할 수 있다.
console.log(multiply4(2));

const multiply5 = x => y => z =>`x:${x} y:${y} z:${z}`;
console.log(multiply5(2)(5)(10));

//위 함수를 일반 함수로 푼다면
function multiply6(x){
    return function(y){
        return function(z){
            return   `x:${x} y:${y} z:${z}`
        }
    }
}
console.log(multiply6(3)(4)(5));

const multiplyTwo = function(x,y){ //const multiplyTwo = (x,y)=>{}
    return x * y;
}

console.log(multiplyTwo(4,5));

const multiplyThree = function(x, y, z){
    console.log(arguments); //arguments라는 함수를 실행할 때 실제로 입력한 arguments값들을 순서대로 반환받을 수 있다.
    return x * y * z;
}

console.log('------------')
console.log(multiplyThree(4,5,6));

const multiplyAll = function(...arguments){ // ...arguments를 하면 무한하게 arguments를 받을 수 있다.
    return Object.values(arguments).reduce((a,b)=>a*b,1);
}

console.log(multiplyAll(3,4,5,6,7,8,9,10));

// immediately invoked function
(function(x,y){
    console.log(x * y);
})(4,5)

console.log(typeof multiply);
console.log(multiply instanceof Object); //instanceof : 좌측(비교하려는 값)이랑 우측에 각각 값을 넣어서 비교할 수 있다.
//함수는 자바스크립트에서는 오브젝트다.