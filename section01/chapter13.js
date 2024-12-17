    // 1. 콜백함수
    function main(value) {
        console.log(1);
        console.log(2);
        value();
        console.log("end");
    }
    
    main(() => {
        // console.log("i am sub"); 
    });


    // 2. 콜백함수의 활용
    function repeat(count, callback) {
        for(let i = 1; i <= count; i++) {
            callback(i);
        }
    }
    
    repeat(5, (i) => console.log(i * 2));
