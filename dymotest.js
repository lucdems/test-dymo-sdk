let labelXml = '';

let printParamsXml = '<?xml version="1.0" encoding="utf-8"?>\n' +
    '<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">\n' +
    '\n' +
    '    <xs:simpleType name="FlowDirection">\n' +
    '        <xs:restriction base="xs:string">\n' +
    '            <xs:enumeration value="LeftToRight"/>\n' +
    '            <xs:enumeration value="RightToLeft"/>\n' +
    '        </xs:restriction>\n' +
    '    </xs:simpleType>\n' +
    '\n' +
    '    <xs:simpleType name="Copies">\n' +
    '        <xs:restriction base="xs:integer">\n' +
    '            <xs:minInclusive value="1"/>\n' +
    '        </xs:restriction>\n' +
    '    </xs:simpleType>\n' +
    '\n' +
    '    <xs:simpleType name="TwinTurboRoll">\n' +
    '        <xs:restriction base="xs:string">\n' +
    '            <xs:enumeration value="Auto"/>\n' +
    '            <xs:enumeration value="Left"/>\n' +
    '            <xs:enumeration value="Right"/>\n' +
    '        </xs:restriction>\n' +
    '    </xs:simpleType>\n' +
    '\n' +
    '    <xs:simpleType name="LabelWriterPrintQuality">\n' +
    '        <xs:restriction base="xs:string">\n' +
    '            <xs:enumeration value="Auto"/>\n' +
    '            <xs:enumeration value="Text"/>\n' +
    '            <xs:enumeration value="BarcodeAndGraphics"/>\n' +
    '        </xs:restriction>\n' +
    '    </xs:simpleType>\n' +
    '\n' +
    '    <xs:simpleType name="TapeAlignment">\n' +
    '        <xs:restriction base="xs:string">\n' +
    '            <xs:enumeration value="Center"/>\n' +
    '            <xs:enumeration value="Left"/>\n' +
    '            <xs:enumeration value="Right"/>\n' +
    '        </xs:restriction>\n' +
    '    </xs:simpleType>\n' +
    '\n' +
    '    <!--<xs:simpleType name="TapeCasetteColor">\n' +
    '        <xs:restriction base="xs:string">\n' +
    '            <xs:enumeration value="BlackOnWhite"/>\n' +
    '            <xs:enumeration value="BlackOnBlue"/>\n' +
    '            <xs:enumeration value="BlackOnRed"/>\n' +
    '            <xs:enumeration value="BlackOnSilver"/>\n' +
    '            <xs:enumeration value="BlackOnYellow"/>\n' +
    '            <xs:enumeration value="BlackOnGold"/>\n' +
    '            <xs:enumeration value="BlackOnGreen"/>\n' +
    '            <xs:enumeration value="BlackOnFluorescentGreen"/>\n' +
    '            <xs:enumeration value="BlackOnFluorescentRed"/>\n' +
    '            <xs:enumeration value="WhiteOnClear"/>\n' +
    '            <xs:enumeration value="WhiteOnBlack"/>\n' +
    '            <xs:enumeration value="BlueOnWhite"/>\n' +
    '            <xs:enumeration value="RedOnWhite"/>\n' +
    '        </xs:restriction>\n' +
    '    </xs:simpleType>-->\n' +
    '\n' +
    '    <xs:simpleType name="TapeCutMode">\n' +
    '        <xs:restriction base="xs:string">\n' +
    '            <xs:enumeration value="AutoCut"/>\n' +
    '            <xs:enumeration value="ChainMarks"/>\n' +
    '        </xs:restriction>\n' +
    '    </xs:simpleType>\n' +
    '\n' +
    '    <xs:complexType name="PrintParams">\n' +
    '        <xs:sequence>\n' +
    '            <xs:element name="Copies" type="Copies" minOccurs="0" maxOccurs="1"/>\n' +
    '            <xs:element name="JobTitle" type="xs:string" minOccurs="0" maxOccurs="1"/>\n' +
    '            <xs:element name="FlowDirection" type="FlowDirection" minOccurs="0" maxOccurs="1"/>\n' +
    '        </xs:sequence>\n' +
    '    </xs:complexType>\n' +
    '\n' +
    '    <xs:complexType name="LabelWriterPrintParams">\n' +
    '        <xs:complexContent>\n' +
    '            <xs:extension base="PrintParams">\n' +
    '                <xs:sequence>\n' +
    '                    <xs:element name="PrintQuality" type="LabelWriterPrintQuality" minOccurs="0" maxOccurs="1"/>\n' +
    '                    <xs:element name="TwinTurboRoll" type="TwinTurboRoll" minOccurs="0" maxOccurs="1"/>\n' +
    '                </xs:sequence>\n' +
    '            </xs:extension>\n' +
    '        </xs:complexContent>\n' +
    '    </xs:complexType>\n' +
    '\n' +
    '    <xs:complexType name="TapePrintParams">\n' +
    '        <xs:complexContent>\n' +
    '            <xs:extension base="PrintParams">\n' +
    '                <xs:sequence>\n' +
    '                    <xs:element name="Alignment" type="TapeAlignment" minOccurs="0" maxOccurs="1"/>\n' +
    '                    <xs:element name="CutMode" type="TapeCutMode" minOccurs="0" maxOccurs="1"/>\n' +
    '                    <!--<xs:element name="CasetteColor" type="TapeCasetteColor" minOccurs="0" maxOccurs="1"/>-->\n' +
    '                </xs:sequence>\n' +
    '            </xs:extension>\n' +
    '        </xs:complexContent>\n' +
    '    </xs:complexType>\n' +
    '\n' +
    '    <xs:element name="LabelWriterPrintParams" type="LabelWriterPrintParams"/>\n' +
    '    <xs:element name="TapePrintParams" type="TapePrintParams"/>\n' +
    '\n' +
    '\n' +
    '</xs:schema>';

let labelSetXml = '<?xml version="1.0" encoding="utf-8"?>\n' +
    '<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">\n' +
    '    <!-- Enums -->\n' +
    '    <xs:simpleType name="Bool">\n' +
    '        <xs:restriction base="xs:string">\n' +
    '            <xs:enumeration value="False"/>\n' +
    '            <xs:enumeration value="True"/>\n' +
    '        </xs:restriction>\n' +
    '    </xs:simpleType>\n' +
    '    <xs:complexType name="StyledTextAttributes">\n' +
    '        <xs:sequence>\n' +
    '            <xs:element name="Font" type="FontInfo"/>\n' +
    '            <xs:element name="ForeColor" type="Color"/>\n' +
    '        </xs:sequence>\n' +
    '    </xs:complexType>\n' +
    '    <xs:complexType name="StyledTextElement">\n' +
    '        <xs:sequence>\n' +
    '            <xs:element name="String" type="xs:string"/>\n' +
    '            <xs:element name="Attributes" type="StyledTextAttributes"/>\n' +
    '        </xs:sequence>\n' +
    '    </xs:complexType>\n' +
    '    <xs:complexType name="StyledText">\n' +
    '        <xs:sequence>\n' +
    '            <xs:element name="Element" type="StyledTextElement" minOccurs="0" maxOccurs="unbounded"/>\n' +
    '        </xs:sequence>\n' +
    '    </xs:complexType>\n' +
    '    <xs:group id="MarkupGroup" name="MarkupGroup">\n' +
    '        <xs:choice>\n' +
    '            <xs:element name="font" type="MarkupFont" minOccurs="0" />\n' +
    '            <xs:element name="i" type="MarkupItalic" minOccurs="0" />\n' +
    '            <xs:element name="b" type="MarkupBold" minOccurs="0" />\n' +
    '            <xs:element name="u" type="MarkupUnderline" minOccurs="0" />\n' +
    '            <xs:element name="s" type="MarkupStrikeout" minOccurs="0" />\n' +
    '            <xs:element name="br" type="MarkupLineBreak" minOccurs="0" />\n' +
    '        </xs:choice>\n' +
    '    </xs:group>\n' +
    '    <xs:complexType name="TextMarkup" mixed="true">\n' +
    '        <xs:group ref="MarkupGroup" minOccurs="0" maxOccurs="unbounded"/>\n' +
    '    </xs:complexType>\n' +
    '    <xs:complexType name="MarkupFont" mixed="true">\n' +
    '        <xs:group ref="MarkupGroup" minOccurs="0" maxOccurs="unbounded"/>\n' +
    '        <xs:attribute name="family" type="xs:string" use="optional"/>\n' +
    '        <xs:attribute name="size" type="xs:float" use="optional"/>\n' +
    '        <xs:attribute name="color" type="ColorString" use="optional"/>\n' +
    '    </xs:complexType>\n' +
    '    <xs:complexType name="MarkupItalic" mixed="true">\n' +
    '        <xs:group ref="MarkupGroup"  minOccurs="0" maxOccurs="unbounded"/>\n' +
    '    </xs:complexType>\n' +
    '    <xs:complexType name="MarkupBold" mixed="true">\n' +
    '        <xs:group ref="MarkupGroup"  minOccurs="0" maxOccurs="unbounded"/>\n' +
    '    </xs:complexType>\n' +
    '    <xs:complexType name="MarkupUnderline" mixed="true">\n' +
    '        <xs:group ref="MarkupGroup"  minOccurs="0" maxOccurs="unbounded"/>\n' +
    '    </xs:complexType>\n' +
    '    <xs:complexType name="MarkupStrikeout" mixed="true">\n' +
    '        <xs:group ref="MarkupGroup" minOccurs="0" maxOccurs="unbounded"/>\n' +
    '    </xs:complexType>\n' +
    '    <xs:complexType name="MarkupLineBreak">\n' +
    '    </xs:complexType>\n' +
    '    <xs:complexType name="FontInfo">\n' +
    '        <xs:attribute name="Family" type="xs:string" use="required"/>\n' +
    '        <xs:attribute name="Size" type="xs:float" use="required"/>\n' +
    '        <xs:attribute name="Bold" type="Bool" use="required"/>\n' +
    '        <xs:attribute name="Italic" type="Bool" use="required"/>\n' +
    '        <xs:attribute name="Underline" type="Bool" use="required"/>\n' +
    '        <xs:attribute name="Strikeout" type="Bool" use="required"/>\n' +
    '    </xs:complexType>\n' +
    '    <xs:complexType name="Color">\n' +
    '        <xs:attribute name="Alpha" type="xs:unsignedByte" use="required"/>\n' +
    '        <xs:attribute name="Red" type="xs:unsignedByte" use="required"/>\n' +
    '        <xs:attribute name="Green" type="xs:unsignedByte" use="required"/>\n' +
    '        <xs:attribute name="Blue" type="xs:unsignedByte" use="required"/>\n' +
    '    </xs:complexType>\n' +
    '    <!-- Misc -->\n' +
    '    <xs:simpleType name="NotEmptyString">\n' +
    '        <xs:restriction base="xs:string">\n' +
    '            <xs:minLength value="1"/>\n' +
    '        </xs:restriction>\n' +
    '    </xs:simpleType>\n' +
    '    <xs:simpleType name="ColorString">\n' +
    '        <xs:restriction base="xs:string">\n' +
    '            <xs:length value="8"/>\n' +
    '        </xs:restriction>\n' +
    '    </xs:simpleType>\n' +
    '    <xs:complexType name="LabelSet">\n' +
    '        <xs:sequence>\n' +
    '            <xs:element name="LabelRecord" type="LabelRecord" minOccurs="1" maxOccurs="unbounded"/>\n' +
    '        </xs:sequence>\n' +
    '    </xs:complexType>\n' +
    '    <xs:complexType name="LabelRecord">\n' +
    '        <xs:sequence>\n' +
    '            <xs:element name="ObjectData" type="ObjectData" minOccurs="1" maxOccurs="unbounded"/>\n' +
    '        </xs:sequence>\n' +
    '    </xs:complexType>\n' +
    '    <xs:complexType name="ObjectData" mixed="true">\n' +
    '        <xs:choice minOccurs="0" maxOccurs="1">\n' +
    '            <xs:element name="StyledText" type="StyledText"/>\n' +
    '            <xs:element name="TextMarkup" type="TextMarkup"/>\n' +
    '        </xs:choice>\n' +
    '        <xs:attribute name="Name" type="NotEmptyString" use="required" />\n' +
    '    </xs:complexType>\n' +
    '    <!-- Elements -->\n' +
    '    <xs:element name="LabelSet" type="LabelSet"/>\n' +
    '</xs:schema>';

function init(){
    console.log(dymo.label.framework.init());
}

function check(){
    console.log(dymo.label.framework.checkEnvironment());
}

function getImprimantes(){
    console.log(dymo.label.framework.getPrinters());
}

function print(){
    let printers = dymo.label.framework.getPrinters();
    let printerName = printers[0].name;

    generateXML();
    dymo.label.framework.printLabel(printerName, printParamsXml, labelXml, labelSetXml);
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
    console.log(label);

    console.log('generating preview');
    let preview = dymo.label.framework.renderLabel(label);

    let image = document.getElementById('labelpic');

    image.src = 'data:image/png;base64,' + preview;

    console.log('preview générée');
    console.log({preview});
}

