const FilterState = state =>{
    let StateSymbol;
    switch (state) {
        case 'Acre':
            StateSymbol = 'AC';
            return StateSymbol;
    
        case 'Alagoas':
            StateSymbol = 'AL';
            return StateSymbol;
    
        case 'Amapá':
            StateSymbol = 'AP';
            return StateSymbol;
    
        case 'Amazonas':
            StateSymbol = 'AM';
            return StateSymbol;
    
        case 'Bahia':
            StateSymbol = 'BA';
            return StateSymbol;
    
        case 'Ceará':
            StateSymbol = 'CE';
            return StateSymbol;
    
        case 'Distrito Federal':
            StateSymbol = 'DF';
            return StateSymbol;
    
        case 'Espírito Santo':
            StateSymbol = 'ES';
            return StateSymbol;
    
        case 'Goiás':
            StateSymbol = 'GO';
            return StateSymbol;
    
        case 'Maranhão':
            StateSymbol = 'MA';
            return StateSymbol;
    
        case 'Mato Grosso':
            StateSymbol = 'MT';
            return StateSymbol;
    
        case 'Mato Grosso do Sul':
            StateSymbol = 'MS';
            return StateSymbol;
    
        case 'Minas Gerais':
            StateSymbol = 'MG';
            return StateSymbol;
    
        case 'Pará':
            StateSymbol = 'PA';
            return StateSymbol;
    
        case 'Paraíba':
            StateSymbol = 'PB';
            return StateSymbol;
    
        case 'Paraná':
            StateSymbol = 'PR';
            return StateSymbol;
    
        case 'Pernambuco':
            StateSymbol = 'PE';
            return StateSymbol;
    
        case 'Piauí':
            StateSymbol = 'PI';
            return StateSymbol;
    
        case 'Rio de Janiero':
            StateSymbol = 'RJ';
            return StateSymbol;
    
        case 'Rio Grande do Norte':
            StateSymbol = 'RN';
            return StateSymbol;
    
        case 'Rio Grande do Sul':
            StateSymbol = 'RS';
            return StateSymbol;
    
        case 'Rondônia':
            StateSymbol = 'RO';
            return StateSymbol;
    
        case 'Roraima':
            StateSymbol = 'RR';
            return StateSymbol;
    
        case 'Santa Catarina':
            StateSymbol = 'SC';
            return StateSymbol;
    
        case 'São Paulo':
            StateSymbol = 'SP';
            return StateSymbol;

    
        case 'Sergipe':
            StateSymbol = 'SE';
            return StateSymbol;
    
        case 'Tocantins':
            StateSymbol = 'TO';
            return StateSymbol;

        default:
            console.log('Erro')
            break;
    }

}

export default FilterState;