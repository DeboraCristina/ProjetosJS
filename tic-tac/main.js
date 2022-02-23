let x = []
let o = []
let g = []
let vez = 'x'
var PodeJogar = true

let px = 0
let po = 0
let pv = 0

var PontosVelha = document.getElementById('v')
var PontosX = document.getElementById('x')
var PontosO = document.getElementById('o')
var denovo = document.getElementById('denovo')

load()

function load(){
    pv = Number(localStorage.getItem('p_v'))
    px = Number(localStorage.getItem('p_x'))
    po = Number(localStorage.getItem('p_o'))

    PontosVelha.innerText = pv
    PontosX.innerText = px
    PontosO.innerText = po
}

function analize(j){
    var l = ['123', '456', '789']
    var c = ['147', '258', '369']
    var d = ['159', '357']
    var gg = false

    for(var i in l){
        var r = j.indexOf(Number(l[i][0])) > -1?'1':'0'
        r = j.indexOf(Number(l[i][1])) > -1?r+='1':r+='0'
        r = j.indexOf(Number(l[i][2])) > -1?r+='1':r+='0'
        if(r.indexOf('0') == -1){
            gg = true
            break
        }
    }
    for(var i in c){
        var r = j.indexOf(Number(c[i][0])) > -1?'1':'0'
        r = j.indexOf(Number(c[i][1])) > -1?r+='1':r+='0'
        r = j.indexOf(Number(c[i][2])) > -1?r+='1':r+='0'
        if(r.indexOf('0') == -1){
            gg = true
            break
        }
    }
    for(var i in d){
        var r = j.indexOf(Number(d[i][0])) > -1?'1':'0'
        r = j.indexOf(Number(d[i][1])) > -1?r+='1':r+='0'
        r = j.indexOf(Number(d[i][2])) > -1?r+='1':r+='0'
        if(r.indexOf('0') == -1){
            gg = true
            break
        }
    }

    return gg
}

function apertou(n){
    var a = document.getElementById(n)
    n = Number(n)
    if(!g.includes(n) && PodeJogar){
        a.classList.add('ativo')
        if(vez=='x'){
            vez = 'o'
            a.innerText='x'
            x.push(n)
        }else{
            vez='x'
            a.innerText='o'
            o.push(n)
        }
        g.push(n)
    }
    x.sort()
    o.sort()
    g.sort()
    if(PodeJogar){
        if(g.length > 4){
            if(analize(x)){
                px += 1
                localStorage.setItem('p_x', px)
                localStorage.setItem('p_o', po)
                localStorage.setItem('p_v', pv)

                denovo.classList.add('denovo')

                PodeJogar = false
            }else if(analize(o)){
                po += 1
                localStorage.setItem('p_x', px)
                localStorage.setItem('p_o', po)
                localStorage.setItem('p_v', pv)

                denovo.classList.add('denovo')

                PodeJogar = false
            }
        }
        if(g.length == 9){
            if(analize(x)){
                px += 1
                PodeJogar = false
            }else if(analize(o)){
                po += 1
                PodeJogar = false
            }else{
                pv += 1
                console.log('velha')
            }
            localStorage.setItem('p_x', px)
            localStorage.setItem('p_o', po)
            localStorage.setItem('p_v', pv)

            denovo.classList.add('denovo')

            PodeJogar =  false
        }
    }
    load()
}

function agin(){
    for(var c = 1; c<=9; c++){
        let a = document.getElementById(`0${c}`)
        a.classList.remove('ativo')
        a.innerText = '-'
    }
    PodeJogar = true
    x = []
    o = []
    g = []
    vez = 'x'

    denovo.classList.remove('denovo')
}
