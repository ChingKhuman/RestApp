import ApiManager from "./Api";


var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");


var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  };
export const user_login = async data => {
    try {
        const result = await ApiManager('/account/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response
        
    }
}