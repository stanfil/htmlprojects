function checkForm(){
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
    console.log(flag);
    if(flag){
        addStudentInfo();
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

