var pageState = document.readyState;


function logIn(arguments) {
    let form = document.getElementById('ifrPaginaSecundaria');

    let ddlDelegacion = form.contentWindow.document.getElementById('ddlDelegacion');
    let imssWorkerID = form.contentWindow.document.getElementById('txtUsuario');
    let imssWorkerPassword = form.contentWindow.document.querySelectorAll('input[type=password]');

    let formButton = form.contentWindow.document.getElementById('btnIngresar');

    ddlDelegacion.value = `${arguments[0]}`;
    imssWorkerID.value = `${arguments[1]}`;
    imssWorkerPassword[0].value = `${arguments[2]}`;

    formButton.click();

    setTimeout(getImssWorkerData, 5000);

}

function getImssWorkerData() {
    let form = document.getElementById('ifrPaginaSecundaria');

    let chbFile = form.contentWindow.document.getElementById('rdoArchivo');
    let chbCard = form.contentWindow.document.getElementById('rdoTarjeton');

    chbFile.checked = true;
    chbCard.checked = true;

    let btnDownload = form.contentWindow.document.getElementById('btnAceptar');

    // btnDownload.click(); jqgh_jqGridTarjetones_Periodo

}

switch (pageState) {
    case 'loading':
        console.log('Loading...');
        break;
    case 'interactive':
        break;
    case 'complete':

        logIn(arguments);

        break;
}