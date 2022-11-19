var valor1 = document.getElementById('nr1');
var valor2 = document.getElementById('nr2');
var res = document.getElementById('calc');
var op = document.getElementById('operacao');
var a = document.getElementById('1');
var b = document.getElementById('2');
var c = document.getElementById('3');
var d = document.getElementById('4');
var e = document.getElementById('5');
var f = document.getElementById('6');
var g = document.getElementById('7');
var h = document.getElementById('8');
var resultado = '';
var soma = '';
var subtracao = '';
var divisao = '';
var multiplicacao = '';
var potenciacao = '';
var primo = '';

function calcula(soma,subtracao,divisao,multiplicacao,potenciacao){

var n1 = Number(valor1.value);
var n2 = Number(valor2.value);
var operacao = Number(op.value);
   a.innerHTML='';
   if( valor1.value==0 || valor2.value==0 || op.value==0 || resultado===0){
      a.innerHTML = 'Valor inválido!';
   }
  
   res.innerHTML='';
   b.innerHTML = '';
   c.innerHTML = '';
   d.innerHTML = '';
   e.innerHTML = '';
   f.innerHTML = '';
   g.innerHTML = '';
   h.innerHTML = '';
  //O switch fará a escolha de uma das cinco operações e mostrará o resultado!
   switch (operacao){
      
         case 1:
            soma = n1 + n2;
            var item = document.createElement('option');
            item.text = `${soma.toFixed(2)}`;
            calc.appendChild(item);
            item.value =`calc${operacao}`;
            cor = '#DCDCDC';
            document.getElementById('menu').style.background=cor;
            valor1.value='';
            valor2.value='';
            op.value='';
            resultado = soma;
            
            break;

         case 2:
            subtracao = n1-n2;
            var item = document.createElement('option');
            item.text = `${subtracao.toFixed(2)}`;
            calc.appendChild(item);
            item.value =`calc${operacao}`;
            var cor = '#D3D3D3';
            document.getElementById('menu').style.background=cor;
            valor1.value='';
            valor2.value='';
            op.value='';
            resultado = subtracao;
           
            break;
            
         case 3:
            divisao = n1/n2;
            var item = document.createElement('option');
            item.text = `${divisao.toFixed(2)}`;
            calc.appendChild(item);
            item.value = `calc${operacao}`;
            var cor = '#C0C0C0';
            document.getElementById('menu').style.background=cor;
            valor1.value='';
            valor2.value='';
            op.value='';
          
   //Verifica se o resultado é um número flutuante.   
           if(!isNaN(divisao)) {
            if(parseInt(divisao) != parseFloat(divisao)) {
               c.innerHTML = 'Número decimal/Float';
          }
          resultado = divisao;
        }   
      
            break;

         case 4:
            multiplicacao = n1*n2;
            var item = document.createElement('option');
            item.text = `${multiplicacao.toFixed(2)}`;
            calc.appendChild(item);
            item.value =`calc${operacao}`;
            var cor = '#A9A9A9';
            document.getElementById('menu').style.background=cor;
            valor1.value='';
            valor2.value='';
            op.value='';
            resultado = multiplicacao;
           
            break;
           
         case 5:
            potenciacao = n1**n2;
            var item = document.createElement('option');
            item.text = `${potenciacao.toFixed(2)}`;
            calc.appendChild(item);
            item.value =`calc${operacao}`;
            var cor = '	#808080';
            document.getElementById('menu').style.background=cor;
            valor1.value='';
            valor2.value='';
            op.value='';
            if(n2<0){
               c.innerHTML = 'Número decimal/Float';
            }
            resultado = potenciacao;
            
            break;

            default:
              if(operacao>5){
               b.innerHTML =  'Impossível calcular!';
              }
              
               var cor = '#E6E6FA';
               document.getElementById('menu').style.background=cor;
               valor1.value='';
               valor2.value='';
               op.value='';
              
   }
  
              
   if( resultado<0 ){
      e.innerHTML = 'INTEIRO/INTER  NEGATIVO';
   }
 
    else if(resultado>0){
      f.innerHTML = 'INTEIRO/INTER  POSITIVO';
      }
   
   if(resultado%2==0){
      h.innerHTML = ' P A R';
      }
   else if(resultado%2==1 || resultado<0+1){
    
      g.innerHTML = '  I M P A R';

   }
   //Essa função verifica se o resultado é primo.
   nprimo(resultado);
   function nprimo(resultado){
   for(cont = 2;cont<resultado;cont++){
      primo=true
     if(resultado%cont==0){
     primo = false;
     break;
     
     }
     
  }
  if(primo==true){
     d.innerHTML='NÚMERO PRIMO';
     
     }
     if(resultado===2){
      d.innerHTML='NÚMERO PRIMO';

     }
     
   }
    
   
}
     
