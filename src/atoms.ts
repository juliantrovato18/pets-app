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

  export const imageDrop = atom({
    key: 'imageDrop', // unique ID (with respect to other atoms/selectors)
    default: null // default value (aka initial value)
    
  });
  

  export const petAtom = atom({
    key: 'petAtom', // unique ID (with respect to other atoms/selectors)
    default: {petname:"", place:"", lat:0, lng:0, petImage:""}, // default value (aka initial value)
    
  });