/**
 * array functions
 */

let iveMembers =[
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]

console.log(iveMembers);

// push() : 값을 추가한다
iveMembers.push('코드팩토리');
console.log(iveMembers);

console.log('-----------')

// pop() : 마지막 값을 삭제한다. 삭제한 값을 반환한다.
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('-----------')
//shift() : 첫 번째 값을 삭제한다. 삭제한 값을 반환
console.log(iveMembers.shift());
console.log(iveMembers);

// unshift() : 첫 번째에 값을 추가한다.
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

//splice() : 시작점부터 정해진 지정갯수의 값들을 삭제하고 반환한다.
console.log(iveMembers.splice(0,3));
console.log(iveMembers);

iveMembers =[
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]
console.log(iveMembers);

// concat() : 새로운 array를 만들어서 반환한다.
console.log(iveMembers.concat('코드팩토리')); // iveMembers에 '코드팩토리'를 넣어서 새로운 array를 만들어서 반환
console.log(iveMembers);

// slice() : 시작점부터 어느 인덱스까지 삭제할지 지정할 수 있다. 후에 입력한 인덱스값은 제외하고 삭제된다.
// 기존에 있던 배열은 손상되지 않는다.
// 배열을 변경하지 않고 새로운 배열을 만든다.
console.log(iveMembers.slice(0,3));
console.log(iveMembers);

// spread operator ...을 넣으면 펼쳐서 값을 넣어준다. ...이 없으면 배열 안에 배열이 들어가게 된다 [[]]형식
let iveMembers2 =[
    ...iveMembers,
];

console.log(iveMembers2);

let iveMembers3 =[
    iveMembers,
]

console.log(iveMembers3);

console.log('----------------');

let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([
    ...iveMembers, 
] === iveMembers); 
//spread operator로 값을 펼쳐 놓으면 완전히 
//새로운 배열이 탄생하는 거이기 때문에 메모리 공간 자체가 달라서 false가 나온다.

// join() array를 string으로 값을 묶어준다.
console.log(iveMembers.join());
console.log(iveMembers.join('/')); //나눔의 기준이 되는 문자를 넣을 수 있다.
console.log(iveMembers.join(', '));

// sort()
// 오름차순으로 정렬을 할 수 있다.
iveMembers.sort();
console.log(iveMembers);

// reverse() : 정렬이 된 함수를 반환한다.sort()와는 반대로 정렬이 된다.
console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3,
];

console.log(numbers);

// a,b를 비교했을때
// 1) a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a,b)=>{
    return a > b ? 1 : -1
});
console.log(numbers);

numbers.sort((a,b)=> a > b ? -1 : 1);
console.log(numbers);

console.log('----------------');
// map() : 배열에 있는 모든 값들을 순환해서 그 각각에 값들을 변환한다. 기존에 있는 배열을 손상하지 않고 새로운 배열을 만든다.
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x)=>{
    if(x === '안유진'){
        return `아이브: ${x}`;
    }else{
        return x;
    }
}));
console.log(iveMembers);

// filter() : 모든 값을 순회하면서 x에다가 넣고 조건을 만족하는 값들만 새로 배열을 만들어서 반환한다.
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x)=> x % 2 === 0));

//find() : 조건에 해당되는 첫 번째 값만 반환한다.
console.log(numbers.find((x)=> x % 2 ===0));

//findIndex() : find()랑 같고 인덱스를 반환한다.
console.log(numbers.find((x)=> x % 2 ===0));

// reduce()
/**
 * 1. 초기값인 0이 p에 입력된다.
 * 2. numbers 배열의 첫번째 값인 1이 n에 입력된다.
 * 3. p + n 즉, 0 + 1의 결과값인 1이 반환된다.
 * 4. 3에서 반환한 값(1)이 p에 입력된다.ㅣ
 * 5. 배열의 두번째 값인 8이 n에 입력된다.
 * 6. p + n 즉, 1 + 8의 결과값인 9가 반환된다.
 * 7. 6에서 반환한 값 (9)가 p에 입력된다.
 * 8. numbers 리스트의 모든 값들을 다 순회할때까지 반복
 * 결국 모든 값을 다 더한 25가 반환된다.
 */
console.log(numbers.reduce((p, n)=> p + n, 0));
/** 1, 2, 3
 * 4, 5 ,6
 * 7 ..
 */