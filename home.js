function ok(title, info) {
    Swal.fire(title, info, 'success')
}
function bus() {
    Swal.fire({
        icon: 'question',
        title: "是否執行?",
        text: "送出後無法返回",
        showCancelButton: true
    }).then(function (result) {
        if (result.value) {
            dobus();
        }
    });
}
function dobus() {
    Loading();
    window.location = "./bus";
}
function Loading() {
    Swal.fire({
        title: '正在讀取',
        allowEscapeKey: false,
        allowOutsideClick: false,
        ConfirmButton: false,
        showConfirmButton: false,
    })
}
function error(title, info) {
    Swal.fire(title, info, 'error')
}
function page3() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
}
function page2() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
    document.getElementById("page3").style.display = "none";
}
function page1() {
    document.getElementById("page1").style.display = "block";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
}

function isIOSDevice(){
    if(!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)){
        document.getElementById("info").style.paddingBottom = "35px";
    }
    else{
        document.getElementById("info").style.paddingBottom = "15px";
    }
}