import VerifyData from './VerifyData.js';
import FilterState from './FilterStates.js';

window.RecuperaPosicao = _ =>{
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition, ErrorTakePosition);
          }
      else{x.innerHTML="O seu navegador não suporta Geolocalização.";}
      }

      const ErrorTakePosition = error =>{
          if(error.PERMISSION_DENIED){
            console.log('Recusou!');

            document.getElementById('LOADING').style.display = 'none';
            document.getElementById('AllowDIV').style.display = 'block';

          }
      }
   const showPosition  = async (position) =>{
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          
         axios({
              url:
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`       
            },document.getElementById('LOADING').style.display = 'flex')
            .then((response)  => {
                let state = response.data.address.state;
                let city;

                console.log(response);
                
                if(response.data.address.town == undefined){
                    city = response.data.address.city;   
                }
                else{
                    city = response.data.address.town;
                }
                
                let street = response.data.address.road;
                let Country = response.data.address.country;
                let Municipality = response.data.address.municipality;
                let region = response.data.address.region;

              
                

                
            
                 axios({
                        url: `https://viacep.com.br/ws/${FilterState(state)}/${city}/${street}/json`,})
                    .then((response) =>{
                        console.log(response);

                        let DD = response.data[0].ddd;
                        let cep = response.data[0].cep;


                        let LOADINGIF = document.getElementById('LOADING');

                        let CEPTAG = document.getElementById('CEP');
                        let STREETAG = document.getElementById('STREET');
                        let CITYTAG = document.getElementById('CITY');
                        let COUNTRYTAG = document.getElementById('Country');
                        let REGIONTAG = document.getElementById('Region');
                        let COUNTRYREGIONTAG = document.getElementById('CountryRegion');
                        let DDTAG = document.getElementById('DD');
                        let Fields = document.getElementsByClassName('Fields');

                        let ButtonsCopy = document.querySelectorAll('.CopyButton');

                        for(let i = 0; i < ButtonsCopy.length; i++){
                            
                            LOADINGIF.style.display = 'none';

                            Fields[i].style.display = 'flex';
                            ButtonsCopy[i].style.display = 'block';
    
                            CEPTAG.value = VerifyData(cep, 'CEP');
                            STREETAG.value = VerifyData(street, 'STREET');
                            CITYTAG.value = VerifyData(city, 'CITY');
                            COUNTRYTAG.value = VerifyData(Country, 'COUNTRY');
                            REGIONTAG.value = VerifyData(region, 'REGION');
                            COUNTRYREGIONTAG.value = VerifyData(Municipality, 'MUNICIPALATY');
                            DDTAG.value = VerifyData(DD, 'DD');
                        }


                    })
                    
                    
                })
                
  }
  