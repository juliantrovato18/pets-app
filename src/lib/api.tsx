 const API_BASE_URL = "https://desafio-7.herokuapp.com";
 //const API_BASE_URL = "http://localhost:3003";

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
export async function myReportedPets(token){
    return await (
        await fetch(API_BASE_URL+"/mypets", {
          method: "GET",
          headers: {
            Authorization: `bearer ${token}`,
          },
        })
      ).json();
    }


//actualiza los datos de un usuario ya existente
export async function updateUserData({token, name, password}){
    const newUser = await fetch(API_BASE_URL+"/update",{
        method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`bearer ${token}`
            },
            body:JSON.stringify({
                name,
                password
            })
    })
    const data = await newUser.json();
    return data;
}


//me
export async function me(token){
    const autrhoized = await fetch(API_BASE_URL+"/me",{
        method: "GET",
            headers:{
                "Authorization": `Bearer ${token}`
            }
    })
    return autrhoized
}

//reportar una mascota

export async function reportPet({token, petname, place, lat, lng, petImage}){
    try {
        const pet = await fetch(API_BASE_URL+"/pet",{
            method: "POST",
            headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                petname,
                place,
                lat,
                lng,
                petImage
            })
        })
        return pet;
    } catch (error) {
        console.log(error);
    }
}

//edita una mascota ya reportada
export async function editPet({token, id, petname, place, lat, lng, petImage}){
    try {
        const petEdited = await fetch(API_BASE_URL+"/pets/"+id,{
            method: "PATCH",
            headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                petname,
                place,
                lat,
                lng,
                petImage
            })
        })
        return petEdited;
    } catch (error) {
        console.log(error);
    }
}

//borra una mascota de la base de datos
export async function deletePet({token, id}){
    try {
        const deleteReport = await fetch(API_BASE_URL+"/delete-report/"+id,{
            method: "DELETE",
            headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        })
        return deleteReport;
    } catch (error) {
        console.log(error);
    }
}

//crea un reporte de que vieron a la mascota
export async function createReport({token, id, name, phone, text}){
    try {
        const report = await fetch(API_BASE_URL+"/report-founded/"+id,{
            method: "POST",
            headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                name,
                phone,
                text
            })
        })
        return report;
    } catch (error) {
        console.log(error);
    }
}
