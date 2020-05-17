import axios from 'util/Api';
import {message} from 'antd';


function citiesAndCountries (){
  return axios.get(`cities-and-countries/index`)
    .then(res => res.data)
    
}

function citiesSearch (body){
  return axios.get(`cities-and-countries/search-city?country_code=uk&title=${body.name}`)
    .then(res => res.data)
    
}
function locationSearch (body){
  return axios.get(`cities-and-countries/search-location?title=${body}`)
    .then(res => res.data)
    
}

function postalCodeSearch (body){
  return axios.get(`cities-and-countries/search-postal-code?title=${body.name}`)
    .then(res => res.data)
    
}


export { citiesAndCountries, citiesSearch, locationSearch,postalCodeSearch }