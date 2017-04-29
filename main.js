$(function(){
  var count = 0;
  var xWin = false;
  var yWin = false;

  $('#outside > div').click(function(){
    if (count % 2 === 0 && !($(this).hasClass('x') || $(this).hasClass('o'))){
      $(this).addClass('x');
      count += 1;
    } else if (!($(this).hasClass('x') || $(this).hasClass('o'))){
        $(this).addClass('o');
        count += 1;
    }

    //all 8 x win conditions followed by all 8 o win conditions
    if ($('#tl').hasClass('x') && $('#tm').hasClass('x') && $('#tr').hasClass('x')) {
        window.alert('X is the winner');
        xWin = true;
    }else if ($('#ml').hasClass('x') && $('#mm').hasClass('x') && $('#mr').hasClass('x')) {
      window.alert('X is the winner');
      xWin = true;
    }else if ($('#bl').hasClass('x') && $('#bm').hasClass('x') && $('#br').hasClass('x')) {
      window.alert('X is the winner');
      xWin = true;
    }else if ($('#tl').hasClass('x') && $('#ml').hasClass('x') && $('#bl').hasClass('x')) {
      window.alert('X is the winner');
      xWin = true;
    }else if ($('#tm').hasClass('x') && $('#mm').hasClass('x') && $('#bm').hasClass('x')) {
      window.alert('X is the winner');
      xWin = true;
    }else if ($('#tr').hasClass('x') && $('#mr').hasClass('x') && $('#br').hasClass('x')) {
      window.alert('X is the winner');
      xWin = true;
    }else if ($('#tl').hasClass('x') && $('#mm').hasClass('x') && $('#br').hasClass('x')) {
      window.alert('X is the winner');
      xWin = true;
    }else if ($('#tr').hasClass('x') && $('#mm').hasClass('x') && $('#bl').hasClass('x')) {
      window.alert('X is the winner');
      xWin = true;


    }else if ($('#tl').hasClass('y') && $('#tm').hasClass('y') && $('#tr').hasClass('y')) {
      window.alert('Y is the winner');
      yWin = true;
    }else if ($('#ml').hasClass('y') && $('#mm').hasClass('y') && $('#mr').hasClass('y')) {
      window.alert('Y is the winner');
      yWin = true;
    }else if ($('#bl').hasClass('y') && $('#bm').hasClass('y') && $('#br').hasClass('y')) {
      window.alert('Y is the winner');
      yWin = true;
    }else if ($('#tl').hasClass('y') && $('#ml').hasClass('y') && $('#bl').hasClass('y')) {
      window.alert('Y is the winner');
      yWin = true;
    }else if ($('#tm').hasClass('y') && $('#mm').hasClass('y') && $('#bm').hasClass('y')) {
      window.alert('Y is the winner');
      yWin = true;
    }else if ($('#tr').hasClass('y') && $('#mr').hasClass('y') && $('#br').hasClass('y')) {
      window.alert('Y is the winner');
      yWin = true;
    }else if ($('#tl').hasClass('y') && $('#mm').hasClass('y') && $('#br').hasClass('y')) {
      window.alert('Y is the winner');
      yWin = true;
    }else if ($('#tr').hasClass('y') && $('#mm').hasClass('y') && $('#bl').hasClass('y')) {
      window.alert('Y is the winner');
      yWin = true;

    }else if (count === 9 && !(xWin || yWin)) {
      window.alert('It is a draw folks!')
    }
  });
});
