let questions = [
    {
        title : 'What is Valorant?',
    alternatives : [
        "Valorant is a free-to-play first-person tactical  shooter.",
        "A restraunt.",
        "Valorant is a free-to-play puzzle based game.",
        "idk"
    ],
    correctAnswer : 0
    },
    {
        title : 'What class is Sage?',
    alternatives : [
        "Duelist",
        "Sentinel",
        "Initiator",
        "Controller"
    ],
    correctAnswer : 1
    },
    {
        title : 'What class is Killjoy?',
    alternatives : [
        "Duelist",
        "Sentinel",
        "Initiator",
        "Controller"
    ],
    correctAnswer : 1
    },
    {
        title : 'What class is Reyna?',
    alternatives : [
        "Duelist",
        "Sentinel",
        "Initiator",
        "Controller"
    ],
    correctAnswer : 0
    },
    {
        title : 'What class is Kayo?',
    alternatives : [
        "Duelist",
        "Sentinel",
        "Initiator",
        "Controller"
    ],
    correctAnswer : 2
    },
    {
        title : 'What class is Brimstone?',
    alternatives : [
        "Duelist",
        "Sentinel",
        "Initiator",
        "Controller"
    ],
    correctAnswer : 3
    },
    {
        title : 'What class is Breach?',
    alternatives : [
        "Duelist",
        "Sentinel",
        "Initiator",
        "Controller"
    ],
    correctAnswer : 2
    },
    {
        title : 'What class is Neon?',
    alternatives : [
        "Duelist",
        "Sentinel",
        "Initiator",
        "Controller"
    ],
    correctAnswer : 0
    },
    {
        title : 'What class is Chamber?',
    alternatives : [
        "Duelist",
        "Sentinel",
        "Initiator",
        "Controller"
    ],
    correctAnswer : 1
    },
    {
        title : 'What class is Skye?',
    alternatives : [
        "Duelist",
        "Sentinel",
        "Initiator",
        "Controller"
    ],
    correctAnswer : 2
    },
]

let app = {
    start : function() {
        this.curpos = 0
        this.score = 0

        // Select by query
        let alts = document.querySelectorAll('.alternative')
        // Show alternatives
        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                this.checkAnswer(index)
            })
        })
    this.showQuestion( questions[this.curpos]);
    this.update()
    },
    showQuestion : function(q) {
        this.currQuest = q
        // 1. Select the dom element
        let titleDiv = document.getElementById('title');
        // 2. Modify it
        titleDiv.textContent = q.title;
        // Select by query
        let alts = document.querySelectorAll('.alternative')
        // Show alternatives
        alts.forEach(function(element, index){
            element.textContent=q.alternatives[index]
        })
    },
    checkAnswer : function(choice) {
        let curQuest = questions[this.curpos]
        if (curQuest.correctAnswer == choice) {
            console.log("Correct Answer")
            this.score ++
            this.showRes(true)
        } else {
            console.log("Wrong Answer")
            this.showRes(false)
        }
        this.increasePos();
        this.showQuestion(questions[this.curpos])
        this.update()
    },
    increasePos : function() {
        // increament cur pos
        this.curpos ++
        // restart when finished
        if (this.curpos == questions.length) {
            this.curpos = 0
        }
    },
    update : function() {
        // Select Score Div
        let scoreDiv = document.getElementById('score');
        // Modify text
        scoreDiv.textContent = 'Your Score: ' + this.score

    },
    showRes : function(isCorrect) {
        let resultDiv = document.getElementById('results')
        let result = ''
        if (isCorrect) {
            result = 'Correct Answer';
        } else {
            // What is our current question
            let currQuest = questions[this.curpos];
            // get the random answer
            let ansIndex = Math.floor(Math.random() * 4);
            // answer text
            let correctText = currQuest.alternatives[ansIndex]
            result = "Wrong Answer and the correct answer is " + correctText
            resultDiv.textContent = result;
        }
        
    }
}

app.start()