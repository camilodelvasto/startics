$().ready(function(){
  if($('.posts-section').length != 0){
    $('.pagination').hide();
    var page = 2;
    var url_blog = window.location;
    $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $.get((url_blog +'/page/'+page),
      function(content) {
        if(page <= max_pages){
        $('.posts-section').append($(content).find(".post"));
        page = page + 1;
      }
    });
   }
 });
  }
});