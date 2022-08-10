let labelXml = '';

function init(){
    console.log(dymo.label.framework.init());
}

function check(){
    console.log(dymo.label.framework.checkEnvironment());
}

function getImprimantes(){
    let selectElement = document.getElementById('selected_printer');
    selectElement.innerHTML = '';

    let printers = dymo.label.framework.getPrinters();

    console.log({printers});

    printers.forEach(printer => {
       let option = document.createElement('option');
       option.value = printer.name;
       option.appendChild(document.createTextNode(printer.name));

       selectElement.appendChild(option);
    });

}

function print(emptyLabelSet = false){
    let printerName = document.getElementById('selected_printer').value;
    console.log({printerName});

    generateXML();

    if(emptyLabelSet){
        dymo.label.framework.printLabel(printerName, basicPrintParamsXML, labelXml);
    } else {
        dymo.label.framework.printLabel(printerName, basicPrintParamsXML, labelXml, basicLabelSetXml);
    }
}

function printFromLabel(){
    generateXML();
    let label = dymo.label.framework.openLabelXml(labelXml);
    console.log({label});

    let printerName = document.getElementById('selected_printer').value;
    label.print(printerName);

}

function generateXML(){
    let nom = document.getElementById('name').value;
    let address_1 = document.getElementById('address_1').value;
    let address_2 = document.getElementById('address_2').value;

    labelXml = `<?xml version="1.0" encoding="utf-8"?>\
    <DieCutLabel Version="8.0" Units="twips">\
        <PaperOrientation>Landscape</PaperOrientation>\
        <Id>Address</Id>\
        <PaperName>30252 Address</PaperName>\
        <DrawCommands>\
            <RoundRectangle X="0" Y="0" Width="1581" Height="5040" Rx="270" Ry="270" />\
        </DrawCommands>\
        <ObjectInfo>\
            <AddressObject>\
                <Name>Address</Name>\
                <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                <LinkedObjectName></LinkedObjectName>\
                <Rotation>Rotation0</Rotation>\
                <IsMirrored>False</IsMirrored>\
                <IsVariable>True</IsVariable>\
                <HorizontalAlignment>Left</HorizontalAlignment>\
                <VerticalAlignment>Middle</VerticalAlignment>\
                <TextFitMode>ShrinkToFit</TextFitMode>\
                <UseFullFontHeight>True</UseFullFontHeight>\
                <Verticalized>False</Verticalized>\
                <StyledText>\
                    <Element>\
                        <String>${nom}\n${address_1}\n${address_2}</String>\
                        <Attributes>\
                            <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                            <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                        </Attributes>\
                    </Element>\
                </StyledText>\
                <ShowBarcodeFor9DigitZipOnly>False</ShowBarcodeFor9DigitZipOnly>\
                <BarcodePosition>AboveAddress</BarcodePosition>\
                <LineFonts>\
                    <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                    <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                    <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                </LineFonts>\
            </AddressObject>\
            <Bounds X="332" Y="150" Width="4455" Height="1260" />\
        </ObjectInfo>\
    </DieCutLabel>`;
}

function generatePreview(){
    generateXML();
    let label = dymo.label.framework.openLabelXml(labelXml);
    console.log({label});

    console.log('generating preview');
    let preview = dymo.label.framework.renderLabel(label);

    let image = document.getElementById('labelpic');

    image.src = 'data:image/png;base64,' + preview;

    console.log('preview générée');
    console.log({preview});
}

let basicPrintParamsXML = '<?xml version="1.0" encoding="utf-8"?>\n' +
    '<LabelWriterPrintParams>\n' +
    '  <Copies>1</Copies>\n' +
    '  <JobTitle>str1234</JobTitle>\n' +
    '  <FlowDirection>LeftToRight</FlowDirection>\n' +
    '  <PrintQuality>Auto</PrintQuality>\n' +
    '  <TwinTurboRoll>Auto</TwinTurboRoll>\n' +
    '</LabelWriterPrintParams>';

let basicLabelSetXml = '<?xml version="1.0" encoding="utf-8"?>\n' +
    '<LabelSet>\n' +
    '  <LabelRecord>\n' +
    '    <ObjectData Name="str1234" />\n' +
    '  </LabelRecord>\n' +
    '</LabelSet>';