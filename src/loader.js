var pageState = document.readyState;

let form = document.getElementById('ifrPaginaSecundaria');

const IMSS_WORKER_ID = arguments[1];
const IMSS_WORKER_DDL = arguments[0];
const IMSS_WORKER_PS = arguments[2];
const IS_FIRST_RUN = arguments[3];

let N_PAGES_OF_TARJETONES;

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

    let nPagesParent = form.contentWindow.document.getElementById('input_jqPagTarjetones').innerText;

    N_PAGES_OF_TARJETONES = parseInt(nPagesParent.replace(/\D/g, ""));

    // go to the beginning of the data last_jqPagTarjetones if env flag is true

    // prev_jqPagTarjetones



    if (IS_FIRST_RUN == 'true') {

        let lastPageBtnRef = form.contentWindow.document.getElementById('last_jqPagTarjetones');
        lastPageBtnRef.click();

        // let tableRef = document.getElementById('jqGridTarjetones');

        let rowCardRefs = form.contentWindow.document.getElementsByTagName('tr')

        for (let card of rowCardRefs) {
            if (card.id != null && card.id != '') {
                console.log(card);
            }
        }

        // console.log(rowCardRefs);


    }




}

function getImssWorkerData() {

    form.contentWindow.document.querySelector('input').value;
    console.log(N_PAGES_OF_TARJETONES);

    let chbFile = form.contentWindow.document.getElementById('rdoArchivo');
    let chbCard = form.contentWindow.document.getElementById('rdoXML');

    chbFile.checked = true;
    chbCard.checked = true;

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