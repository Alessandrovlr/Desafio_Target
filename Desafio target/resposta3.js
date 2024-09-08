
let maiorFaturamento = 0, media = 0, soma = 0;
let faturamentos = [22174.1664, 

    // 2: 
    24537.6698,
     
    // 3: 
    26139.6134, 

    // 4: 
    0.0, 
    
    // 5: 
    0.0, 

    // 6: 
    26742.6612, 

    // 7: 
    0.0, 
    
    // 8: 
    42889.2258, 

    // 9: 
    46251.174, 

    // 10: 
    11191.4722, 

    // 11:
    0.0,

    // 12: 
    0.0,
    
    // 13:
    3847.4823,
    
    // 14:
    373.7838,
    
    // 15:
    2659.7563,
    
    // 16:
    48924.2448,
    
    // 17:
    18419.2614,
    
    // 18:
    0.0,
    
    // 19:
    0.0,
    
    // 20:
    35240.1826,
    
    // 21:
    43829.1667,
    
    // 22:
    18235.6852,
    
    // 23:
    4355.0662,
    
    // 24:
    13327.1025,
    
    // 25:
    0.0,
    
    // 26:
    0.0,
    
    // 27:
    25681.8318,
    
    // 28:
    1718.1221,
    
    // 29:
    13220.495,
    
    // 30:
    8414.61,
]

let contador = 0, menorFaturamento = faturamentos[0];
let contDias = 0, diaMenorFaturamento = 0, diaMaiorFaturamento = 0;

    for(let i = 0; i < faturamentos.length; i++){
    
        if(faturamentos[i] > media){
            contDias++;
        }

        if(faturamentos[i] != 0){

            contador++;
            soma += faturamentos[i];
            media = soma / contador;

            if(maiorFaturamento < faturamentos[i]){
                maiorFaturamento = faturamentos[i];
                diaMaiorFaturamento = i + 1;
            }

            if(menorFaturamento > faturamentos[i]){
                menorFaturamento = faturamentos[i]
                diaMenorFaturamento = i + 1;
            }
        }
    }

    console.log(`O menor valor de faturamento ocorrido foi de ${menorFaturamento} no dia ${diaMenorFaturamento};
O maior valor de faturamento ocorrido foi de ${maiorFaturamento} no dia ${diaMaiorFaturamento};
Numero de dias no mês que o valor de faturamento diário foi superior à média mensal: ${contDias};`);


    

