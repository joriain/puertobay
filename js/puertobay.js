var mail = "mailto:puertobay.col@gmail.com?subject=New website mail&body=Mail text body";  
  var mlink = document.('a');
  mlink.setAttribute('href', mail);
  mlink.click();

  $(.downarrow).hover(function(){
    $(this).css("scroll down", .downarrow);