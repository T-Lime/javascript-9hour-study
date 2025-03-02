/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

// 명시적
let stringAge = age.toString();

console.log(typeof stringAge, stringAge);

// 암묵적 , 기능적으로는 가능하지만 실제로는 쓰지 않는 것이 좋다. 읽는 사람도 헷갈리게 해선 안됨.
let test = age +''; //숫자 + 글자열 = 글자열 , 다른 언어에서는 이러한 행위가 허용되지 않는 경우가 되게 많다
console.log(typeof test, test)

console.log('98'+2); //982라는 값이 나온다, '98'이 str이기 때문에 2도 str로 바껴서 이와 같은 값이 나온다.
console.log('98' * 2); //196이라는 값이 나온다 str에는 곱한다는 개념이 없으니까 num으로 바껴서 해당 값이 나온다
console.log('98'-2); // str에는 -라는 개념이 없다 96이 나온다.

console.log('-------------')
/**
 * 명시적 변환 몇가지 더 배우기
 */

console.log(typeof (99).toString());
console.log(typeof (true).toString());
console.log(typeof (Infinity).toString());


// 숫자 타입으로 변환

console.log(typeof parseInt('0'), parseInt('0')); //parseInt : 정수로 변환해라.
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); //parseFloat:소숫점의 숫자를 다룰때, 실수
console.log(typeof + '1', + '1');


console.log('-------------')
/**
 * Boolean 타입으로의 변환
 * 값이 존재하면 true
 * 값이 존재하지 않으면  예:) false  : 0, undefined, null
 */

console.log(!!'x'); //str안에 값이 있어서 Bool로 봤을때 값이 있기 때문에 true다

console.log(!!''); // false

console.log(!!0); //false , 1은 true , 0은 false
console.log(!!'0'); // str이고 값이 있는 str이기 때문에 true
console.log(!!'false');// false라는 bool이 아니라 ''때문에 str이다.
console.log(!!undefined);//false
console.log(!!null);//false

console.log(!!{}); //true, 오브젝트 같은 경우는 무조건 true가 나온다
console.log(!![]); //배열도 마찬가지


/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false를 반환한다.
 */