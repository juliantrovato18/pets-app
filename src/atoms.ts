import { atom, selector } from "recoil";

export const userNameAtom = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: 'julito', // default value (aka initial value)
  });

 export const userId = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: async ({get}) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await res.json();
  
      return data.id;
    },
  });

  