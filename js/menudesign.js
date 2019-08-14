// JavaScript Document
(function(){
    var al = 0;
    var addChild = [];
    let array = ["menuTypeCommon", "menuTypeWeekday", "menuTypeHoliday"];
    let slideMenu = document.getElementById(array[0]);
    let slMenuChild = slideMenu.children;//メニューulの子要素を取得
    let elem;
    let appendNum;
    let b = false;
    const breakOne = 768;
                


    let slmenuMove = function (elemWidth) {
        let array = ["menuTypeCommon", "menuTypeWeekday", "menuTypeHoliday"];
        let slideMenu = document.getElementById(array[0]);

        //進む・戻るボタンを押した時にIDを代入
        const slideButtonPrev = document.getElementById("prev");
        const slideButtonNext = document.getElementById("next");
        let slidePoint = elemWidth;//移動距離
        let slideActPoint = 0;//移動距離をかける
        let slMenuChild = slideMenu.children;//メニューulの子要素を取得
        const menuId = ["menuCommonWrap","menuWeekdayWrap","menuHolidayWrap"];
        let slide, p = 0;


        //動作のメソッド集
        let slActionApart = {
            //メニューを切り替えるための処理
            "showChange" : function() {
                for(let i = 0; i < menuId.length; i++) {
                        let none = document.getElementById(menuId[i]);                
                        none.style.display = "none";    
                    }

                let change = document.getElementById(menuId[p]);                
                change.style.display = "block";
            },

            //メニュー切り替え時に初期化する
            "init" : function() {
                slidePoint = elemWidth;
                slideActPoint = 0;
                slideMenu.style.transform = "translateX(0px)";
                slMenuChild = slideMenu.children;//メニューulの子要素を取得
            }





        };
        slActionApart.init();

        //スライドを動かすボタン
        function slideChange() {

            document.getElementById("commonButton").addEventListener("click", function(){
                slideMenu = document.getElementById(array[0]);
                p = 0;
                slActionApart.init();
                slActionApart.showChange();

            });

            document.getElementById("weekdayButton").addEventListener("click", function(){
                slideMenu = document.getElementById(array[1]);
                p = 1;
                slActionApart.init();
                slActionApart.showChange();
            });

            document.getElementById("holidayButton").addEventListener("click", function(){
                slideMenu = document.getElementById(array[2]);
                p = 2;
                slActionApart.init();
                slActionApart.showChange();
            });
        };
        slideChange();


        //メニューが実際に動く処理

        let slideAction = function() {
            slide = slidePoint * slideActPoint;
            slideMenu.style.transform = "translateX("+ slide +"px)";
            console.log(slideActPoint);
            console.log(slidePoint);
            console.log(slide);

        };

        //戻るボタンを押した時の処理
        slideButtonPrev.onclick = function() {
            if(slideActPoint < ((slMenuChild.length - 3) / 2)) {
                slideActPoint = slMenuChild.length % 2 === 0 ? slideActPoint + 0.5 : slideActPoint + 1;
            } else {
                slideActPoint = ((slMenuChild.length - 3) / 2);
            }

            slideAction();
        };

        //進むボタンを押した時の処理
        slideButtonNext.onmousedown = function() {
            if (slideActPoint > -((slMenuChild.length - 3) / 2)) {
                slideActPoint = slMenuChild.length % 2 === 0 ? slideActPoint + -0.5 : slideActPoint + -1;
            } else {
                slideActPoint = -((slMenuChild.length - 3) / 2);
            }

            slideAction();
        };
    };

    var WS;
    window.onload = () => {
        WS = window.innerWidth;//画面の大きさをはじめに取得
        slmenuMove(296);
    };

    window.onresize = () => {
        WS = window.innerWidth;//画面の大きさを再取得
    };
})();
