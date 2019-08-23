// JavaScript Document
(function(){

    const ELEM_SIZE = 296;//移動する要素のサイズ。いじらない。
    var al = 0;
    var addChild = [];
    let array = ["menuTypeCommon", "menuTypeWeekday", "menuTypeHoliday"];
    let slideMenu = document.getElementById(array[0]);
    let slMenuChild = slideMenu.children;//メニューulの子要素を取得
    let elem;
    let appendNum;
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
            },
            
            //増やした要素を消す
            "removeElem" : function() {
                let appElemLen = document.querySelectorAll('.appendElement').length;
                for(var i = 0; i < appElemLen; i++) {
                    let appElem = document.querySelector('.appendElement');
                    appElem.parentNode.removeChild(appElem);
                };
            },
            
            //フレックスコンテナにエレメントを入れる
            "addElem" : function(winSize) {
                //4で割って余りが３の時 ＝ １つ足す
                //4で割って余りが２の時 ＝ ２つ足す
                //4で割って余りが１の時 ＝ ３つ足す
                let addElemNum = 3;
                let ce = document.querySelectorAll('.menu-type');
                let classElem = Array.from(ce);
                
                if(winSize <= 768) {
                    this.removeElem();
                    if(slMenuChild % 4 === 1){addElemNum=3;};
                    for(var i = 0; i < addElemNum; i++) {
                        let elem = document.createElement('li');
                        classElem[p].appendChild(elem).setAttribute('class', 'appendElement');
                    }
                } else {
                    this.removeElem();
                };
                //デバッグ用
//                console.log(document.getElementById("menuTypeCommon"));
//                console.log(document.getElementById("menuTypeWeekday"));
//                console.log(document.getElementById("menuTypeHoliday"));
            },
            
            "getWinSize" : function() {
                this.init();
                WS = window.innerWidth;//画面の大きさを再取得
                this.addElem(WS);
            }
        };
        slActionApart.init();
        
        //windowサイズが変化した時、ロードされた時の処理
        let windowAction = function() {
            
            let WS;
            window.addEventListener("load", function() {
                slActionApart.getWinSize();
            });

            window.addEventListener("resize", function(){
                slActionApart.getWinSize();
                
            });
        };
        windowAction();

        //スライドを動かすボタン。押した場所の日を代入する
        function slideChange() {
            document.getElementById("commonButton").addEventListener("click", function(){
                slideMenu = document.getElementById(array[0]);
                p = 0;
                slActionApart.init();
                slActionApart.showChange();
                slActionApart.getWinSize();
            });
            
            document.getElementById("weekdayButton").addEventListener("click", function(){
                slideMenu = document.getElementById(array[1]);
                p = 1;
                slActionApart.init();
                slActionApart.showChange();
                slActionApart.getWinSize();
            });

            document.getElementById("holidayButton").addEventListener("click", function(){
                slideMenu = document.getElementById(array[2]);
                p = 2;
                slActionApart.init();
                slActionApart.showChange();
                slActionApart.getWinSize();
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
            console.log("ds");
            slideAction();
        };
    };
    slmenuMove(ELEM_SIZE);
    
})();
