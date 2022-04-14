var licznik = 1;
var kolejnosc=new Array();
var licz = 0;
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
function Next(){
    var zd = document.getElementById("zdjecie");
    kolejnosc[licz] = 'p';
    licz = licz + 1;
    if(licz == 5){
        if(kolejnosc[0]=='p'&& kolejnosc[1]=='p'&& kolejnosc[2]=='l'&& kolejnosc[3]=='p'&& kolejnosc[4]=='l'){
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            licz = 0;
        }
        else{
            licz = 0;
        }
    }
    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3");
    var c4 = document.getElementById("c4");
    var c5 = document.getElementById("c5");
    licznik ++;
    if(licznik > 5){
        licznik = 1;
        zd.src = "../img/"+licznik+".png";
            document.querySelector(".prev").disabled = true
            document.querySelector(".next").disabled = true
        c1.style.display = "none"
        c1.style.transition = "0"
        c1.style.left = "-800px"        
        delay(10).then(() => {
            c1.style.display = null 
            c1.style.transition = "1.5s"
            delay(100).then(() => {
                c1.style.left = "0px"
                c5.style.left = "800px"
                delay(1000).then(() => {
                document.querySelector(".prev").disabled = false
                document.querySelector(".next").disabled = false
                });
            })
        })
    }
    else{
        zd.src = "../img/"+licznik+".png";
    }
    if(licznik == 2){
            document.querySelector(".prev").disabled = true
            document.querySelector(".next").disabled = true
        c2.style.display = "none"
        c2.style.transition = "0"
        c2.style.left = "-800px"        
        delay(10).then(() => {
            c2.style.display = null 
            c2.style.transition = "1.5s"
            delay(100).then(() => {
                c2.style.left = "0px"
                c1.style.left = "800px"
                delay(1000).then(() => {
                    document.querySelector(".prev").disabled = false
                    document.querySelector(".next").disabled = false
                    });
            })
        })

    }
    else if(licznik == 3){
            document.querySelector(".prev").disabled = true
            document.querySelector(".next").disabled = true
        c3.style.display = "none"
        c3.style.transition = "0"
        c3.style.left = "-800px"        
        delay(10).then(() => {
            c3.style.display = null 
            c3.style.transition = "1.5s"
            delay(100).then(() => {
                c3.style.left = "0px"
                c2.style.left = "800px"
                delay(1000).then(() => {
                    document.querySelector(".prev").disabled = false
                    document.querySelector(".next").disabled = false
                    });
            })
        })

    }
    else if(licznik == 4){
            document.querySelector(".prev").disabled = true
            document.querySelector(".next").disabled = true
        c4.style.display = "none"
        c4.style.transition = "0"
        c4.style.left = "-800px"        
        delay(10).then(() => {
            c4.style.display = null 
            c4.style.transition = "1.5s"
            delay(100).then(() => {
                c4.style.left = "0px"
                c3.style.left = "800px"
                delay(1000).then(() => {
                    document.querySelector(".prev").disabled = false
                    document.querySelector(".next").disabled = false
                    });
            })
        })
    }
    else if(licznik == 5){
            document.querySelector(".prev").disabled = true
            document.querySelector(".next").disabled = true
        c5.style.display = "none"
        c5.style.transition = "0"
        c5.style.left = "-800px"        
        delay(10).then(() => {
            c5.style.display = null 
            c5.style.transition = "1.5s"
            delay(100).then(() => {
                c5.style.left = "0px"
                c4.style.left = "800px"
                delay(1000).then(() => {
                    document.querySelector(".prev").disabled = false
                    document.querySelector(".next").disabled = false
                    });
            })
        })
    }
}

function Back(){
    kolejnosc[licz] = 'l';
    licz = licz + 1;
    if(licz == 5){
        if(kolejnosc[0]=='p'&& kolejnosc[1]=='p'&& kolejnosc[2]=='l'&& kolejnosc[3]=='p'&& kolejnosc[4]=='l'){
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            licz = 0;
        }
        else{
            licz = 0;
        }
    }
    var zd = document.getElementById("zdjecie");
    licznik --;
    if(licznik < 1){
        licznik = 5;
        zd.src = "../img/"+licznik+".png";
        document.querySelector(".prev").disabled = true
        document.querySelector(".next").disabled = true
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
                    document.querySelector(".prev").disabled = false
                    document.querySelector(".next").disabled = false
                })
            })
        })
    }
    else{
        zd.src = "../img/"+licznik+".png";
    }
    if(licznik == 1){
        document.querySelector(".prev").disabled = true
        document.querySelector(".next").disabled = true
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
                    document.querySelector(".prev").disabled = false
                    document.querySelector(".next").disabled = false
                })
            })
        })


        
    }
    else if(licznik == 2){
        document.querySelector(".prev").disabled = true
        document.querySelector(".next").disabled = true
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
                    document.querySelector(".prev").disabled = false
                    document.querySelector(".next").disabled = false
                })
            })
        })
    }
    else if(licznik == 3){
        document.querySelector(".prev").disabled = true
        document.querySelector(".next").disabled = true
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
                    document.querySelector(".prev").disabled = false
                    document.querySelector(".next").disabled = false
                })
            })
        })
    }
    else if(licznik == 4){
        document.querySelector(".prev").disabled = true
        document.querySelector(".next").disabled = true
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
                    document.querySelector(".prev").disabled = false
                    document.querySelector(".next").disabled = false
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
  
  