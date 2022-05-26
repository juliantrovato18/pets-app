//const API_BASE_URL = "https://desafio-7.herokuapp.com";
 const API_BASE_URL = "http://localhost:3003";

//Crea el auth, signup
export async function createUser(name:string, email:any, password:string){
    const userData = {name, email, password}
    const user = await fetch(API_BASE_URL + "/auth",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
        
    })
    return user
}

//esto seria el signin
export async function signIn(email:string, password:string){
    const data = {email, password}
    const auth = await fetch(API_BASE_URL + "/auth/token",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return auth
}
//se fija que el mail exista en la base de datos.
export async function verifyMail(email:any){

    try {
        const exist = await fetch(API_BASE_URL+"/mail",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email})
        })
        console.log(exist);
        return exist
    } catch (error) {
        console.log(error)
    }
}

//pets around
export async function getPetsAround(lat:number, lng:number){
    const pets = await fetch(API_BASE_URL+"/mascotas-cerca?lat=" +lat +"&lng="+lng,{
        method:"GET"
    })
    return pets
}

//my reported pets
export async function myReportedPets(userId, token){
    try {
        const pets = await fetch(API_BASE_URL+"/mypets/"+userId,{
            method: "GET",
            headers:{
                "Authorization": `bearer ${token}`
            }
        })
        return pets
    } catch (error) {
        console.log(error);
    }
}

