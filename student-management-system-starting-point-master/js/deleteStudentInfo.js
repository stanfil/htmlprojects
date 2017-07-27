/**
 * Created by ggbond on 17-7-26.
 */
function checkDeleteIdsForm() {
    let input = $("#ids-delete").val();
    if(input===''){
        alert("输入不能为空");
    }else{
        deleteStudentInfo(input);
        alert("学生信息已删除");
    }
}

function deleteStudentInfo(input) {
    let arr = input.split("，");
    let studentInfo = JSON.parse(localStorage.studentInfo);
    for(let id of arr){
        let index = studentInfo.map(i => i.studentNumber).indexOf(id);
        if(index!==-1){
            studentInfo.splice(studentInfo[index],1);
        }
    }
    localStorage.studentInfo = JSON.stringify(studentInfo);
}