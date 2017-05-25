$(function(){
  var count = 0;
  var xWin = false;
  var oWin = false;
  var xCount = 0;
  var oCount = 0;

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
    }else if ($('#tl').hasClass('o') && $('#tm').hasClass('o') && $('#tr').hasClass('o')) {
      window.alert('O is the winner');
      oWin = true;
    }else if ($('#ml').hasClass('o') && $('#mm').hasClass('o') && $('#mr').hasClass('o')) {
      window.alert('O is the winner');
      oWin = true;
    }else if ($('#bl').hasClass('o') && $('#bm').hasClass('o') && $('#br').hasClass('o')) {
      window.alert('O is the winner');
      oWin = true;
    }else if ($('#tl').hasClass('o') && $('#ml').hasClass('o') && $('#bl').hasClass('o')) {
      window.alert('O is the winner');
      oWin = true;
    }else if ($('#tm').hasClass('o') && $('#mm').hasClass('o') && $('#bm').hasClass('o')) {
      window.alert('O is the winner');
      oWin = true;
    }else if ($('#tr').hasClass('o') && $('#mr').hasClass('o') && $('#br').hasClass('o')) {
      window.alert('O is the winner');
      oWin = true;
    }else if ($('#tl').hasClass('o') && $('#mm').hasClass('o') && $('#br').hasClass('o')) {
      window.alert('O is the winner');
      oWin = true;
    }else if ($('#tr').hasClass('o') && $('#mm').hasClass('o') && $('#bl').hasClass('o')) {
      window.alert('O is the winner');
      oWin = true;
    }else if (count === 9 && !(xWin || oWin)) {
      window.alert('It is a draw folks!')
    }
    if (xWin) {
      xCount += 1;
      $('#numXWins').html(' ' + xCount);
      $('#outside > div').removeClass();
      count = 0;
      xWin = false;
    } else if (oWin){
      oCount += 1;
      $('#numOWins').html(' ' + oCount);
      $('#outside > div').removeClass();
      count = 0;
      oWin = false;
    } else if (count === 9) {
      $('#outside > div').removeClass();
      count = 0;
    }
  });
});
