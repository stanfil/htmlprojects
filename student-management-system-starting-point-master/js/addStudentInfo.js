/**
 * Created by ggbond on 17-7-24.
 */
//initialize

// localStorage.clear();

if(localStorage.studentInfo===undefined){
    localStorage.studentInfo = "[]";
}


function addStudentInfo() {
    let studentInfo = JSON.parse(localStorage.studentInfo);
    studentInfo.push({
        name:document.getElementById("inputName").value,
        studentNumber:document.getElementById("inputId").value,
        nation:document.getElementById("inputNation").value,
        klass:document.getElementById("inputClass").value,
        grades:{}
    });
    studentInfo[studentInfo.length-1].grades["chinese"]=parseInt(document.getElementById("inputChinese").value);
    studentInfo[studentInfo.length-1].grades["math"]=parseInt(document.getElementById("inputMath").value);
    studentInfo[studentInfo.length-1].grades["english"]=parseInt(document.getElementById("inputEnglish").value);
    studentInfo[studentInfo.length-1].grades["programming"]=parseInt(document.getElementById("inputProgramming").value);

    let sum = 0;
    sum += parseInt(document.getElementById("inputChinese").value);
    sum += parseInt(document.getElementById("inputMath").value);
    sum += parseInt(document.getElementById("inputEnglish").value);
    sum += parseInt(document.getElementById("inputProgramming").value);
    studentInfo[studentInfo.length-1].grades["average"]=sum/4;
    studentInfo[studentInfo.length-1].grades["summary"]=sum;
    localStorage.studentInfo = JSON.stringify(studentInfo);
}
