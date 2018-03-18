$(document).ready(function () {
    $("#logo").mouseover(function () {
        $("#logo").toggleClass("animated wobble");
    });
})
function time(){
    var aa=new Date();
    document.getElementById("time").innerHTML=aa.getFullYear();
}
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https'){
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else{
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();


$("#mytab a").click(function (e) {
    $(this).tab('show');
})
$('.carousel').carousel({
    interval: 4000
})

