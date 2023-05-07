export interface LoginParams {
  username: string
  password: string
  type?: 'account'
}

export interface LoginMobileParams {
  mobile: string
  code: string
  type: 'mobile'
}

export interface LoginResultModel {
  token: string
}

export const loginApi = (params: LoginParams | LoginMobileParams) => {
  return usePost<LoginParams | LoginMobileParams, LoginResultModel>('/login', params)
}

export const logoutApi = () => {
  return useGet('/logout')
}
