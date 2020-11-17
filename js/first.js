let aboutOffset=$("#about").offset().top


$(window).scroll(function(){
  let wScroll =  $(window).scrollTop()

  if(wScroll > aboutOffset)
{
  $("nav").addClass("bg-black");
  $("#btnn").css("display","block")
}
else
{
  $("nav").removeClass("bg-black");
  $("#btnn").css("display","none")
}

})



/*button controlling*/
$("#btnn").click(function(){
  $("body,html").animate({scrollTop:'0px'},3000)
})


/*Link*/
$("a[href^='#']").click(function(){
  let aHref = $(this).attr("href")
  $("body,html").animate({scrollTop:$(aHref).offset().top})
})

/*ColorsBox*/

var colors = $(".optionsItem")
colors.eq(0).css("backgroundColor",'gray');
colors.eq(1).css("backgroundColor",'orage');
colors.eq(2).css("backgroundColor",'tomato');
colors.eq(3).css("backgroundColor",'purple');
colors.eq(4).css("backgroundColor",'lime');
colors.eq(5).css("backgroundColor",'teal');

colors.click(function(){
  let spanColor=$(this).css("backgroundColor")
  $("body").css("color",spanColor)
})


$("#cogs").click(function(){
  let optionsBoxNet = $(".optionsBox").outerWidth(true)
  if($(".optionsContainer").css("left")=="0px")
  {
    $(".optionsContainer").animate({left:`-${optionsBoxNet}px`},700)
  }
 
  else
  {
      $(".optionsContainer").animate({left:`0px`},700)
  }
})


