import {useEffect, useState} from "react"
import {useRecoilState, useRecoilValue} from "recoil";
import {userData, tokenAtom, userId, imageDrop, petAtom} from "./atoms"

export function useUserData():any
{
  const [userDataValue, setUserData] = useRecoilState(userData);
  return [userDataValue, setUserData]
}

export function useUserId():any{
  const [id, setId] = useRecoilState(userId);
  return [id, setId]
}
export function useUserIdValue():any{
  return useRecoilValue(userId);
}


export function useToken():any
{
  const [token, setToken] = useRecoilState(tokenAtom);
  return [token, setToken]
}

export function useTokenValue():any{
  return useRecoilValue(tokenAtom);
}
export function useEmailValue():any{
  return useRecoilValue(userData);
}

export function useImage():any{
  const [image, setImage] = useRecoilState(imageDrop);
  return [image, setImage]
}

export function usePetData(): any{
  const [petData, setPetData] = useRecoilState(petAtom);
  return [petData, setPetData]
}