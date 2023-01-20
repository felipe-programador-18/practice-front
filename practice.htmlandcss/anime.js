
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


let anotherplay = document.getElementById('anotherplay')

anotherplay.style.top = '70px'
anotherplay.style.right='40px'
anotherplay.style.left='60px'


let Ainitial = 0
let Binitial = 0
let Cinitial = 0

const Othermove = (a,b,c) =>{
    let posa = a +'pa'
    let posb = b + 'pb'
    let posc = c + 'pc'

    anotherplay.style.top = posa
    anotherplay.style.right =posb
    anotherplay.style.left = posc
}

setInterval( ()=>{
   Othermove(Ainitial++, Binitial++, Cinitial++)
}, 500)



let threeplay = document.getElementById('threeplay')

threeplay.style.top= '100px'
threeplay.style.left='40px'
threeplay.style.right='70px'

let Einternal = 0
let Finternal = 0
let Ginternal = 0

const Caught = (e,f,g) => {
  
  let pose =e +'pe'
  let posf =f + 'pf'
  let posg = g + 'pg'
   
  threeplay.style.top= pose
  threeplay.style.left=posf
  threeplay.style.right=posg

}
// set interval to manage my time of execution
setInterval(()=> {
  Caught(Einternal++, Finternal++, Ginternal++)
},100)