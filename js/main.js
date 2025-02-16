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
