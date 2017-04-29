$(function(){
  var count = 1;
  $('#outside > div').click(function(){
    count += 1;
    console.log(count)
  });
  $('#tl').on('click', function(){
    if (count % 2 === 0) {
      $('#tl').addClass('x');
    }else {
      $('#tl').addClass('o');
    }
  });


});
