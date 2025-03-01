/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1)덧셈
 * 2)뺄셈
 * 3)곱셈
 * 4)나눗셈
 * 5)나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log('----------');

console.log(10 * (10+10));

/**
 * 증가와 감소
 */
let number = 1;

number ++;
console.log(number);

number --;
console.log(number);
console.log('----------');
/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number ++;
console.log(result, number);

result = number --;
console.log(result, number);

// 실제로는 ++와 --를 앞에다 두는 경우는 거의 없다. 뒤에다가 쓰는 게 좋다
result = ++ number;
console.log(result, number);

result = -- number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +, -사용하면 어떻게 될까?
 *      문자열 -> 숫자로 타입이 변한다
 */
let sample ='99';

console.log(+sample);
console.log(typeof +sample); // number로 나옴

console.log(sample);
console.log(typeof sample); // string으로 나옴

sample =true; //true를 숫자로 변환된 값은 1이다.
console.log(+sample);
console.log(typeof +sample);

sample = false; //false는 숫자로 변환된 값은 0이다.
console.log(+sample);
console.log(typeof +sample);

sample='안유진';
// NaN -> Not a Number;
console.log(+sample); //NaN이 나온다.

sample = '99';
console.log(-sample);
console.log(typeof -sample);

/**
 * 할당 연산자 (assingnment operator)
 */
number = 100;
console.log(number);

number += 10; // number = number + 10;
console.log(number);

number -= 10; //number = number - 10;
console.log(number);

number *= 10; //number = number * 10;
console.log(number);

number /= 10; //number = number / 10;
console.log(number);

number %= 10; //number = number % 10;
console.log(number);

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);
console.log(5 == '5'); // ==는 값만 비교한다.
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

console.log(5 === 5); // ===는 타입까지 비교한다.
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');

console.log('-----------');

console.log(5 != 5); // !는 전통적으로 모든 프로그래밍 언어에서 반대라는 뜻이다.
console.log(5 != '5'); 
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');

console.log('-----------');

console.log(5 !== 5); 
console.log(5 !== '5'); 
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');

console.log('-----------');

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자 (ternary operator)
 */
console.log(10 > 0 ? '10이 0보다 크다':'10이 0보다 작다'); // 참일때 코드 : 거짓일때 코드

console.log('-----------');

/**
 * 논리 연산자
 * 
 * 1) && (and)
 * 2) || (or)
 */


// && 조건은 모두 true여야 true를 반환한다.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('-----------');

// ||는 하나만 true여도 true를 반환한다.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('-----------');

console.log(10 > 1 && 20 > 2); // 둘다 참이여서 true가 나옴
console.log(10 < 1 && 20 > 2); //false, true여서 false가 나온다.
console.log(10 < 1 && 20 < 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */
console.log('-----------');

console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');
console.log('-----------');

/**
 * 지수 연산자
 */
console.log( 2**2);
console.log(10 ** 3);

/**
 * null 연산자
 */
let name;
console.log(name);

name = name ??'코드팩토리'; // ??는 좌측값이 null이거나 undefined일때 오른쪽 값을 반환해라
console.log(name);

name = name ?? '아이브'; // 이미 위에다가 '코드팩토리'를 넣었기 때문에 null이나 undefined이 아니기 때문에 '코드팩토리'가 나온다.
console.log(name);

let name2;
name2 ??= '코드팩토리';
console.log(name2);