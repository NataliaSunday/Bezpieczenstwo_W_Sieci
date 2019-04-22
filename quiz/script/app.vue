window.onload=function(){
    var quiz = {
        titles: "My quiz",
        questions: [
            {
                text: "question 1",
                responses: [
                    {text:'Wrong, too bad.'},
                    {text: 'Roght!', correct: true},
                ]
            },
            {
                text: "question 2",
                responses: [
                    {text:'Wrong, too bad.'},
                    {text: 'Roght!', correct: true},
                ]
            }
            {
                text: "question 3",
                responses: [
                    {text:'Wrong, too bad.'},
                    {text: 'Roght!', correct: true},
                ]
            }
            {
                text: "question 4",
                responses: [
                    {text:'Wrong, too bad.'},
                    {text: 'Roght!', correct: true},
                ]
            }
            
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