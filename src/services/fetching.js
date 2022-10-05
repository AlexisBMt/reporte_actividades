
export function getReportes(url){
  return fetch(url).then(res => res.json())
}