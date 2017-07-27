function checkForm(){
    let studentInfo = JSON.parse(localStorage.studentInfo);
    if(studentInfo.map(i=>i.studentNumber).indexOf(document.getElementById("inputId").value)!==-1){
        alert("该学生信息已存在！若要修改，请点击修改标签。");
        return;
    }
    let flag = true;
    if(document.getElementById("inputName").value===''){
        flag = false;
    }else if(document.getElementById("inputId").value===''){
        flag = false;
    }else if(document.getElementById("inputNation").value===''){
        flag = false;
    }else if(document.getElementById("inputClass").value===''){
        flag = false;
    }else if(!checkGrade(document.getElementById("inputChinese"))){
        flag = false;
    }else if(!checkGrade(document.getElementById("inputMath"))){
        flag = false;
    }else if(!checkGrade(document.getElementById("inputEnglish"))){
        flag = false;
    }else if(!checkGrade(document.getElementById("inputProgramming"))){
        flag = false;
    }
    if(flag){
        addStudentInfo();
        alert("学生信息已添加");
        location.reload();
        return;
    }
    alert("请按正确的格式输入!");
}

function checkGrade(str) {
    let isGrade = true;
    let num = parseInt(str)
    if(num<0||num>100){
        isGrade = false;
    }
    return isGrade;
}

