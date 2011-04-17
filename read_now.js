// The bookmarklet
$('div').click(function(){
  $(this).css('font-size', '16pt');
  $(this).css('color', 'black');
  $(this).css('font-family', 'Georgia');
  $('div').unbind();
});



// beginings of attempt to visualize which div is being hovered over
$('div').hover(
  function(){
    $(this).css('border-style', 'dashed');
    $(this).css('border-width', '1px');
  },
  function(){
    $(this).css('border-style', 'none');
  }
)
