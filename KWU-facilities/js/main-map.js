let hover_container = document.querySelector('.hover-container');
// let layer = document.querySelectorAll('.hover-layer');

// //마우스에 따라 움직이는 이미지
// container.onmousemove = function(e) {
//     let X = e.pageX;
//     let Y = e.pageY;
  
//     layer[0].style.transform = 'translate(' + X/100 + 'px, ' + Y/100 + 'px)';
//     layer[1].style.transform = 'translate(' + X/100*-2 + 'px, ' + Y/100*-2 + 'px)';
//     layer[2].style.transform = 'translate(' + X/100*-4 + 'px, ' + Y/100*-4 + 'px)';
//     layer[3].style.transform = 'translate(' + X/100*-6 + 'px, ' + Y/100*-6 + 'px)';
// }

let target = document.querySelectorAll('.popup_btn');
let popup = document.querySelectorAll('.popup');
let popup_click = document.querySelectorAll('.popup-click');
let container = document.querySelectorAll('.hover-container');

let targetID, pre_targetID = undefined;

menuBtn.addEventListener('click', function() {
    if(sideMenu.classList.contains('on')) {
        // container.classList.add('hover-off');
        for(var j=0; j<popup.length; j++) {
            popup[j].style.pointerEvents = 'none';
        }
    } else {
        // container.classList.remove('hover-off');
        for(var j=0; j<popup.length; j++) {
            popup[j].style.pointerEvents = 'all';
        }
    }
});

for(var i = 0; i < target.length; i++){
    target[i].addEventListener('click', function(){
        // 이전 팝업 비활성화
        if(pre_targetID) {
            document.querySelector(pre_targetID).classList.remove('on');
        }

        // 클릭한 카테고리 팝업 활성화
        targetID = this.getAttribute('href');
        document.querySelector(targetID).classList.toggle('on');

        pre_targetID = targetID;

        // 사이드메뉴 닫으면
        menuBtn.addEventListener('click', function() {
            document.querySelector(targetID).classList.remove('on');
        });
    });
  }