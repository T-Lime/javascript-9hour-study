/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 */

var name = '코드팩토리';
console.log(name);// ''를 쓰면 변수가 아니라 글자로 인식을 한다.

var age = 32; //숫자도 가능하다
console.log(age);

let ive = '아이브'
console.log(ive);


/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */
ive = '안유진';
console.log(ive);

const newJeans ='뉴진스';
console.log(newJeans);

// newJeans = '코드팩토리'; 

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것.
 * 2) 할당
 */
var name;
console.log(name);

let girlFriend;
console.log(girlFriend);

const girlFriend2;
