/**
 * Created by ggbond on 17-7-24.
 */
//initialize
if(localStorage.studentInfo===undefined){
    localStorage.studentInfo = "[]";
}

let studentInfo = JSON.parse(localStorage.studentInfo);

function addStudentInfo() {
    studentInfo.push({
        name:document.getElementById("inputName").value,
        studentNumber:document.getElementById("inputId").value,
        nation:document.getElementById("inputNation").value,
        klass:document.getElementById("inputClass").value,
        grades:new Map()
    });
    let sum = 0;
    studentInfo[studentInfo.length-1].grades.set("chinese",parseInt(document.getElementById("inputChinese").value));
    studentInfo[studentInfo.length-1].grades.set("math",parseInt(document.getElementById("inputMath").value));
    studentInfo[studentInfo.length-1].grades.set("english",parseInt(document.getElementById("inputEnglish").value));
    studentInfo[studentInfo.length-1].grades.set("programming",parseInt(document.getElementById("inputProgramming").value));
    sum += parseInt(document.getElementById("inputChinese").value);
    sum += parseInt(document.getElementById("inputMath").value);
    sum += parseInt(document.getElementById("inputEnglish").value);
    sum += parseInt(document.getElementById("inputProgramming").value);
    let ave = sum / 4;
    studentInfo[studentInfo.length-1].grades.set("average",ave);
    studentInfo[studentInfo.length-1].grades.set("summary",sum);
    localStorage.studentInfo = JSON.stringify(studentInfo);
}
