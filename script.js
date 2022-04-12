var licznik = 1;
function show() {
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');
    
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
function Push(){
    var zd = document.getElementById("zdjecie");
    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3");
    var c4 = document.getElementById("c4");
    var c5 = document.getElementById("c5");
    licznik ++;
    if(licznik > 5){
        licznik = 1;
        zd.src = "../img/"+licznik+".jpg";
        c1.style.display = "none"
        c1.style.transition = "0"
        c1.style.left = "-800px"        
        delay(1).then(() => {
            c1.style.display = null 
            c1.style.transition = "1.5s"
            delay(100).then(() => {
                c1.style.left = "0px"
                c5.style.left = "800px"
            })
        })
    }
    else{
        zd.src = "../img/"+licznik+".jpg";
    }
    if(licznik == 2){
        c2.style.display = "none"
        c2.style.transition = "0"
        c2.style.left = "-800px"        
        delay(1).then(() => {
            c2.style.display = null 
            c2.style.transition = "1.5s"
            delay(100).then(() => {
                c2.style.left = "0px"
                c1.style.left = "800px"
            })
        })

    }
    else if(licznik == 3){
        c3.style.display = "none"
        c3.style.transition = "0"
        c3.style.left = "-800px"        
        delay(1).then(() => {
            c3.style.display = null 
            c3.style.transition = "1.5s"
            delay(100).then(() => {
                c3.style.left = "0px"
                c2.style.left = "800px"
            })
        })

    }
    else if(licznik == 4){
        c4.style.display = "none"
        c4.style.transition = "0"
        c4.style.left = "-800px"        
        delay(1).then(() => {
            c4.style.display = null 
            c4.style.transition = "1.5s"
            delay(100).then(() => {
                c4.style.left = "0px"
                c3.style.left = "800px"
            })
        })
    }
    else if(licznik == 5){
        c5.style.display = "none"
        c5.style.transition = "0"
        c5.style.left = "-800px"        
        delay(1).then(() => {
            c5.style.display = null 
            c5.style.transition = "1.5s"
            delay(100).then(() => {
                c5.style.left = "0px"
                c4.style.left = "800px"
            })
        })
    }
}

function Back(){
    var zd = document.getElementById("zdjecie");
    licznik --;
    if(licznik < 1){
        licznik = 5;
        zd.src = "../img/"+licznik+".jpg";
        c1.style.left = "-800px"
        c5.style.left = "0"
        delay(1000).then(() => {
            c1.style.display = "none"
            delay(100).then(() => {
                c1.style.transition = "0"
                c1.style.left = "800px"
                delay(100).then(() => {
                    c1.style.transition = "1.5s"
                    c1.style.display = null

                })
            })
        })
    }
    else{
        zd.src = "../img/"+licznik+".jpg";
    }
    if(licznik == 1){
        c2.style.left = "-800px"
        c1.style.left = "0"
        delay(1000).then(() => {
            c2.style.display = "none"
            delay(100).then(() => {
                c2.style.transition = "0"
                c2.style.left = "800px"
                delay(100).then(() => {
                    c2.style.transition = "1.5s"
                    c2.style.display = null

                })
            })
        })


        
    }
    else if(licznik == 2){
        c3.style.left = "-800px"
        c2.style.left = "0"
        delay(1000).then(() => {
            c3.style.display = "none"
            delay(100).then(() => {
                c3.style.transition = "0"
                c3.style.left = "800px"
                delay(100).then(() => {
                    c3.style.transition = "1.5s"
                    c3.style.display = null

                })
            })
        })
    }
    else if(licznik == 3){
        c4.style.left = "-800px"
        c3.style.left = "0"
        delay(1000).then(() => {
            c4.style.display = "none"
            delay(100).then(() => {
                c4.style.transition = "0"
                c4.style.left = "800px"
                delay(100).then(() => {
                    c4.style.transition = "1.5s"
                    c4.style.display = null

                })
            })
        })
    }
    else if(licznik == 4){
        c5.style.left = "-800px"
        c4.style.left = "0"
        delay(1000).then(() => {
            c5.style.display = "none"
            delay(100).then(() => {
                c5.style.transition = "0"
                c5.style.left = "800px"
                delay(100).then(() => {
                    c5.style.transition = "1.5s"
                    c5.style.display = null

                })
            })
        })
    }
}

r = false

function rotate(){

    if(r != true){
        document.querySelector('body').style.transform = "rotateY(180deg)"
        r = true
    }
    else{
        document.querySelector('body').style.transform = "rotateY(0deg)"
        r = false
    }
    
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
  