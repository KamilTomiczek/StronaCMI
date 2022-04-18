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
function Next(){ // Ta funkcja przesuwa opis w stornie mbot.html
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
    var z1 = document.getElementById("zdjecie1");
    var z2 = document.getElementById("zdjecie2");
    var z3 = document.getElementById("zdjecie3");
    var z4 = document.getElementById("zdjecie4");
    var z5 = document.getElementById("zdjecie5");
    licznik ++;
    if(licznik > 5){
            document.querySelector(".prev").disabled = true
            document.querySelector(".next").disabled = true
            z5.style.opacity = 0;
        delay(750).then(() => {
            z5.style.display = "none"
            z1.style.transition = "0"
            delay(10).then(() => {
            z1.style.display = "block";
            z1.style.transition = "0.75s"
            });
            delay(100).then(() => {
            z1.style.opacity = 1;
            });
        });
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
        licznik = 1;
    }

    if(licznik == 2){
            document.querySelector(".prev").disabled = true
            document.querySelector(".next").disabled = true
            z1.style.opacity = 0;
            delay(750).then(() => {
                z1.style.display = "none"
                z2.style.transition = "0"
                delay(10).then(() => {
                    z2.style.display = "block";
                    z2.style.transition = "0.75s"
                    });
                delay(100).then(() => {
                    z2.style.opacity = 1;
                    });
            });
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
            z2.style.opacity = 0;
            delay(750).then(() => {
                z2.style.display = "none"
                z3.style.transition = "0"
                delay(10).then(() => {
                    z3.style.display = "block";
                    z3.style.transition = "0.75s"
                    });
                delay(100).then(() => {
                    z3.style.opacity = 1;
                    });
            });
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
            z3.style.opacity = 0;
        delay(750).then(() => {
            z3.style.display = "none"
            z4.style.transition = "0"
            delay(10).then(() => {
                z4.style.display = "block";
                z4.style.transition = "0.75s"
                });
            delay(100).then(() => {
                z4.style.opacity = 1;
                });
        });
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
            z4.style.opacity = 0;
            delay(750).then(() => {
                z4.style.display = "none"
                z5.style.transition = "0"
                delay(10).then(() => {
                    z5.style.display = "block";
                    z5.style.transition = "0.75s"
                    });
                delay(100).then(() => {
                    z5.style.opacity = 1;
                    });
            });
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
    var z1 = document.getElementById("zdjecie1");
    var z2 = document.getElementById("zdjecie2");
    var z3 = document.getElementById("zdjecie3");
    var z4 = document.getElementById("zdjecie4");
    var z5 = document.getElementById("zdjecie5");
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
    licznik --;
    if(licznik < 1){
        licznik = 5;
        document.querySelector(".prev").disabled = true
        document.querySelector(".next").disabled = true
        z1.style.opacity = 0;
        delay(750).then(() => {
        z1.style.display = "none";
        z5.style.display = "block";
        delay(100).then(() => {
            z5.style.opacity = 1
        });
        });
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
    if(licznik == 1){
        document.querySelector(".prev").disabled = true
        document.querySelector(".next").disabled = true
        z2.style.opacity = 0;
        delay(750).then(() => {
        z2.style.display = "none";
        z1.style.display = "block";
        delay(100).then(() => {
            z1.style.opacity = 1
        });
        });
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
        z3.style.opacity = 0;
        delay(750).then(() => {
        z3.style.display = "none";
        z2.style.display = "block";
        delay(100).then(() => {
            z2.style.opacity = 1
        });
        });
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
        z4.style.opacity = 0;
        delay(750).then(() => {
        z4.style.display = "none";
        z3.style.display = "block";
        delay(100).then(() => {
            z3.style.opacity = 1
        });
        });
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
        z5.style.opacity = 0;
        delay(750).then(() => {
        z5.style.display = "none";
        z4.style.display = "block";
        delay(100).then(() => {
            z4.style.opacity = 1
        });
        });
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
  
  