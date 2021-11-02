//To use the Rest Api you have to change the Ip adress in the variable  
const Api='http://192.000.0.000:8080/api/vi/'

export const getFruits = async() =>{
    const res = await fetch(Api+"marker",{method: 'GET'})
    return  await res.json()
    
};

export const userRequest = async (request) =>{
    const res= await fetch(Api+"Users/login?email="+request.email+"&pass="+request.password,{method: 'GET',})
    return await res.json();
};

export const updateAFruit = async (fruit) =>{
    console.log(fruit)
    const res= await fetch(Api+"marker/fruit?kind="+fruit.kind,{method: 'PUT', 
    headers:{Accept: 'application/json','Content-Type': 'application/json'}, body: JSON.stringify(fruit)
    });
    return await res.json();
}

export const updateACity = async (cities,number) =>{
    console.log(cities)
    console.log(number)
    const res= await fetch(Api+"marker/admin?kind="+cities.kind+"&delivery_city="+cities.from+"&pickUpCity="+cities.to+"&mount="+number,
    {method: 'PUT'});
    return await res.json();
}