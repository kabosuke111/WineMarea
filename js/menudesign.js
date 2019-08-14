// JavaScript Document
(function slmenuMove() {
    let array = ["menuTypeCommon", "menuTypeWeekday", "menuTypeHoliday"];
    let slideMenu = document.getElementById(array[0]);

    //進む・戻るボタンを押した時にIDを代入
    const slideButtonPrev = document.getElementById("prev");
    const slideButtonNext = document.getElementById("next");
    let slidePoint = 310;//移動距離
    let slideActPoint = 0;//移動距離をかける
    let slMenuChild = slideMenu.children;//メニューulの子要素を取得
    const menuId = ["menuCommonWrap","menuWeekdayWrap","menuHolidayWrap"];
    let p = 0;
    let windowSize;
    //window.onresize = function() {            
    window.onload = () => {
        windowSize = window.parent.screen.width;//画面の大きさを再取得
        slActionApart.responsiv();
    }

    window.onresize = () => {
        windowSize = window.parent.screen.width;
        slActionApart.responsiv();
    }

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
            slidePoint = 310;
            slideActPoint = 0;
            slideMenu.style.transform = "translateX(0px)";
        },

        //選択肢をflexで真ん中寄せ左書きが使えないので、scriptで指定する。
        "responsiv" : function(size) {
            const breakOne = 551;
            let appendNum;
            let addChild = [];

            const winRespo = () => {
                if(windowSize <= breakOne) {
                    let elem;
                    appendNum = 3;
                    if (addChild.length <= 3) {
                        for(let i = 0; i < appendNum; i++) {
                            elem = document.createElement('li');
                            slideMenu.appendChild(elem).classList.add('appendElement');
                        }
                    }

                    console.log(slMenuChild);
                    console.log('レスポンシブは正常に動いています'+windowSize);
                } else {
                    addChild = document.getElementsByClassName('appendElement');
                    for (let i = 0; i < addChild.length; i++) {
                        console.log(addChild[1]);
                        //slideMenu.removeChild(addChild[i]);
                    }


                };
            }
            winRespo()
        }

    };



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
        slActionApart.responsiv();
    };
    slideChange();

    //実際に動く処理
    let slideAction = function() {
        console.log(slideActPoint);
        console.log(slideMenu);
        let slide = slidePoint * slideActPoint;
        slideMenu.style.transform = "translateX(-"+ slide +"px)";
        console.log(slide);
    }

    //戻るボタンを押した時の処理
    slideButtonPrev.onclick = function() {
        if(slideActPoint < 1) {
            slideActPoint = 0;
        } else {
            --slideActPoint;
        }
        slideAction();
    }

    //進むボタンを押した時の処理
    slideButtonNext.onclick = function() {
        if (slideActPoint < slMenuChild.length-1) {
            slideActPoint++;
        } else {
            slideActPoint = slMenuChild.length-1;
        }
        slideAction();
    }





})();