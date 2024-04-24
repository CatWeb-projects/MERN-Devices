import { baseUrl } from "./baseUrl"

export const checkImageUrl = (url: string) => {
  if (url.includes('https')) {
    return url
  } else {
    return `${baseUrl}${url}`
  }
}