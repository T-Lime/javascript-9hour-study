/**
 * Super and Override
 */

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayHello(){
        return `안녕하세요 ${this.name}입니다.`
    }
}

class FemaleIdolModel extends IdolModel{
    // 노래 / 춤
    part;

    constructor(name, year, part){
        super(name, year); // 부모 클래스를 의미, 부모 클래스에 있는 constructor를 실행한다
        this.part =part;
    }

    sayHello(){
        // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고있습니다.`;
        return `${super.sayHello()} ${this.part}를 맡고있습니다.` //super를 사용해서 부모에 있는 sayHello를 가져올 수 있다.
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());