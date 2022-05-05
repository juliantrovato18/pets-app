import {useEffect, useState} from "react"
import {useRecoilState, useRecoilValue} from "recoil";
import { userId} from "atoms"
import { atom, selector } from "recoil";
import { useParams } from "react-router-dom";


export function useId(){
    const id = useRecoilValue(userId);
    return id;
} 

export const queryAtom = atom({
    key: 'query', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  })

  export const search = selector({
    key: 'queryValue', // unique ID (with respect to other atoms/selectors)
    get: async ({get}) =>{
      const queryAtomValue = get(queryAtom)
      if(queryAtomValue){
        const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + queryAtomValue);
      const data = await res.json();
        return data.results
      }else{
          return []
      }
      

      
    },
  })

  export function useSearchResults(){
      const params = useParams();
     const [value, setValue] = useRecoilState(queryAtom);
     const query = params.query;
     const results = useRecoilValue(search);
    console.log(value, "value");

    
    useEffect(() => {
        if(query){
            setValue(query)
        }
        
    }, [query]);
    return results;
  }