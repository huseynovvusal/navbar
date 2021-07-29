const random = Math.ceil(Math.random()*50);
var luck = 7;
function funksiya() {
    let input = Number(document.querySelector('#input').value);
    document.querySelector('#input').innerHTML = " "
    console.log(luck);
    
    if(input === random){
        document.querySelector('.info').innerHTML='Təbriklər!';
        document.querySelector('.info').style.color='#157347';
        document.querySelector('.alert').style.display="none";
    }

    else if(input > random && input <= 50){
        document.querySelector('.info').innerHTML='Daha kiçik say';
        document.querySelector('.info').style.color='#dc3545';
        document.querySelector('.alert').style.display="none";
        luck-=1;
    }
    else if(input < random && input <= 50){
        document.querySelector('.info').innerHTML='Daha böyük say';
        document.querySelector('.info').style.color='#dc3545';
        document.querySelector('.alert').style.display="none";
        luck-=1;
    }
    else{
        document.querySelector('.alert').style.display="block";
    }
    
    if(luck === 0){
        document.querySelector('.info').innerHTML='Təxmin haqqın bitdi!';
        document.querySelector('.info').style.color='#dc3545';
        document.querySelector('.btn').innerHTML='Yenidən oyna';
        location.reload;
    }
}
