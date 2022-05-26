import { atom } from "recoil";


export const tokenAtom = atom({
    key: 'token', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });


 export const userData = atom({
    key: 'userData', // unique ID (with respect to other atoms/selectors)
    default: {userEmail: ''}  // default value (aka initial value)
    
  });


  export const userId = atom({
    key: 'userId', // unique ID (with respect to other atoms/selectors)
    default: {userId: ''}  // default value (aka initial value)
    
  });
  

  export const petAtom = atom({
    key: 'petAtom', // unique ID (with respect to other atoms/selectors)
    default: {petName:"", petUbi:"", lat:0, lng:0, image:""}, // default value (aka initial value)
    
  });