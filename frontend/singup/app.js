const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submit = document.getElementById("submit");
const resultElement = document.getElementById("result");

document.addEventListener("DOMContentLoaded", function() {

    input1.addEventListener("input", compareInputs);
    input2.addEventListener("input", compareInputs);

    function compareInputs() {
        const value1 = input1.value.trim();
        const value2 = input2.value.trim();

        if (value1.length >= 8 && value2.length >= 8 && /^[a-zA-Z0-9]+$/.test(value1) && /^[a-zA-Z0-9]+$/.test(value2)) {
            if (value1 === value2) {
                input1.style.borderBottomColor = "green";
                input1.style.color = "green";
                input2.style.borderBottomColor = "green";
                input2.style.color = "green";
                submit.removeAttribute("disabled"); // فعال کردن دکمه ارسال
            } else {
                input1.style.borderBottomColor = "red";
                input1.style.color = "red";
                input2.style.borderBottomColor = "red";
                input2.style.color = "red";
                submit.setAttribute("disabled", "disabled"); // غیرفعال کردن دکمه ارسال
            }
        } else {
            // resultElement.textContent = "least 8 digits and use letters and numbers";
            resultElement.style.color = 'red';
            input1.style.borderBottomColor = "red";
            input1.style.color = "red";
            input2.style.borderBottomColor = "red";
            input2.style.color = "red";
            submit.setAttribute("disabled", "disabled"); // غیرفعال کردن دکمه ارسال
        }
    }
});
