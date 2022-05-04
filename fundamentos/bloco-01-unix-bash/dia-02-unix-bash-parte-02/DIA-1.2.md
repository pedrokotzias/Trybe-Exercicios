# DIA 1.2
O objetivo do dia 1.2 foi continuar a aprendizagem do terminal, comandos, operadores, alterar as permissões de arquivos e diretórios, verificar o status e enviar sinais a processos UNIX.

### Aprendemos:

- chmod, change moderator
-  | > >> <, que são o pipe, entrada, saida e adicionar
- sort, ordena
- find, lista/busca
- who, mostra permissões
- history, mostra historico de comandos
- echo, exibe mensagens na tela, arquivo ou terminal
- ps, mostra os processos atuais
- kill, mata um processo
- jobs, mostra todos os processos tanto em fg quanto bg

### Os exércicios foram: 
1.  Navegue até a pasta `unix_tests` ;
    
2.  Crie um arquivo texto pelo terminal com o nome `skills2.txt` e adicione os valores `Internet` , `Unix` e `Bash` , um em cada linha.
    
3.  Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓
    
4.  Conte quantas linhas tem o arquivo `skills2.txt` .
    
5.  Crie um arquivo chamado `top_skills.txt` usando o `skills2.txt` , contendo as 3 primeiras skills em ordem alfabética.
    
6.  Crie um novo arquivo chamado `phrases2.txt` pelo terminal e adicione algumas frases de sua escolha.
    
7.  Conte o número de linhas que contêm as letras `br` .
    
8.  Conte o número de linhas que **não** contêm as letras `br` .
    
9.  Adicione dois nomes de países ao final do arquivo `phrases2.txt` .
    
10.  Crie um novo arquivo chamado `bunch_of_things.txt` com os conteúdos dos arquivos `phrases2.txt` e `countries.txt`
    
11.  Ordene o arquivo `bunch_of_things.txt` .

--

1.  Navegue até a pasta `unix_tests` ;
    
2.  Rode o comando [ls](https://linux.die.net/man/1/ls) `-l` e veja quais as permissões dos arquivos;
    
3.  Mude a permissão do arquivo `bunch_of_things.txt` para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando `ls -l` ;
    
    > Resultado esperado: `-rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`
    
4.  Tire a permissão de escrita do arquivo `bunch_of_things.txt` para todos os usuários, verifique se está correto com o comando `ls -l` ;
    
    > Resultado esperado: `-r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`
    
5.  Volte à permissão do arquivo `bunch_of_things.txt` para a listada inicialmente utilizando o comando `chmod 644 bunch_of_things.txt` .
    
    > Resultado esperado: `-rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`
    

---

