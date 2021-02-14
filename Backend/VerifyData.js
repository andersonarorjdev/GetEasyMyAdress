const VerifyData = (field, WhatField) =>{
    if(field == undefined){
        switch (WhatField) {
            case 'CEP':
                return 'CEP não entrado!';
            
            case 'STREET':
                return 'Rua não encontrada!';
            
            case 'CITY':
                return 'Cidade não encontrada!';

            case 'COUNTRY':
                return 'País não encontrado!';
            
            case 'REGION':
                return 'Região não encontrada!';
            
            case 'MUNICIPALATY':
                return 'Região geofráfica não encontrada!';
            
            case 'DD':
                return 'DD não encontrado!';
        } 

    }else{
        switch (WhatField) {
            case 'CEP':
                return `Seu CEP é ${field}`;
            
            case 'STREET':
                return `Sua Rua é ${field}`;
            
            case 'CITY':
                return `Sua cidade é ${field}`;

            case 'COUNTRY':
                return `Seu país é ${field}`;
            
            case 'REGION':
                return `Sua Região é ${field}`;
            
            case 'MUNICIPALATY':
                return `Sua Região geográfica é ${field}`;
            
            case 'DD':
                return `Seu DD é ${field}`;
        } 
    }
}

export default VerifyData;