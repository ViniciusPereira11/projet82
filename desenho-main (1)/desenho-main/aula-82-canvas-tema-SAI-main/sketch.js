canvas = document.getElementById("canvas");
color= "red";

canvas.getContext("2d").beginPath();
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

        
        botao = document.getElementById("botao");
        botao.addEventListener('click', myFunction);
        function myFunction(e){
            console.log("click");
            console.log(e);
            mouseX = e.clientX
            mouseY = e.clientY
            console.log('x: '+mouseX,'y:'+ mouseY)  
        }        
        canvas.addEventListener('click', cliquei);
        function cliquei(e){
            color = document.getElementById("cor").value;
            console.log(color);
            
            mouseX = e.x - canvas.offsetLeft;
            mouseY = e.y - canvas.offsetTop;
            console.log('clique')
            console.log('x: '+mouseX,'y:'+ mouseY)      
            circle(mouseX, mouseY);
        }
        function circle(x,y){
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.arc(x,y,40,0,2*Math.PI);
            ctx.stroke();
        }

        function limpar(){
            ctx.clearRect(0,0,canvas.width, canvas.height  )
        }