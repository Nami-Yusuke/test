(function () {
  var idex = 1;
  window.preClick = function () {
    console.log(idex);
    if (idex == 1) {
      return;
    }
    z();
    var dom = document.getElementById("page" + idex);
    dom.style.transform = "rotateY(0deg)";
    dom.style.zIndex = '10';
    idex--;
    var dom2 = document.getElementById("page" + idex);
    dom2.style.transform = "rotateY(-180deg)";

  };
  window.nextClick = function () {
    console.log(idex);
    if (idex == 6) {
      return;
    }
    z();
    var dom = document.getElementById("page" + idex);
    dom.style.transform = "rotateY(-180deg)";
    dom.style.zIndex = '-10';
    idex++;
    var dom2 = document.getElementById("page" + idex);
    dom2.style.transform = "rotateY(0deg)";
  };

  function z(){
    var doms = document.getElementsByClassName('page');
    // doms.forEach(function(item){
    //   item.style.zIndex = '0'
    // });
    for(var item of doms){
      item.style.zIndex = '0'
    }
  }
})(window);
