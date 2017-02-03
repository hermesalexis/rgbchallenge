var correct;

//inicializa el juego
game();

//enlaza el click de los circulos a la funcion guess
$('.option').on('click',guess);


function game(){
	correct = Math.floor(Math.random() * 2); 
	
	$('.option').each(function(index){
	  var color = generateColor();
	  $(this).css('background-color', color);
	  if(index == correct){
	  	$('.question').text(color);
	  }
	});
}

function guess(){
    var index = $('.option').index(this)
    if(index == correct){
  	  alert("Muy bien!!!!!!!!");
  	 var score =  $('.score').find('span').text();
  	 $('.score').find('span').text(+score + 1);

    }else{
  	  alert(("No que malll"));
  	  $('.score').find('span').text(0);

   }
   game();
}



function generateColor(){
  return 'rgb(' + random() + ',' + random() + ',' + random() + ')';
}

function random(){
  return Math.floor(Math.random() * 255);
}

