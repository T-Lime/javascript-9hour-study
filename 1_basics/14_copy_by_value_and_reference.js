/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다. ,오브젝트, 배열, 함수 빼고 만들어지는 것은 다 primitive이다.
 * 2) 객체는 copy by reference다
 */

/**
 * 해당 메모리에 저장되어 있는 값만
 * 그대로 그 순간에만 저장함
 * 수정하면 서로 다른 값이 되어버린다.
 */

//copy by value
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

console.log('---------------')

clone += ' 안유진 입니다.'
console.log(original);
console.log(clone);


//copy by reference
// reference = 그대로 가져오다.

/**
 * 오브젝트, 배열, 함수는
 * 해당 값 자체를 메모리에 저장하는 게 아니라
 * 값이 저장되어 있는 해당 '주소'를
 * 값으로 저장한다.
 * 
 * 그래서 어느 한 쪽을 지정해서 수정을 해도 서로 같이 수정이 된다.
 */
let originalObj ={
    name : '안유진',
    group : '아이브',
};

let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('----------------')

originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj); // true
console.log(original===clone); // false

originalObj = {
    name:'최지호',
    group:'코드팩토리',
}

console.log(originalObj === cloneObj); //false

const yuJin1 = {
    name: '안유진',
    group: '아이브',
}

const yuJin2 = yuJin1;

const yuJin3 ={
    name: '안유진',
    group: '아이브',
}

console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // false

/**
 * Spread Operator
 */

const yuJin4 ={
    ...yuJin3, // copy by value가 된다. 새로 오브젝트를 선언했기 때문.
};
console.log(yuJin4);

console.log(yuJin4 === yuJin3); // false


const yuJin5 = {
    year : 2003,
    ...yuJin3,
};
console.log(yuJin5);

const yuJin6 ={
    name:'코드팩토리', // yuJin3에 name값이 있기 때문에 새로 할당이 되고 기존 값인 '코드팩토리'가 사라진다.
    ...yuJin3,
};

console.log(yuJin6);

const yuJin7 = {
    ...yuJin3,
    name : '코드팩토리', // 먼저 추가가 되는 yuJin3에 있는 name이 그 뒤에 있는 name에 있는 '코드팩토리'로 덮어 씌어진다.
}

console.log(yuJin7);

const numbers = [1, 3, 5];
const numbers2 = [
    10,
    ...numbers, 
    15,
];
console.log(numbers2); // 앞에는 10이 추가가 되고 뒤에는 15가 추가가 된다. 이와같이 순서는 굉장히 중요하다.