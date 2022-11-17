let timer =document.getElementById("countDown");

let less=10;

setTimeout(()=>{
  timer.innerHTML=less;
  less--;
   setTimeout(()=>{
    timer.innerHTML=less;
    less--;
    setTimeout(()=>{
      timer.innerHTML=less;
      less--;
      setTimeout(()=>{
        timer.innerHTML=less;
        less--;
        setTimeout(()=>{
          timer.innerHTML=less;
          less--;
          setTimeout(()=>{
            timer.innerHTML=less;
            less--;
            setTimeout(()=>{
              timer.innerHTML=less;
              less--;
              setTimeout(()=>{
                timer.innerHTML=less;
                less--;
                setTimeout(()=>{
                  timer.innerHTML=less;
                  less--;
                  setTimeout(()=>{
                    timer.innerHTML=less;
                    less--;
                    setTimeout(()=>{
                      timer.innerHTML="Happy Independence Day";
                      timer.classList.add('text-danger')
                    },1000)
                  },1000)
                },1000)
              },1000) 
            },1000)
          },1000) 
        },1000) 
      },1000)
    },1000) 
  },1000)
},)