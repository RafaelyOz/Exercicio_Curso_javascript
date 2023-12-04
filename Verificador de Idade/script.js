function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno =  document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fAno.value.length == 0 || fAno > ano)
    {
        window.alert('[ERROR] Verifique os dados novamente!')
    }else {
        var fsex =  document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img =document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10)
            {
                img.setAttribute('src','bb menino.jpg')
            }
            else if( idade < 21){
                
                img.setAttribute('src','jovem menino.jpg')
            }
            else if(idade <50){
                
                img.setAttribute('src','adulto.jpg')
            }else{
                
                img.setAttribute('src','idoso.jpg')
            }

        }
        else{
            if(fsex[1].checked){
                genero = 'Mulher'
                if(idade >= 0 && idade < 10)
                {
                    
                img.setAttribute('src','bb menina.jpg')
                }
                else if( idade < 21){
                    
                img.setAttribute('src','jovem menina.jpg')
                }
                else if(idade <50){
                    
                img.setAttribute('src','adulta.jpg')
                }else{
                    
                img.setAttribute('src','idosa.jpg')
                }
    
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}