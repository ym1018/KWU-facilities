let hover_container = document.querySelector('.hover-container');
// let layer = document.querySelectorAll('.hover-layer');

// 마우스에 따라 움직이는 이미지
// container.onmousemove = function(e) {
//     let X = e.pageX;
//     let Y = e.pageY;
  
//     layer[0].style.transform = 'translate(' + X/100 + 'px, ' + Y/100 + 'px)';
//     layer[1].style.transform = 'translate(' + X/100*-2 + 'px, ' + Y/100*-2 + 'px)';
//     layer[2].style.transform = 'translate(' + X/100*-4 + 'px, ' + Y/100*-4 + 'px)';
//     layer[3].style.transform = 'translate(' + X/100*-6 + 'px, ' + Y/100*-6 + 'px)';
// }

// 검색 기능 활성화에 따른 지도 이동
menuBtn.addEventListener('click', function() {
    if (sideMenu.classList.contains('on')) {
        hover_container.classList.add('map-go');
        return;
    } 
    hover_container.classList.remove('map-go');
});