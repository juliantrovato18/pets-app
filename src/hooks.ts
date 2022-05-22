import {useEffect, useState} from "react"
import {useRecoilState, useRecoilValue} from "recoil";
import {userData, tokenAtom} from "./atoms"

export function useUserData():any
{
  const [userDataValue, setUserData] = useRecoilState(userData);
  return [userDataValue, setUserData]
}



export function useToken():any
{
  const [token, setToken] = useRecoilState(tokenAtom);
  return [token, setToken]
}