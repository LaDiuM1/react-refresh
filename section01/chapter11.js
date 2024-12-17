    // 함수 선언

    function greeting() {
        console.log("안녕하세요.")
    }
    
    // greeting();

    let area1 = getArea(10, 20);
    let area2 = getArea(20, 30);
    let area3 = getArea(120, 200);

    console.log(area1);
    console.log(area2);
    console.log(area3);
    
    function getArea(width, height) {
        function another() {
            console.log("another")
        }
        another();
        return width * height;
    }
    
    
    