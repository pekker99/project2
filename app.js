let count = 0;
const ertek = document.getElementById("ertek");
const btns = document.querySelectorAll(".btn");


btns.forEach((btn)=>{


    btn.addEventListener("click", (e)=>{

        
        const style = e.currentTarget.classList;

        
        if(style.contains("negative")){

            count--;
        }
        else if(style.contains("positive")){

        
            count++;
        }

        else{

            count = 0;
        }


        if(count > 0){

            ertek.style.color="green";
        }
        else if(count < 0){

            ertek.style.color="red";
        }
        else{

            ertek.style.color="black";
        }


        ertek.textContent = count;
    })

})

