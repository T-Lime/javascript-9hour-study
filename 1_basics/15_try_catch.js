/**
 * try...catch
 * 
 * 1) 발생시킬때 -> 던진다고 한다. (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고 한다. (catch)
 */

function runner(){
    try{
        console.log('Hello');

        // throw new Error('큰 문제가 생겼습니다!'); // 에러를 던지게 되면 던지는 순간에 함수가 정지가 돼서 다음 코드가 실행이 안된다.
    
        console.log('Code Factory');
    }catch(e){ // 에러가 없으면 실행되지 않는다.
        console.log('---catch---'); 
        console.log(e);
    } finally{ //무조건 실행한다.
        console.log('---finally---');
    }
    
}
runner();