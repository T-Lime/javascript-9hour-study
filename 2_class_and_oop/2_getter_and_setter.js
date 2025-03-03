/**
 * Getter and Setter
 */

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할때
     * 2) private한 값을 반환할때
     *  2-2) 실제로 값을 저장하고 있는데 외부에서 액세스하지 못하는 값
     */
    get nameAndYear(){
        return `${this.name}-${this.year}`;

    }
    
    /**
     * setter는 특정 property를 액세스 할 수 있게 도와준다.
     */
    set setName(name){ //매개변수를 무조건 하나이상 받아야함
        this.name = name; //property
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear); // nameAndYear에 ()를 붙이면 안된다. 함수가 아니다.

yuJin.setName = '장원영';
console.log(yuJin);

class IdolModel2{
    #name; //#은 es7 문법 
    year;
    constructor(name,year){
        this.#name = name;
        this.year = year;
    }

    get name(){ //이미 존재했던 속성인 것 처럼 표현할 때 가끔 사용할 때가 있다.
        return this.#name;
    }
e
    set name(name){ // 실무에서 settr를 많이 사용하지 않는다. 사용하지 않는 걸 추천 - 코드팩토리
        this.#name = name;
    }

}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2);
console.log(yuJin2.name);//#name값은 원래 가져올 수 없는데 get를 사용해서 가져오게된 경우

yuJin2.name = '코드팩토리';
console.log(yuJin2.name);