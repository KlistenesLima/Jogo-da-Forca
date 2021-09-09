
var biblioteca=["javascript","curso","computador","transporte","livraria","tecnologia","controle","churrasco","brasil","impressora","xícara",
"monitor","brinquedo","youtube","portaria","escola","carnaval","teclado","guitarra","bateria","chinelo","helicoptero","arduino"];

var qtde=biblioteca.length-1;//Array onde tem as palavras possíveis para o jogo.
var pos= Math.round(Math.random()*qtde);//Variável que tem a função de armazenar um número aleatório entre 0 e a quantidade de palavras que tem na biblioteca.
var palavra = biblioteca[pos];//Variável que vai receber a palavra da bibliotéca com indice sorteado aleatoriamente em 'pos'.
var tam = palavra.length;//Variável que vai armazenar o tamanho da palavra sorteada.
var cxLetras=[];//Vairável para caixa de letras.
var acertos;//Variável para númerp de acertos.
var errosMax=7;//Variável com o número máximo de erros.
var erros=0;//Variável que irá mostrar o número inicial de erros.
var desenhos =[];//Variável com as peças dos desenho.
var acertou = false;//Se acertou.
var jogando = false;//Se o jogo está rolando.
var jog;//Vairável para jogador.

function defineLetras(l){//Função 
    var obj;
    for(var i=0;i<20;i++){
        obj=document.getElementById("letra"+i).value="";//Os inputs não terão nada no como valor.
        obj=document.getElementById("letra"+i).style.display="none";//Não mostar as letras.
    }
    for(var i=0;i<l;i++){
        obj=document.getElementById("letra"+i).style.display="inline-block";//Mostra somente as letras da palavra, conforme a variável tam que foi passada.
    }
}

function jogar(){
    jog=document.getElementById("letraJ");//Define novamente a, na variável 'jog', o elemento com a letra do jogador.
    jog.focus();//Coloca o foco em 'jog'.
    if(jog.value==""){
        alert("Digite uma letra");//Envia um alerta caso não tenha sido digitada alguma letra.
    }else{
        if(jogando){//Verifica se ta jogando.
            var obj;
            var letraTmp;
            var letra;
            var pesq;
            letra=jog.value;//Letra vai receber o valor que foi digitada no campo do jogador.
            jog.value="";//Limpa o conteúdo do 'input' do jogador após armazenar o conteúdo em uma variável.
            pesq=palavra.match(letra);//Pesquisa(match) se existe dentro da palavra, alguma ocorrência da letra escolhida pelo jogador.
            acertou=false;//define a variável acertou.
            while(pesq!=null){//Se 'pesq' diferente de 'null', significa que foram encontradas ocorrências da letra na palavra.  
                letraTmp=palavra.search(letra);//Enquanto pesquisa for diferente de null, ele vai armazernar em letraTmp,uma pesquisa da letra na palavra.
                obj=document.getElementById("letra"+letraTmp).value=letra;//Armazena na variável 'obj', a letra que foi digitada.
                //coloca em ('letra'+ o numero da letra'letraTmp', ou seja, o imput que armazena tal letra), o valor da variável 'letra', que é a letra digitada.
                palavra=palavra.replace(letra,'0');//Troca a letra digitada pelo '0', para que na próxima pesquisa, não encontra novamente a mesma letra e siga em um loop infinito.
                acertos++;//Incremente acertos.
                pesq=palavra.match(letra);//Faz a pesquisa novamente.
                acertou=true;//Coloca o acerto como verdadeiro.
            }
            if(!acertou){//Se não acertou...
                document.getElementById("dvletrasdigitadas").innerHTML+=letra.toUpperCase()+ " ";//No texto 'Letras Digitadas:', vai incrementar a letra digitada.
                erros++;//Incrementa o erro.
                if(erros<8){//Se o erro for menor que 8.
                    desenhos[erros].style.display="block";//Ele mostra um desenho da forca.
                }else{
                    document.getElementById("forca6").src="../imgs/forca7.png";
                    document.getElementById("dvmsg").innerHTML="PERDEU";//Caso contrário, mostra que o jogador perdeu.
                    jogando=false;//Mostra que o jogo acabou.
                }
            }
            if(acertos==tam){//Verifica se o número de acertos é do tamanho da palavra.
                // document.getElementById("dvmsg").innerHTML="";
                document.getElementById("dvmsg").innerHTML="GANHOU";//Significa que GANHOU.
                jogando=false;//Mostra que o jogo acabou.
            }
        }
    }
}

function inicia(){//Função que irá fazer a inicialização das variáveis e preparar os elementos para um novo jogo.
    jogando=true;//Variável jogando é iniciado como verdadeira, mostrando que o jogo ta rolando.
    jog=document.getElementById("letraJ");//A variável 'jog', recebe a letra do jogador.
    jog.value="";//O valor da variável 'jog', vai ser zero.
    jog.focus();//O cursor vai estar nela.
    acertos=0;//Como é um novo jogo, começa com 0 acertos.
    erros=0;//Como é um novo jogo, começa com 0 erros.
    acertou=false;//A variável acertou recebe 'false'
    document.getElementById("dvletrasdigitadas").innerHTML="Letras Digitadas:";//As letras digitadas vai receber apenas o nome 'Letras Digitadas' pelo InnerHTML.
    pos= Math.round(Math.random()*qtde);//Sorteia a posição da palavra que vai ser gerada.
    palavra=biblioteca[pos];//Variável vai receber da biblioteca a palavra correspondente ao pos.
    tam=palavra.length;//Tamanho da palavra.
    defineLetras(tam);//Chama a função define letras com o tamanho da palavra. Ou seja vai criar a quantidade de Inputs de acordo com a quantidade de lertras existentes na palavra.
    document.getElementById("dvmsg").innerHTML="";//Define o texto da 'dvmsg', para nada.
    desenhos[1]=document.getElementById("forca0");//Array de inidice 1 que recebe o desenho da forca0.
    desenhos[2]=document.getElementById("forca1");//Array de inidice 2 que recebe o desenho da forca1.
    desenhos[3]=document.getElementById("forca2");//Array de inidice 3 que recebe o desenho da forca2.
    desenhos[4]=document.getElementById("forca3");//Array de inidice 4 que recebe o desenho da forca3.
    desenhos[5]=document.getElementById("forca4");//Array de inidice 5 que recebe o desenho da forca4.
    desenhos[6]=document.getElementById("forca5");//Array de inidice 6 que recebe o desenho da forca5.
    desenhos[7]=document.getElementById("forca6");//Array de inidice 7 que recebe o desenho da forca6.
    for(var i=1;i<8;i++){
        desenhos[i].style.display="none";//Oculta todas as peças para o caso de um novo jogo
    }
}

function dica(){
    alert(palavra);
    jog.focus();
}

window.addEventListener("load",inicia);//Chama a função 'iniciar', ao carregar da página.