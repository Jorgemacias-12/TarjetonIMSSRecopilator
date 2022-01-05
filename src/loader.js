var pageState = document.readyState;

let form = document.getElementById('ifrPaginaSecundaria');

const IMSS_WORKER_ID = arguments[1];
const IMSS_WORKER_DDL = arguments[0];
const IMSS_WORKER_PS = arguments[2];
const IS_FIRST_RUN = arguments[3];

function logIn() {

    let ddlDelegacion = form.contentWindow.document.getElementById('ddlDelegacion');
    let imssWorkerID = form.contentWindow.document.getElementById('txtUsuario');
    let imssWorkerPassword = form.contentWindow.document.querySelectorAll('input[type=password]');

    let formButton = form.contentWindow.document.getElementById('btnIngresar');

    ddlDelegacion.value = `${IMSS_WORKER_DDL}`;
    imssWorkerID.value = `${IMSS_WORKER_ID}`;
    imssWorkerPassword[0].value = `${IMSS_WORKER_PS}`;

    formButton.click();

    setTimeout(getImssWorkerData, 5000);

}

function navigate() {
    // go to the beginning of the data last_jqPagTarjetones
    
    setTimeout( () => {

        if (IS_FIRST_RUN) {

        }

    }, 1000);

    // validate if the content is dowbnladded and go to another page using prev_jqPagTarjetones

    setTimeout(() => {
        let selectEIV = form.contentWindow.document.querySelector('select');

        selectEIV.options[1].selected = true;

    }, 1000);

}

function getImssWorkerData() {

    let chbFile = form.contentWindow.document.getElementById('rdoArchivo');
    let chbCard = form.contentWindow.document.getElementById('rdoXML');

    chbFile.checked = true;
    chbCard.checked = true;

    let btnDownload = form.contentWindow.document.getElementById('btnAceptar');

    let cardsAvailable = form.contentWindow.document.getElementsByTagName('tr');

    navigate();

    // for (let card of cardsAvailable) {
    //     setTimeout(()=> {},1000);
    //     if (card.id != null && card.id != '') {
    //         card.click();
    //         btnDownload.click();
    //     }
    // }

    // btnDownload.click(); jqgh_jqGridTarjetones_Periodo

}

switch (pageState) {
    case 'complete':
        logIn();
        break;
}