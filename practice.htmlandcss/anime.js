
let jogador  = document.getElementById('jogador')

jogador.style.top ='40px'
jogador.style.left ='50px'
jogador.style.right = '50px'


let Yinitial = 0
let Xinitial = 0
let Zinitial = 0


const Moveon = (x,y,z) =>{
   
  let posy = y +'py'
  let posx = x +'px'
  let posz = z + 'pz'
 jogador.style.top = posy
 jogador.style.left =posx
 jogador.style.right = posz
}
