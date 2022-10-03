form.addEventListener('submit', function(event){
     event.preventDefault();
    
})

const randomNumber = Math.ceil(Math.random()*100)
console.log(randomNumber);

function getValue(){

    const numberGuessed = document.getElementById("numberGuessed").value;
     if(randomNumber == numberGuessed){
      
        document.getElementById('test').innerHTML = 'Det var skrivet i stjärnorna att du skulle gissa rätt!'
        console.log('Rätt');
     }
    else if(randomNumber < numberGuessed){
    
        document.getElementById('test').innerHTML = 'Den som siktar mot månen hamnar bland sjärnorna...gissa lägre!'
        console.log('lägre');
    }
    else if(randomNumber > numberGuessed){
        
        document.getElementById('test').innerHTML = 'Venus står i retrograd, gissa högre!'
        console.log('högre');
    }
    else{
        text = 'Nu blev något knasigt, testa igen';
    }   
}
    


let button = "reset-form";
const reset = function() {

console.log("Spela igen");

document.getElementById("form").reset();
};


 