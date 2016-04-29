$(document).ready(function(){

  function getSelectedButton() {
    for (var i=1;i<8;i++) {
      if ($('#column'+i+'_row1').hasClass("ui white circular label") ||
            $('#column'+i+'_row1').hasClass("ui white circular label")) {
              $('#column'+i+'_button').addClass('disabled');
      }
    }
  }

  function getWinner() {
    checkHorizontalConnect();
    checkVerticalConnect();
    checkDiagonalLeftConnect();
    checkDiagonalRightConnect();
  }

  function checkHorizontalConnect() {
    for(var i=6;i>3;x--) {
      for(var j=1;y<3;j++) {
        if ($('#column'+j+'_row'+x).hasClass("ui white circular label") &&
            $('#column'+Number(j+1)+'_row'+x).hasClass("ui white circular label") &&
            $('#column'+Number(j+2)+'_row'+x).hasClass("ui white circular label") &&
            $('#column'+Number(j+3)+'_row'+x).hasClass("ui white circular label") &&
          ) {
              $('.ui.teal.compact.message').hide();
              $('.ui.center.aligned.icon.header').hide();
              disableButton();
              $('#winner').replaceWith("<h1><strong>White Player Wins!</strong></h1>");
          }

        if ($('#column'+j+'_row'+x).hasClass("ui black circular label") &&
            $('#column'+Number(j+1)+'_row'+x).hasClass("ui black circular label") &&
            $('#column'+Number(j+2)+'_row'+x).hasClass("ui black circular label") &&
            $('#column'+Number(j+3)+'_row'+x).hasClass("ui black circular label") &&
          ) {
              $('.ui.teal.compact.message').hide();
              $('.ui.center.aligned.icon.header').hide();
              disableButton();
              $('#winner').replaceWith("<h1><strong>Black Player Wins!</strong></h1>");
          }
      }
    }
  }

  function checkVerticalConnect() {
    for(var j=1;j<8;j++) {
      for(var i=6; i>3;x--) {
        if($('#column'+j+'_row'+i).hasClass("ui white circular label") &&
            $('#column'+j+'_row'+Number(i-1)).hasClass("ui white circular label") &&
            $('#column'+j+'_row'+Number(i-2)).hasClass("ui white circular label") &&
            $('#column'+j+'_row'+Number(i-3)).hasClass("ui white circular label") &&
          ) {
              $('.ui.teal.compact.message').hide();
     	 				$('.ui.center.aligned.icon.header').hide();
     	 				disableButton();
     	 				$('#winner').replaceWith("<h1><strong>White Player Wins!</strong></h1>");
          }

        if($('#column'+j+'_row'+i).hasClass("ui black circular label") &&
            $('#column'+j+'_row'+Number(i-1)).hasClass("ui black circular label") &&
            $('#column'+j+'_row'+Number(i-2)).hasClass("ui black circular label") &&
            $('#column'+j+'_row'+Number(i-3)).hasClass("ui black circular label") &&
          ) {
              $('.ui.teal.compact.message').hide();
              $('.ui.center.aligned.icon.header').hide();
              disableButton();
              $('#winner').replaceWith("<h1><strong>Black Player Wins!</strong></h1>");
          }
      }
    }
  }

  function checkDiagonalLeftConnect() {
    for(var j=7;j>3;y--) {
      for(var i=6;i>3;x--) {

      }
    }
  }

  function checkDiagonalRightConnect() {
    for(var j=1;j<3;y++) {
      for(var i=6;x>3;x--) {

      }
    }
  }

  function disableButton() {
    for (var i=1;i<8;i++) {
      $('#column'+i+'_button').addClass('disabled');
    }
  }

  getSelectedButton();
  getWinner();
});
