$(document).ready(function(){

  function getSelectedButton() {
    var names = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];
    for (var i=1;i<8;i++) {
      if ($('#column'+i+'_row1').hasClass("ui white circular label") || $('#column'+i+'_row1').hasClass("ui black circular label")) {
              $('#'+names[i-1]+'_column_button').addClass('disabled');
      }
    }
  }

  function getWinner() {
    checkHorizontalConnect();
    checkVerticalConnect();
    checkDiagonalLeftConnect();
    checkDiagonalRightConnect();
  }

  function getDraw() {
    var names = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];
    var results = [];
    for (var i=1;i<8;i++) {
      if ($('#'+names[i-1]+'_column_button').hasClass('ui olive icon button disabled')) {
        results.push(true) ;
      }
    }
    if (results.join() == "true,true,true,true,true,true,true") {
      $('#winner').replaceWith("<h1><strong>Draw Game!</strong></h1>");
      $('#status').replaceWith('Nobody Wins!');
    }
  }

  function checkHorizontalConnect() {
    for(var i=6;i>3;i--) {
      for(var j=1;j<3;j++) {
        if ($('#column'+j+'_row'+i).hasClass("ui white circular label") &&
            $('#column'+Number(j+1)+'_row'+i).hasClass("ui white circular label") &&
            $('#column'+Number(j+2)+'_row'+i).hasClass("ui white circular label") &&
            $('#column'+Number(j+3)+'_row'+i).hasClass("ui white circular label")
          ) {
              $('.ui.teal.compact.message').hide();
              $('.ui.center.aligned.icon.header').hide();
              disableButton();
              $('#winner').replaceWith("<h1><strong>White Player Wins!</strong></h1>");
              $('#status').replaceWith('White Wins!');
          }

        if ($('#column'+j+'_row'+i).hasClass("ui black circular label") &&
            $('#column'+Number(j+1)+'_row'+i).hasClass("ui black circular label") &&
            $('#column'+Number(j+2)+'_row'+i).hasClass("ui black circular label") &&
            $('#column'+Number(j+3)+'_row'+i).hasClass("ui black circular label")
          ) {
              $('.ui.teal.compact.message').hide();
              $('.ui.center.aligned.icon.header').hide();
              disableButton();
              $('#winner').replaceWith("<h1><strong>Black Player Wins!</strong></h1>");
              $('#status').replaceWith('Black Wins!');
          }
      }
    }
  }

  function checkVerticalConnect() {
    for(var j=1;j<8;j++) {
      for(var i=6; i>3;i--) {
        if($('#column'+j+'_row'+i).hasClass("ui white circular label") &&
            $('#column'+j+'_row'+Number(i-1)).hasClass("ui white circular label") &&
            $('#column'+j+'_row'+Number(i-2)).hasClass("ui white circular label") &&
            $('#column'+j+'_row'+Number(i-3)).hasClass("ui white circular label")
          ) {
              $('.ui.teal.compact.message').hide();
     	 				$('.ui.center.aligned.icon.header').hide();
     	 				disableButton();
     	 				$('#winner').replaceWith("<h1><strong>White Player Wins!</strong></h1>");
              $('#status').replaceWith('White Wins!');
          }

        if($('#column'+j+'_row'+i).hasClass("ui black circular label") &&
            $('#column'+j+'_row'+Number(i-1)).hasClass("ui black circular label") &&
            $('#column'+j+'_row'+Number(i-2)).hasClass("ui black circular label") &&
            $('#column'+j+'_row'+Number(i-3)).hasClass("ui black circular label")
          ) {
              $('.ui.teal.compact.message').hide();
              $('.ui.center.aligned.icon.header').hide();
              disableButton();
              $('#winner').replaceWith("<h1><strong>Black Player Wins!</strong></h1>");
              $('#status').replaceWith('Black Wins!');
          }
      }
    }
  }

  function checkDiagonalLeftConnect() {
    for(var j=7;j>3;j--) {
      for(var i=6;i>3;i--) {
        if($('#column'+j+'_row'+i).hasClass("ui white circular label") &&
            $('#column'+Number(j-1)+'_row'+Number(i-1)).hasClass("ui white circular label") &&
            $('#column'+Number(j-2)+'_row'+Number(i-2)).hasClass("ui white circular label") &&
            $('#column'+Number(j-3)+'_row'+Number(i-3)).hasClass("ui white circular label")
          ) {
              $('.ui.teal.compact.message').hide();
              $('.ui.center.aligned.icon.header').hide();
              disableButton();
              $('#winner').replaceWith("<h1><strong>White Player Wins!</strong></h1>");
              $('#status').replaceWith('White Wins!');
          }

        if($('#column'+j+'_row'+i).hasClass("ui black circular label") &&
            $('#column'+Number(j-1)+'_row'+Number(i-1)).hasClass("ui black circular label") &&
            $('#column'+Number(j-2)+'_row'+Number(i-2)).hasClass("ui black circular label") &&
            $('#column'+Number(j-3)+'_row'+Number(i-3)).hasClass("ui black circular label")
          ) {
              $('.ui.teal.compact.message').hide();
              $('.ui.center.aligned.icon.header').hide();
              disableButton();
              $('#winner').replaceWith("<h1><strong>Black Player Wins!</strong></h1>");
              $('#status').replaceWith('Black Wins!');
          }
      }
    }
  }

  function checkDiagonalRightConnect() {
    for(var j=1;j<3;j++) {
      for(var i=6;i>3;i--) {
        if($('#column'+j+'_row'+i).hasClass("ui white circular label") &&
            $('#column'+Number(j+1)+'_row'+Number(i-1)).hasClass("ui white circular label") &&
            $('#column'+Number(j+2)+'_row'+Number(i-2)).hasClass("ui white circular label") &&
            $('#column'+Number(j+3)+'_row'+Number(i-3)).hasClass("ui white circular label")
          ) {
              $('.ui.teal.compact.message').hide();
              $('.ui.center.aligned.icon.header').hide();
              disableButton();
              $('#winner').replaceWith("<h1><strong>White Player Wins!</strong></h1>");
              $('#status').replaceWith('White Wins!');
          }

        if($('#column'+j+'_row'+i).hasClass("ui black circular label") &&
            $('#column'+Number(j+1)+'_row'+Number(i-1)).hasClass("ui black circular label") &&
            $('#column'+Number(j+2)+'_row'+Number(i-2)).hasClass("ui black circular label") &&
            $('#column'+Number(j+3)+'_row'+Number(i-3)).hasClass("ui black circular label")
          ) {
              $('.ui.teal.compact.message').hide();
              $('.ui.center.aligned.icon.header').hide();
              disableButton();
              $('#winner').replaceWith("<h1><strong>Black Player Wins!</strong></h1>");
              $('#status').replaceWith('Black Wins!');
          }
      }
    }
  }

  function disableButton() {
    var names = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];
    for (var i=0;i<names.length;i++) {
      $('#'+names[i]+'_column_button').addClass('disabled');
    }
  }

  getDraw();
  getSelectedButton();
  getWinner();
});
