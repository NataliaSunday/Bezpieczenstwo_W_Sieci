window.onload=function(){
    var quiz = {
        title: "Sprawdź swoją wiedze na temat bezpieczeństwa w sieci!",
        questions: [
            {
                text: "Czy haker a chaker to dwie takie same osoby?",
                responses: [
                    {text:'Tak.', correct: true},
                    {text: 'Nie.'},
                ]
            },
            {
                text: "Czy wirusy mają zdolnośc replikacji?",
                responses: [
                    {text:'Nie.'},
                    {text: 'Tak.', correct: true},
                    {text:'Niektóre.'},
                ]
            },
            {
                text: "Jakie są typy wirusów?",
                responses: [
                    {text:'Trojan/spyware/exploit.'},
                    {text: 'Spyware/ trojan.'},
                    {text:'Exploit/spyware.', correct: true},
                    {text: 'Trojan.'},
                ]
            },
            {
                text: "Czym jest spyware?",
                responses: [
                    {text:'Oprogramowaniem,które przejmuje zdalnie urządzenie.'},
                    {text: 'Oprogramowaniem, które jest wykorzystywane przy atakach DoS.'},
                    {text:'Oprogramowaniem, które jest wykorzystywane przy atakach DdoS.'},
                    {text: 'Oprogramowaniem szpiegującym.', correct: true},
                ]
            },
            {
                text: "W jaki sposób nie pobiera się informacji o działaniach użytkownika?",
                responses: [
                    {text:'Cookie.'},
                    {text: 'Spyware.'},
                    {text:'Adware.', correct: true},
                    {text: 'Scumware.'},
                ]
            },
            {
                text: "W jaki sposób dzaiałają Exploity?",
                responses: [
                    {text:'Pobierają wpisywane dane z klawiatury.'},
                    {text: 'Wykorzystują luki w systemach i aplikacjach.', correct:true},
                    {text:'Infekują pliki.'},
                    {text: 'Monitorją działania użytkownika.'},
                ]
            },
            {
                text: "Do zestawu exploitów należą:",
                responses: [
                    {text:'Balck hat.'},
                    {text: 'Angler, Nuclear, Blackhole Kit.', correct: true},
                    {text:'Black Hat, grey Hat.'},
                    {text: 'wirusy.'},
                ]
            },
            {
                text: "Czy trojany mogą mieć postać zwykłego programu?",
                responses: [
                    {text:'Tak.', correct: true},
                    {text: 'Nie.'},    
                ]
            },
            {
                text: "Jak działa i czym jest  Wabbit?",
                responses: [
                    {text:'To trojan, który replikuje jeden plik aż zabraknie miesjca w pamięci urządzenia.'},
                    {text: 'To exploit, który replikuje jeden plik aż zabraknie miesjca w pamięci urządzenia.', correct: true},
                    {text:'To adware dające fałszywe reklamy.'},
                    {text: 'Sposób w jaki pobiera się informacje o użytkownikach.'},
                ]
            },
            {
                text: "Jak powstają wirusy?",
                responses: [
                    {text:'Przez chakerów.', correct: true},
                    {text: 'Przez white hat i black hat.'},
                    {text:'Powstają samoistnie.'},
                    {text: 'Przez błędy w oprogramowaniu.'},
                ]
            },
           {
                text: "Na czym polega atak DoS i DdoS?",
                responses: [
                    {text:'Na ciągłym wysyłaniu rządań, aby przeciążyc serwer.', correct: true},
                    {text: 'Na kradzieży danych przez oprogramowanie szpiegujące.'},
                    {text:'Na monitorowaniu sieci przez specjalne oprogramowanie.'},
                    {text: 'Na wysyłaniu spamu ze złosliwym oprogramowaniem.'},
                ]
            },
            {
                text: "Co nie jest cyberbullingiem?",
                responses: [
                    {text:'Hejt'},
                    {text: 'Ciagłym wysyłaniem wiadomości poprzez sieć.'},
                    {text:'Wrzucaniem upokarzających zdjęć lub filmów.'},
                    {text: 'Wszytsko jest.', correct: true},
                ]
            },
            {
                text: "Czy w internecie obowiązują regulacje prawne?",
                responses: [
                    {text:'Tak.', correct: true},
                    {text: 'Nie,'},                
                ]
            },
            {
                text: " Po co należy aktualizować system?",
                responses: [
                    {text:'Aby miał mniej luk.'},
                    {text: 'Aby był sprawniejszy.'},
                    {text:'Aby utrudnić dostęp do niego chakerom i wirusom.'},
                    {text: 'Wszytskie odpowiedzi są prawidłowe.', correct: true},
                ]
            },
            {
                text: "Czy podłączene się do publicznego WiFi bez hasła jest bezpieczne?",
                responses: [
                    {text:'Tak.', correct: true},
                    {text: 'Nie'},
                ]
            },
           {
                text: "Czy zielona kłódka obok adresu witryny jest 100% gwarancją bezpieczeństwa?",
                responses: [
                    {text:'Tak.'},
                    {text: 'Nie.', correct: true},
                ]
            },
           {
                text: "Czy chakerzy są w stanie pobrać numer twojej karty bankowej?",
                responses: [
                    {text:'Tak.', correct: true},
                    {text: 'Nie.'},
                ]
            },
            {
                text: "Czy możesz nie świadomie brac udzial w ataku DdoS?",
                responses: [
                    {text:'Tak, poprzez złośliwe oprogramowanie.'},
                    {text: 'Nie.'},
                    {text:'Tak, jako komputer "zombie".'},
                    {text: 'Odpowiedź a i c jest prawidłowa.', correct: true},
                ]
              },
              {
                text: "Czy można być anonimowym w sieci?",
                responses: [
                    {text:'Nie, np przez cookies lub oprogramowania monitorujące aktywność użytkownika w sieci.'},
                    {text: 'Nie, np przez udostepnianie swoich danych na social media.'},
                    {text:'Tak, nawet jeśli chronie swoje dane i akeptuję wszytskie regulaminy witryn.'},
                    {text: 'Odpowiedź a i b jest prawidołwa.', correct: true},
                ]
            },      
        ]
    };
    
    new Vue({
        el: '#app',
        data: {
            quiz: quiz,
            questionIndex: 0,
            userResponses: Array(quiz.questions.length).fill(false)
        },
        methods: {
            next: function(){
                this.questionIndex++;
            },
            prev: function(){
                this.questionIndex--;
            },
            score: function(){
                return this.userResponses.filter(function(val){ return val}).length;
            }
        }
    });
}