
let jogador  = document.getElementById('jogador')

jogador.style.top ='30px'
jogador.style.left ='60px'
jogador.style.right = '70px'

let Yinitial = 0
let Xinitial = 0
let Zinitial = 0

const Moveon = (x,y,z) =>{
  let posy = y +'py'
  let posx = x +'px'
  let posz = z + 'pz'
 jogador.style.top = posx
 jogador.style.left =posy
 jogador.style.right = posz
}


setInterval(() => {
 Moveon(Yinitial++, Xinitial++, Zinitial++)    
}, 100);