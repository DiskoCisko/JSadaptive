let container = document.querySelectorAll(".container");
const containerInit = 1250; // заданная ширина контейнера 


window.addEventListener("resize", function(event){
    container.forEach(function(cont){
        let marginCont = 50;
        // ширина экрана больше дефолтной ширины контайнера - контейнер остаётся со соей шириной
            if (containerInit < event.target.outerWidth) {
            cont.style.width = containerInit + "px";
        }
        // ширина экрана меньше ширины контейнера: 
        // ширина контейнера равна ширине экрана - отступ marginCont
        
        else if (cont.offsetWidth > event.target.outerWidth) {
            cont.style.width = event.target.outerWidth - marginCont + "px";
            console.dir(cont.style.width);
         // ширина экрана больше ширины контейнера, но меньше дефолтной ширины контейнера: 
        // ширина контейнера равна ширине экрана - отступ marginCont
        } else if (cont.offsetWidth < event.target.outerWidth) {
            cont.style.width = event.target.outerWidth - marginCont + "px";
            console.dir(cont.style.width);  
        }
    })
})
