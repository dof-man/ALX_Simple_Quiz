           function checkAnswer() {
            
            const correctAnswer = "4";
            
            
            const quizAnswer = document.querySelector('input[name="quiz"]:checked');
            const userAnswer = quizAnswer.value
            
            
            if (userAnswer) {
                
                if (userAnswer === correctAnswer)
                    
                     {
                    document.getElementById("feedback").textContent = "Correct! Well done.";
                    console.log(userAnswer.value);
                    console.log(userAnswer);
                    console.log(correctAnswer)

                } else {
                    document.getElementById("feedback").textContent = "That's incorrect. Try again!";
                }
            } else {
                
                document.getElementById("feedback").textContent = "Please select an answer!";
            }
        }

        
        document.getElementById("submit-answer").addEventListener("click", checkAnswer);
    
