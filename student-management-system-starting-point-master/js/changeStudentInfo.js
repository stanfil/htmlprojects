/**
 * Created by ggbond on 17-7-26.
 */
function checkIdForm() {
    let input = $("#id-change").val();
    if(input===''){
        alert("输入不能为空");
    }else{
        return changeStudentInfo(input);
    }
}

function changeStudentInfo(input) {
    localStorage.a = 132;
    let studentInfo = JSON.parse(localStorage.studentInfo);
    let index = studentInfo.map(i => i.studentNumber).indexOf(input);
    if(index===-1){
        alert("系统中没有该学生信息");
        return;
    }else{
        $("#name").val(studentInfo[index].name);
        $("#sn").val(studentInfo[index].studentNumber);
        $("#nation").val(studentInfo[index].nation);
        $("#class").val(studentInfo[index].klass);
        $("#chinese").val(studentInfo[index].grades["chinese"]);
        $("#math").val(studentInfo[index].grades["math"]);
        $("#english").val(studentInfo[index].grades["english"]);
        $("#programming").val(studentInfo[index].grades["programming"]);
    }
    $("#myModal2").modal();
    return index;
}

function saveStudentInfo(index) {
    let studentInfo = JSON.parse(localStorage.studentInfo);
    studentInfo[index].name=$("#name").val();
    studentInfo[index].nation=$("#nation").val();
    studentInfo[index].klass=$("#class").val();
    studentInfo[index].grades["chinese"]=$("#chinese").val();
    studentInfo[index].grades["math"]=$("#math").val();
    studentInfo[index].grades["english"]=$("#english").val();
    studentInfo[index].grades["programming"]=$("#programming").val();
    let sum = parseFloat(studentInfo[index].grades["chinese"])+parseFloat(studentInfo[index].grades["math"])+parseFloat(studentInfo[index].grades["english"])+parseFloat(studentInfo[index].grades["programming"]);
    studentInfo[index].grades["average"]=sum/4;
    studentInfo[index].grades["summary"]=sum;
    localStorage.studentInfo = JSON.stringify(studentInfo);
    alert("学生信息已保存");
}