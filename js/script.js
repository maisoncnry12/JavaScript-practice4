$(function(){
  $(".menu-trigger").on("click",function(event){
  // .menu-triggerクリック時に行われる処理
    $(this).toggleClass("active");
    // アイコンの切り替え
    $("#sp-menu").fadeToggle();
    // フェードイン/フェードアウトの切り替え
    event.preventDefault();
  });
});