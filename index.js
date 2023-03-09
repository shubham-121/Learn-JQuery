$('h1').css('color','red')
// $('h1').css('background-color','red')


$('h1').addClass('big-title margin-50') //adding multiple classes

//$('h1').removeClass('big-title')
// console.log($('h1').hasClass('big-title'))

$('h1').text('Welcome Here')
$('h1').html("<p>Bye</p>")
$('a').attr('href','https://www.yahoo.com')
$('img').attr('src','pic2.jpg').addClass('pic')

//adding event listener

// $('h1').click(function(){
//     $('h1').css('color','yellow')
// })


// $('button').click(function(){     //no need to use for loops for multiple buttons
//     $('h1').css('color','yellow') //jquery will automatically select all the  buttons.
// })

$('input').keypress(function(e)  //adding event for keypress
{
    console.log(e.key)
})

$(document).keypress(function(e)  //adding event for keypress
{
    $('h1').text(e.key)
    console.log(e.key)
})




/*another way of adding event listeners*/
// $('h1').on('mouseover',function(){
//     $('h1').css('color','black')
// }) 


// $('h1').before('<button> Hi there </button>'); // add new element before a specified element
// $('h1').after('<button> Hi there </button>');//add new element after a specified element

// //$('button').prepend('<button>prepend button</button>');
// $('h1').apppend('<button>prepend button</button>');

// //$('button').remove(); //delete elemnts


// $('button').on("click",()=>{          //website animations
//     $("h1").fadeToggle();           //fade(),fadeIn(),ToggleIn(),ToggleOut(),etc
// })


// $('button').on("click",()=>{
//     $("h1").slideUp();           //collapses the element     //slideToggle()
// })

// $('button').on("click",()=>{
//     $("h1").animate({opacity:"20%"});           //use animate() for animations.
//      //only use css properties inside {} and which have numeric values
  
// })

$('button').on("click",()=>{
    $("h1").slideUp().slideDown().animate({opacity:"20%" , margin:"20px" });
})