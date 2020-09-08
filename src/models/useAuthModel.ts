/*
 * @Author: wangyuan
 * @Date: 2020-08-25 15:35:11
 * @LastEditTime: 2020-08-25 15:35:24
 * @LastEditors: wangyuan
 * @Description:
 */
import { useState, useCallback } from 'react'
export default function useAuthModel() {
  const [user, setUser] = useState(null)
  const signin = useCallback((account, password) => {
    // signin implementation
    // setUser(user from signin API)
  }, [])
  const signout = useCallback(() => {
    // signout implementation
    // setUser(null)
  }, [])
  return {
    user,
    signin,
    signout
  }
}
