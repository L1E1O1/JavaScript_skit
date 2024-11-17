document.addEventListener('DOMContentLoaded', () => {

    let imgBox = document.getElementById('imgBox');
    let qrImg = document.getElementById('qrImage');
    let qrText = document.getElementById('qrText');
    document.getElementById('generate').addEventListener('click', function generate() {
        console.log("generating QR code..");

        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    });
});