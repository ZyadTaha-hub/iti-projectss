let nameInput = document.querySelector("#nameInput");
let ageInput = document.querySelector("#ageInput");
let jobInput = document.querySelector("#jobInput");
let submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", function() {
    
    let nameValue = nameInput.value;
    let ageval = ageInput.value;
    let jobValue = jobInput.value;

    if (nameValue === "" || ageval === "" || jobValue === "") {
        alert("يجب ملئ جميع الخانات");
    } else {
        console.log(`Name: ${nameValue}`);
        console.log(`Age: ${ageval}`);
        console.log(`Job: ${jobValue}`);

        if (Number(ageval) < 18) {
            alert("You are under age");
        } else {
            alert("تم تسجيل الدخول بنجاح ");
        }
    }
});