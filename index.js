function calculo(){
    var num = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var res = document.getElementById('res')
    var sel = document.getElementById('selector').value
    
        switch(sel){
                case '+':
                    soma = (num + num2)
                document.getElementById('res').innerHTML    = `o resultado é ${soma}`
                break
                case '-':
                    soma = (num - num2)
                     document.getElementById('res').innerHTML = `o resultado é ${soma}`
                      break
                case '*':
                    soma = (num * num2)
                     document.getElementById('res').innerHTML = `o resultado é ${soma}`
                      break
                case '/':
                    soma = (num / num2)
                     document.getElementById('res').innerHTML = `o resultado é ${soma}`
                      break
        }
}