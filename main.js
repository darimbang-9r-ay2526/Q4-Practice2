function checkGrade() {

    let grade = document.getElementById("finalgrade").value;

    if (Number(grade) >= 94 && grade <= 100) {
        window.alert("Excellent!");
    }
    else if (Number(grade) >= 87 && grade <= 93) {
        window.alert ("Above Standard!");
    }
    else if (Number(grade) >= 80 && grade <= 86) {
        window.alert ("Standard!");
    }

    else if (Number(grade) >= 75 && grade <= 79) {
        window.alert ("Needs Improvement!");
    }

    else {
        window.alert ("Failed!");
    }
}