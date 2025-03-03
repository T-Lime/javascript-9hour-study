/**
 * Inheritance
 * 부모가 자식한테 상속을 받지는 못한다.
 */

class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel{ // extends 뒤에 상속을 주는 부모 클래스명을 입력한다.
    dance(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

class MaleIdolModel extends IdolModel{
    sing(){
        return '남자 아이돌이 노래를 부릅니다.';
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin);

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jiMin.sing());
console.log(jiMin.year);

const cf = new IdolModel('코드팩토리', 1992);
console.log(cf);

console.log(cf.name);

console.log(yuJin instanceof IdolModel); // IdolModel을 상속을 했기 때문에 맞다.
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof MaleIdolModel);

console.log('----------------')

console.log(jiMin instanceof IdolModel); 
console.log(jiMin instanceof FemaleIdolModel);
console.log(jiMin instanceof MaleIdolModel);

console.log('----------------')

console.log(cf instanceof IdolModel); 
console.log(cf instanceof FemaleIdolModel);
console.log(cf instanceof MaleIdolModel);
