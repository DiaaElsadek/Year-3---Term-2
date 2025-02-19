function downloadFile() {
    let fileURL = "../img/Groups year 3.pdf";
    let a = document.createElement("a");
    a.href = fileURL;
    a.download = "Groups Year 3 - Term 2.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => {
        window.open(fileURL, "_blank");
    }, 1000);
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
}, 2000); // 3000 ميلي ثانية = 3 ثواني

