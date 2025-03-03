/**
 * Class Keyword
 * 속성 정의하는 걸 안 해도 된다
 * 대신 안에다가 constructor를 정의 해줘야 한다
 * 어떤 속성이 존재해야하는지 정의해주는 게 서로 소통하는데에 좋다
 */
class IdolModel{
    name; // name : name
    year; // year: year

    constructor(name, year){
        this.name = name; // this 현재 인스턴스
        this.year = year;
    }

    sayName(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

// constructor - 생성자

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul  = new IdolModel('가을', 2002);
console.log(gaeul);
const ray  = new IdolModel('레이', 2004);
console.log(ray);
const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);
const liz = new IdolModel('리즈', 2004);
console.log(liz);
const eseo = new IdolModel('이서', 2007);
console.log(eseo);

console.log(yuJin.name);
console.log(yuJin.year);

console.log(yuJin.sayName());
console.log(wonYoung.sayName());

console.log(typeof IdolModel); // 함수
console.log(typeof yuJin); // 오브젝트