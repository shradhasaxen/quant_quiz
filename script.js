(function() {
    var questions = [ {
      question: "How much water be mixed in 36 litres of milk worth Rs. 4.80 per litre, so that value of mixture is Rs. 3.60 per litre?",
      choices: ["10 litres", "12 litres", "11 litres", "14 litres"],
      correctAnswer: 1
  },
  {
      question: "A car owner buys petrol at Rs.7.50, Rs. 8 and Rs. 8.50 per litre for three successive years. What approximately is the average cost per litre of petrol if he spends Rs. 4000 each year?",
      choices: ["Rs. 7.98", "Rs. 8", "Rs. 8.50", "Rs. 9"],
      correctAnswer: 0
  },
  {
      question: "To 15 liters of water containing 20% alcohol, we add 5 liters of pure water. What is % alcohol?",
      choices: ["10%", "15%", "75%", "5%"],
      correctAnswer: 1
  },
  {
      question: "A dishonest milk seller mixes 10% of water in pure milk. He sells the mixture at 10% more than its cost price. If 10% of his mixture spilled out. Find the net Profit % or loss% incurred by him.",
      choices: ["No Profit and No Loss", "8.9% Loss", "8.9% Loss", "10% profit"],
      correctAnswer: 1
  },
  {
      question: "The highest score in an innings is 2/9th of the total score in the inning and the next highest score is 2/9 of the remainder score. The difference of two scores is 8 runs. Find the total score in the innings?",
      choices: ["152", "162", "142", "132"],
      correctAnswer: 1
  },
  {
      question: "In the first 10 overs of a cricket game, the run rate was only 3.2. What should be the run rate in the remaining 40 overs to reach the target of 282 runs?",
      choices: ["6.25", "6.5", "6.75", "7"],
      correctAnswer: 0
  },
  {
      question: "P is six times as large as Q. The per cent that Q is less than P is?",
      choices: ["83.33 %", "18 .88%", "90%", "60%"],
      correctAnswer: 0
  },
  {
      question: "The average monthly income of P and Q is Rs. 5050. The average monthly income of Q and R is Rs. 6250 and the average monthly income of P and R is Rs. 5200. The monthly income of P is:",
      choices: ["3500", "4000", "4050", "5000"],
      correctAnswer: 1
  },
  {
      question: "A grocer has a sale of Rs. 6435, Rs. 6927, Rs. 6855, Rs. 7230 and Rs. 6562 for 5 consecutive months. How much sale must he have in the sixth month so that he gets an average sale of Rs. 6500?",
      choices: ["Rs. 4991", "Rs. 5991", "Rs. 6001", "Rs. 6991"],
      correctAnswer: 0
  },
  {
      question: "How much sugar at Rs. 9.5 a kg should be added to 17 kg of tea at Rs. 20 a kg so that the mixture be worth Rs. 13 a kg.?",
      choices: ["11 kg", "17 kg", "21 kg", "34 kg"],
      correctAnswer: 3
  },
  {
      question: "The average of 20 numbers is zero. Of them, at the most, how many may be greater than zero?",
      choices: ["0", "1", "10", "19"],
      correctAnswer: 3
  },
  {
      question: "A person who spends 66 2/3% of his income is able to save Rs. 1,200 per month. His monthly expense is?",
      choices: ["1,200", "2,400", "3,000", "3,200"],
      correctAnswer: 3
  },
  {
      question: "In what ratio must two kinds of sugar at Rs. 1.15 and Rs. 1.24 per kg be mixed so that by selling at Rs. 1.50 per kg, 25% may be gained?",
      choices: ["4: 5", "5: 4", "1: 1", "2: 3"],
      correctAnswer: 0
  },
  {
      question: "How many kg of Sugar at 50 P per kg must a man mix with 25 kg of sugar at 34P per kg so that by selling the mixture at 44P per kg he gains 10% on the outlay?",
      choices: ["10 kg", "15 kg", "20 kg", "16 kg"],
      correctAnswer: 2
  },
  {
    question: "Prasad sold his work tools for Rs. 1,850 and earned a profit of 25 percent. At what price did Prasad buy the work tools?",
    choices: ["Rs. 1,360", "Rs. 1,300", "Rs. 1,240", "Rs. 1,480", "None of these"],
    correctAnswer: 3
},
{
    question: "A table with marked price Rs. 1200 was sold to a customer for Rs. 1100. Find the rate of discount allowed on the table:",
    choices: ["9%", "8.33%", "9.33%", "10%"],
    correctAnswer: 1
},
{
    question: "Meenal purchased a car for Rs. 2,50,000 and sold it for Rs. 3,48,000. Then what is the percent profit she made on the car?",
    choices: ["40", "39.2", "38.4", "38", "None of these"],
    correctAnswer: 1
},
{
    question: "In a regular week, there are 5 working days and for each day, the working hours are 8. A man gets Rs. 2.40 per hour for regular work and Rs. 3.20 per hours for overtime. If he earns Rs. 432 in 4 weeks, then how many hours does he work for?",
    choices: ["160", "175", "180", "195"],
    correctAnswer: 1
},
{
    question: "To fill a tank, 25 buckets of water is required. How many buckets of water will be required to fill the same tank if the capacity of the bucket is reduced to two-fifth of its present?",
    choices: ["10", "35", "62.5", "Cannot be determined"],
    correctAnswer: 2
},
{
    question: "Free notebooks were distributed equally among children of a class. The number of notebooks each child got was one-eighth of the number of children. Had the number of children been half, each child would have got 16 notebooks. Total how many notebooks were distributed?",
    choices: ["256", "432", "512", "640"],
    correctAnswer: 2
},
{
  question: "List Price of a sewing machine is Rs. 2300. It is sold at a discount of 4%. Find the selling price of it?",
  choices: ["Rs. 2,200", "Rs. 2,280", "2,180", "Rs. 2,208"],
  correctAnswer: 3
},
{
  question: "The average weight of 24 students in a section A of a class is 58 Kg, whereas the average weight of 26 students in section B of the same class is 60.5 Kg. Find out the average weight of all the 50 students of the class.",
  choices: ["57.4 Kg", "59.6 Kg", "58.9 Kg", "59.7 Kg"],
  correctAnswer: 1
},
{
  question: "A can do a piece of work in 4 hours; B and C together can do it in 3 hours, while A and C together can do it in 2 hours. How long will B alone take to do it?",
  choices: ["8 hours", "10 hours", "12 hours", "24 hours"],
  correctAnswer: 2
},
{
  question: "10 women can complete a work in 7 days and 10 children take 14 days to complete the work. How many days will 5 women and 10 children take to complete the work?",
  choices: ["3", "5", "7", "Data inadequate"],
  correctAnswer: 2
},
{
  question: "Twenty women can do a work in sixteen days. Sixteen men can complete the same work in fifteen days. What is the ratio between the capacity of a man and a woman?",
  choices: ["3 : 4", "4 : 3", "5 : 3", "Data inadequate"],
  correctAnswer: 1
},
{
  question: "4 men and 6 women can complete a work in 8 days, while 3 men and 7 women can complete it in 10 days. In how many days will 10 women complete it?",
  choices: ["35", "40", "45", "50"],
  correctAnswer: 1
},
{
  question: "A can finish a work in 18 days and B can do the same work in 15 days. B worked for 10 days and left the job. In how many days, A alone can finish the remaining work?",
  choices: ["5", "5(1/2)", "6", "8"],
  correctAnswer: 2
},
{
  question: "A machine P can print one lakh books in 8 hours, machine Q can print the same number of books in 10 hours while machine R can print them in 12 hours. All the machines are started at 9 A.M. while machine P is closed at 11 A.M. and the remaining two machines complete work. Approximately at what time will the work (to print one lakh books) be finished?",
  choices: ["11:30 A.M.", "12 noon", "12:30 P.M.", "1:00 P.M."],
  correctAnswer: 3
},
{
  question: "If 6 men and 8 boys can do a piece of work in 10 days while 26 men and 48 boys can do the same in 2 days, the time taken by 15 men and 20 boys in doing the same type of work will be:",
  choices: ["4 days", "5 days", "6 days", "7 days"],
  correctAnswer: 0
},
{
  question: "A does 80% of a work in 20 days. He then calls in B and they together finish the remaining work in 3 days. How long B alone would take to do the whole work?",
  choices: ["23 days", "37 days", "40 days", "None of these"],
  correctAnswer: 2
},
{
  question: "A can do a certain work in the same time in which B and C together can do it. If A and B together could do it in 10 days and C alone in 50 days, then B alone could do it in:",
  choices: ["15 days", "20 days", "25 days", "None of these"],
  correctAnswer: 1
},
{
  question: "A can do a piece of work in 14 days while B can do it in 21 days. In how many days, working together they will complete the whole work?",
  choices: ["10.5", "8", "8.4", "9"],
  correctAnswer: 2
}
     
    ]

    // Shuffle the questions
    questions = shuffleArray(questions);

    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object
    var userName = '';

    // Display initial question
    displayNext();

    // Click handler for the 'next' button
    $('#next').on('click', function(e) {
        e.preventDefault();

        // Suspend click listener during fade animation
        if (quiz.is(':animated')) {
            return false;
        }
        choose();
        questionCounter++;
        displayNext();
    });

    // Click handler for the 'showAnswer' button
    $('#showAnswer').on('click', function(e) {
        e.preventDefault();
        if (questionCounter === questions.length) {
            displayAllAnswers();
        } else {
            highlightCorrectAnswer();
        }
    });

    // Click handler for the 'prev' button
    $('#prev').on('click', function(e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        choose();
        questionCounter--;
        displayNext();
    });

    // Click handler for the 'Start Over' button
    $('#start').on('click', function(e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        questionCounter = 0;
        selections = [];
        displayNext();
        $('#start').hide();
    });

    // Animates buttons on hover
    $('.button').on('mouseenter', function() {
        $(this).addClass('active');
    });
    $('.button').on('mouseleave', function() {
        $(this).removeClass('active');
    });

    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
        var qElement = $('<div>', {
            id: 'question'
        });

        var header = $('<h2>Question ' + (index + 1) + ':</h2>');
        qElement.append(header);

        var question = $('<p>').append(questions[index].question);
        qElement.append(question);

        var radioButtons = createRadios(index);
        qElement.append(radioButtons);

        return qElement;
    }

    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questions[index].choices.length; i++) {
            item = $('<li>');
            input = '<input type="radio" name="answer" value=' + i + ' />';
            input += questions[index].choices[i];
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }

    // Reads the user selection and pushes the value to an array
    function choose() {
        selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }

    // Displays next requested element
    function displayNext() {
        quiz.fadeOut(function() {
            $('#question').remove();

            if (questionCounter < questions.length) {
                var nextQuestion = createQuestionElement(questionCounter);
                quiz.append(nextQuestion).fadeIn();
                if (!(isNaN(selections[questionCounter]))) {
                    $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
                }

                // Controls display of 'prev' button
                if (questionCounter === 1) {
                    $('#prev').show();
                } else if (questionCounter === 0) {

                    $('#prev').hide();
                    $('#next').show();
                }
            } else {
                var scoreElem = displayScore();
                quiz.append(scoreElem).fadeIn();
                $('#next').hide();
                $('#prev').hide();
                $('#start').show();
            }
        });
    }

    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
        var score = $('<div>', {
            id: 'question'
        });

        for (var i = 0; i < questions.length; i++) {
            var questionDiv = $('<div>').addClass('question-info');
            var userAnswer = selections[i];
            var correctAnswer = questions[i].correctAnswer;

            var questionText = $('<p>').text("Question " + (i + 1) + ": " + questions[i].question);
            var userResponse = $('<p>').text("Your response: " + (userAnswer !== undefined ? questions[i].choices[userAnswer] : "No response"));
            var correctResponse = $('<p>').text("Correct answer: " + questions[i].choices[correctAnswer]);

            questionDiv.append(questionText, userResponse, correctResponse);
            score.append(questionDiv);
        }

        return score;
    }

    // Function to shuffle an array
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    // Function to highlight correct answer
    function highlightCorrectAnswer() {
        var correctAnswerIndex = questions[questionCounter].correctAnswer;
        var radios = $('input[name="answer"]');
        radios.each(function(index) {
            if (index === correctAnswerIndex) {
                $(this).parent().css('color', 'green');
            }
        });
    }

    // Function to display all answers after the quiz is completed
    function displayAllAnswers() {
        var allAnswersDiv = displayScore();
        quiz.empty().append(allAnswersDiv).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#showAnswer').hide();
        $('#start').show();
    }
})();

// Add event listener to radio inputs
$('body').on('click', 'input[type="radio"]', function() {
    $('#showAnswer').show(); // Show the "Show" button when any option is clicked
});

