const form = document.querySelector("form");
const totalresult = document.querySelector("#result");

form.addEventListener('submit', function (sachin) {
    sachin.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const Weight = parseInt(document.querySelector("#Weight").value);
    const result = document.querySelector("#result");

    if (height === ' ' || height < 0 || isNaN(height)) {
        result.innerHTML = "please give a valid height.";
    } else if (Weight === ' ' || Weight < 0 || isNaN(Weight)) {
        result.innerHTML = "please give a valid weight.";
    } else {
        const bmiresult = (Weight / ((height * height) / 10000)).toFixed(2);
        // Show the BMI result
        result.innerHTML = `<span>Your BMI result is: ${bmiresult}</span>`;
        // Check BMI category
        if (bmiresult < 18.6) {
            result.innerHTML += "<br><br>You are underweight.";
        } else if (bmiresult >= 18.6 && bmiresult <= 24.9) {
            result.innerHTML += "<br><br>You are normal weight.";
        } else if (bmiresult > 24.9) {
            result.innerHTML += "<br><br>You are overweight.";
        }

    }
    const clearbutton = document.querySelector("#btn2");
    clearbutton.addEventListener("click", function () {
        result.remove();
    });
});















// // EXTRA

// const form = document.querySelector("#bmiForm");
// const result = document.querySelector("#result");

// form.addEventListener('submit', function (sachin) {
//     sachin.preventDefault();  // Prevent the form from submitting and refreshing the page.

//     // Get the height and weight from the inputs
//     const height = parseFloat(document.querySelector("#height").value);
//     const weight = parseFloat(document.querySelector("#Weight").value);

//     // Validate the height and weight inputs
//     if (isNaN(height) || height <= 0) {
//         result.innerHTML = "Please give a valid height.";
//     } else if (isNaN(weight) || weight <= 0) {
//         result.innerHTML = "Please give a valid weight.";
//     } else {
//         // Calculate BMI
//         const bmiresult = (weight / ((height * height) / 10000)).toFixed(2);

//         // Display the result
//         result.innerHTML = `Your BMI is: ${bmiresult}`;

//         // Check BMI category
//         if (bmiresult < 18.6) {
//             result.innerHTML += "<br>You are underweight.";
//         } else if (bmiresult >= 18.6 && bmiresult <= 24.9) {
//             result.innerHTML += "<br>You are normal weight.";
//         } else if (bmiresult > 24.9) {
//             result.innerHTML += "<br>You are overweight.";
//         }
//     }
// });
