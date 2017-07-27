/**
 * Created by ggbond on 17-7-25.
 */
function checkSearchIdsForm() {
    let input = $("#ids-search").val();
    if(input===''){
        alert("输入不能为空");
    }else{
        searchStudentInfo(input);
    }
}

function searchStudentInfo(input) {
    let arr = input.split("，");
    let studentInfo = JSON.parse(localStorage.studentInfo);
    let table = [];
    for(let id of arr){
        let index = studentInfo.map(i => i.studentNumber).indexOf(id);
        if(index!==-1){
            table.push(studentInfo[index]);
        }
    }
    for(let i=0;i<table.length;i++){
        let tr = document.createElement("tr");
        tr.setAttribute("class","table-content");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        let td9 = document.createElement("td");

        td1.innerHTML=(i+1);
        td2.innerHTML=(table[i].name);
        td3.innerHTML=(table[i].studentNumber);
        td4.innerHTML=(table[i].grades["chinese"]);
        td5.innerHTML=(table[i].grades["math"]);
        td6.innerHTML=(table[i].grades["english"]);
        td7.innerHTML=(table[i].grades["programming"]);
        td8.innerHTML=(table[i].grades["average"]);
        td9.innerHTML=(table[i].grades["summary"]);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        tr.appendChild(td9);
        $("#transcript").append(tr);
    }
    let sumArr = table.map(i => i.grades["summary"]);
    sumArr.sort((a,b)=>{return a-b});
    let ave = 0;
    for(let i of sumArr){
        ave += i;
    }
    ave/=sumArr.length;
    let mid;
    if(sumArr.length%2===0){
        mid = sumArr[sumArr.length/2]+sumArr[sumArr.length/2-1];
        mid /= 2;
    }else{
        mid = sumArr[(sumArr.length-1)/2];
    }

    $("#ave-mid").append(`总分平均分：${ave.toFixed(2)}`)
    .append(document.createElement("br"))
    .append(`总分中位数：${mid.toFixed(2)}`);

    $("#myModal").modal();
}