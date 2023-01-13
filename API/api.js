const apiEndPoint = 'https://jsonplaceholder.typicode.com/users';



async function fetchApi() {
    try {
        const response = await fetch(apiEndPoint);
        const data = await response.json();
        let items = [];

        if(Array.isArray(data)){
          data.forEach(item => {
            items.push(item);
          });
        } else if(typeof data === 'object' && data !== null) { 
          Object.values(data).forEach(item => { 
            // * Object.values(data) is a method to iterate or loop through the data... But for DATA only KEYS are not included
            items.push(item);
          });
            
        }else {
            console.log("There's something wrong with the API");
        }   
        console.log(items);

    } catch (error) {
        console.error('Error:', error);
        }
    
}


fetchApi();
