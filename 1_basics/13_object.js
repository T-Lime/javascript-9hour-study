/**
 * Object / 객체
 */

// key : value pair
let yuJin = {
    name : '안유진',
    group : '아이브',
    dance : function(){
        return `${this.name}이 춤을 춥니다.`; // this : 현재 안에 있는 객체를 가르킴
    }
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';

console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    dance: function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '코드팩토리';
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin'; // 오브젝트에 새로 키와 값을 추가
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);

/**
 * const로 선언한 객체의 특징
 * 
 * 1) const로 선언할경우 객체 자체를 변경할수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */

const wonYoung = {
    name : '장원영',
    group: '아이브',
}
console.log(wonYoung);

// wonYoung= {}; 1번에 해당하는 경우

wonYoung['group'] = '코드팩토리'; // 2번에 해당한다 가능하다.
console.log(wonYoung);

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(wonYoung));

/**
 * 모든 벨류값 다 가져오기
 */

console.log(Object.values(wonYoung));

const name = '안유진';

const yuJin3 = {
    name, //name : name 똑같을 경우 생략을 할 수 있다, 대신 ,을 넣어줘야함
}

console.log(yuJin3);