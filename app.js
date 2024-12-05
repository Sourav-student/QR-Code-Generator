document.addEventListener("DOMContentLoaded", () => {

    const search = document.getElementById("search");

    const btn = document.getElementById("btn");

    const showQR = document.getElementById("showQR");

    const getQR = async (QR) => {
        url = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${QR}`;

        const response = await fetch(url);

        showQR.innerHTML = `<img src=${response.url} alt="QRCode">`
    }

        btn.addEventListener("click",async () => {
            if (search.value != "") {
            const QR = await search.value;
            getQR(QR);
            showQR.style.transition = "all 1s linear"
            }

            else{
                alert("Nothing is found to generate QR");
            }
        })
});