import { CODES } from '../constant/code-numbers'

export const transformCountryCode = (countryCode): any => {
  const code = CODES.find(code => code.phoneCode === countryCode)
  return code?.countryCode
}

export const flatArray = (arr: any) => [].concat(...arr)
