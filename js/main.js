function downloadFile() {
    let fileURL = "https://docs.google.com/spreadsheets/d/1IBLjQBBN13BIVaGJYDnnSi7dkt2zx3Q8/edit?usp=drive_link&ouid=106283500794737025863&rtpof=true&sd=true";
    let a = document.createElement("a");
    a.href = fileURL;
    a.download = "GPA Calc.xlsx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function showPopup(event) {
    event.preventDefault();
    document.getElementById("popup").style.display = "block";
}

function goToPage(url) {
    window.open(url, '_blank');
    document.getElementById("popup").style.display = "none";
}

function toggleDiv(isVisible) {
    document.getElementById("myDiv").style.display = isVisible ? "block" : "none";
}


setTimeout(function () {
    console.log("Powerd By Diaa Elsadek !");
    document.querySelectorAll(".subjects").forEach(subject => {
        subject.style.animation = "none";
    });
}, 2000);


function goTo(url){
    window.open(url, "_blank");
}
