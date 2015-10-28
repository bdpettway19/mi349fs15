var somenumber = 52;
var anothernumber = 32;
  

function write () {
  var randomcolor;
  $('.box').on('click', function(){
   randomcolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16); 
    $(this).toggleClass('active');
    $(this).css('background', randomcolor);
  });
 //closing bracket for write function
 //The function above allows the objects to generate random colors everytime one is clicked.
$('.box').click(function(){
    $(this).animate({right: '250px',height:'50px',width:'50px'});
}); 
  //This function creates an animation and allows the object to retract and become a circle.
}
write();