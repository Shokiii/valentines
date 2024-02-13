document.addEventListener("DOMContentLoaded", function() {
    // Selecting the button element
    var calculateButton = document.getElementById("calculateButton");

    // Adding click event listener to the button
    calculateButton.addEventListener("click", calculateLove);

    // Function to calculate percentage based on names
    function calculateLove() {
        var name1 = document.getElementById("nameInput1").value.trim().toLowerCase();
        var name2 = document.getElementById("nameInput2").value.trim().toLowerCase();

        if (name1 === "" || name2 === "") {
            displayResult(""); // Clear the result if either name is empty
            return;
        }

        var lovePercentage = calculatePercentage(name1, name2);
        displayResult(lovePercentage);
    }

    function calculatePercentage(name1, name2) {
        
        if(name1=='kornel'&&name2=='ruth' || name1=='ruth' && name2=='kornel' || name1=='kornel zydorczyk'&&name2=='ruth zydorczyk' || name1=='ruth zydorczyk' && name2=='kornel zydorczyk'){
            var lovePercentage= 100;
        }
        else{
            
            lovePercentage = 0;
        }
        

        return lovePercentage;
    }

    
    function displayResult(percentage) {
        var resultDiv = document.getElementById("result");
        if (percentage === "") {
            resultDiv.innerHTML = ""; 
        } else {
            resultDiv.innerHTML = "<p>Love Percentage: " + percentage + "%</p>";
        }
    }
});
