/**
 * Created by ggbond on 17-7-24.
 */
function showAddForm(){
    document.getElementById("addForm").style.display = "block";
    document.getElementById("searchForm").style.display ="none";
    document.getElementById("changeForm").style.display ="none";
    document.getElementById("deleteForm").style.display ="none";
}

function showSearchForm(){
    document.getElementById("searchForm").style.display = "block";
    document.getElementById("addForm").style.display = "none";
    document.getElementById("changeForm").style.display = "none";
    document.getElementById("deleteForm").style.display = "none";
}

function showChangeForm(){
    document.getElementById("changeForm").style.display = "block";
    document.getElementById("addForm").style.display = "none";
    document.getElementById("searchForm").style.display = "none";
    document.getElementById("deleteForm").style.display = "none";
}

function showDeleteForm(){
    document.getElementById("deleteForm").style.display = "block";
    document.getElementById("addForm").style.display = "none";
    document.getElementById("searchForm").style.display = "none";
    document.getElementById("changeForm").style.display = "none";
}