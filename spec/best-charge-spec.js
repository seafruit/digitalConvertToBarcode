describe('Take out food', function () {

  it ('checkDigitalFormat',function(){
    let input = '12345';
    let result = checkDigitalFormat(input);
    let expectItem ={digital:'12345',type: true};
    expect(result).toEqual(expectItem);
  });
  it ('checkDigitalFormat',function(){
    let input = '123456789';
    let result = checkDigitalFormat(input);
    let expectItem ={digital:'123456789',type: true};
    expect(result).toEqual(expectItem);
  });
  it ('checkDigitalFormat',function(){
    let input = '12345-6789';
    let result = checkDigitalFormat(input);
    let expectItem ={digital:'12345-6789',type: true};
    expect(result).toEqual(expectItem);
  });
  it ('checkDigitalFormat',function(){
    let input = 'shdui2839-23';
    let result = checkDigitalFormat(input);
    let expectItem ={digital:'shdui2839-23',type: false};
    expect(result).toEqual(expectItem);
  });

  it('dropHypken',function(){
    let input = '12345-6789';
    let result = dropHypken(input);
    let expectItem = '123456789';
    expect(result).toEqual(expectItem);
  });
  it('digtialIntoArray',function(){
    let input = '123456789';
    let result = digtialIntoArray(input);
    let expectItem = [1,2,3,4,5,6,7,8,9];
    expect(result).toEqual(expectItem);
  });
  it('calculateCheckCode',function(){
    let input = [1,2,3,4,5];
    let result = calculateCheckCode(input);
    let expectItem = [1,2,3,4,5,5];
    expect(result).toEqual(expectItem);
  });
  it('matchBarcode',function(){
    let input = [1,2,3,4,5,5];
    let allItems=loadAllItems();
    let result = matchBarcode(input,allItems);
    let expectItem = [':::||','::|:|','::||:',':|::|',':|:|:',':|:|:'];
    expect(result).toEqual(expectItem);
  });
  it('addStartAndEnd',function(){
    let input = [':::||','::|:|','::||:',':|::|',':|:|:',':|:|:'];
    let result = addStartAndEnd(input);
    let expectItem = '|:::||::|:|::||::|::|:|:|::|:|:|';
    expect(result).toEqual(expectItem);
  });

  it('digitalConversionToBarcode',function(){
    let input = '12345';
    let result = digitalToBarcode(input);
    let expectItem ='|:::||::|:|::||::|::|:|:|::|:|:|';
    expect(result).toEqual(expectItem);
  });

  it('checkBarcodeFormat',function(){
    let input = '|:::||::|:|::||::|::|:|:|::|:|:|';
    let result = checkBarcodeFormat(input);
    let expectItem ={barcode:'|:::||::|:|::||::|::|:|:|::|:|:|',type:true};
    expect(result).toEqual(expectItem);
  });
  it('checkBarcodeFormat',function(){
    let input = '|:::||::|:|::||::|::|:|:|';
    let result = checkBarcodeFormat(input);
    let expectItem ={barcode:'|:::||::|:|::||::|::|:|:|',type:false};
    expect(result).toEqual(expectItem);
  });
  it('checkBarcodeFormat',function(){
    let input = '|:::||::|:|::||::|::|:|:|sdfsdgthggfewrtukiggfb';
    let result = checkBarcodeFormat(input);
    let expectItem ={barcode:'|:::||::|:|::||::|::|:|:|sdfsdgthggfewrtukiggfb',type:false};
    expect(result).toEqual(expectItem);
  });

  it('formattedBarcode',function(){
    let input = '|:::||::|:|::||::|::|:|:|::|:|:|';
    let result = formattedBarcode(input);
    let expectItem =':::||::|:|::||::|::|:|:|::|:|:';
    expect(result).toEqual(expectItem);
  });

   it('barcodeIntoArrar',function(){
     let input = ':::||::|:|::||::|::|:|:|::|:|:';
     let result = barcodeIntoArrar(input);
     let expectItem =[':::||','::|:|','::||:',':|::|',':|:|:',':|:|:'];
     expect(result).toEqual(expectItem);
   });

  it('matchDigital',function(){
    let allItems=loadAllItems();
    let input = [':::||','::|:|','::||:',':|::|',':|:|:',':|:|:'];
    let result = matchDigital(input,allItems);
    let expectItem =[1,2,3,4,5,5];
    expect(result).toEqual(expectItem);
  });

  it('isTrueCheckCode',function(){
    let input = [1,2,3,4,5,5];
    let result = isTrueCheckCode(input);
    let expectItem =true;
    expect(result).toEqual(expectItem);
  });

  it('addHypken',function(){
    let input =[1,2,3,4,5,6,7,8,9];
    let result=addHypken(input);
    let expectItem='12345-6789';
    expect(result).toEqual(expectItem);
  });

  it('tanslateBarcode',function(){
    let input='|:::||::|:|::||::|::|:|:|::|:|:|';
    let result=tanslateBarcode(input);
    let expectItem='123455';
    expect(result).toEqual(expectItem);
  });
  it('tanslateBarcode',function(){
    let input='|:::||::|:|::||::|::|:|:sddcws';
    let result=tanslateBarcode(input);
    let expectItem=false;
    expect(result).toEqual(expectItem);
  });













});
