$(function(){
  var count = 0;
  $('#outside > div').click(function(){
    if (count % 2 === 0){
      $(this).addClass('x');
    } else{
      $(this).addClass('o');
    }
    count += 1;

    //all 8 x win conditions
    if ($('#tl').hasClass('x') && $('#tm').hasClass('x') && $('#tr').hasClass('x')) {
        window.alert('X is the winner');
    }else if ($('#ml').hasClass('x') && $('#mm').hasClass('x') && $('#mr').hasClass('x')) {
      window.alert('X is the winner');
    }else if ($('#bl').hasClass('x') && $('#bm').hasClass('x') && $('#br').hasClass('x')) {
      window.alert('X is the winner');
    }else if ($('#tl').hasClass('x') && $('#ml').hasClass('x') && $('#bl').hasClass('x')) {
      window.alert('X is the winner');
    }else if ($('#tm').hasClass('x') && $('#mm').hasClass('x') && $('#bm').hasClass('x')) {
      window.alert('X is the winner');
    }else if ($('#tr').hasClass('x') && $('#mr').hasClass('x') && $('#br').hasClass('x')) {
      window.alert('X is the winner');
    }else if ($('#tl').hasClass('x') && $('#mm').hasClass('x') && $('#br').hasClass('x')) {
      window.alert('X is the winner');
    }else if ($('#tr').hasClass('x') && $('#mm').hasClass('x') && $('#bl').hasClass('x')) {
      window.alert('X is the winner');
    }
    //tie condition goes here
  });
});
