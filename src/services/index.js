import { message } from 'antd';
export * from './Users';
export * from './CityAndCountry';
export * from './Booking';
export * from './Payment';


export const URL_PROPERTIES ="https://pppn.co.uk/3rdly/storage/app/files/properties/"; 
export const URL_PROPERTIES_LOGO ="https://pppn.co.uk/3rdly/storage/app/users/logo/"; 


export const ShowError = (err)=>{
    if(err.response.status === 422){
        let text = Object.values(err.response.data.errors);;
        text = text.join('\n');      
        message.error(text)
    }else{
        let text = 'Network error '+err.response.status ;
        message.error(text) 
    }
    
}