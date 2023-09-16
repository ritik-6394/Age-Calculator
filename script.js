const btn = document.getElementById('buttons');
let newResult = document.getElementById('result');


function calculateAge() {
    const birthdayValue = document.getElementById('birth').value;
    if (birthdayValue === "") {
        alert("Please enter your birthday");
    } else {
        const age = getAge(birthdayValue);
        newResult.innerText = `you are ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue)
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    // console.log(age)

    let month = currentDate.getMonth() - birthdayDate.getMonth();
    // console.log(age)

    let days = currentDate.getDay() - birthdayDate.getDay();
    // console.log(age)

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }


    return age;


}



btn.addEventListener("click", calculateAge)
