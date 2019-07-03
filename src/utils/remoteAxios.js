export const baseURL='https://random-character-generator-be.herokuapp.com'
export const monstersFull=`${baseURL}/monsters`
export const byCr=cr=>`${monstersFull}/crMax/${cr}`
export const byId=id=>`${monstersFull}/id/${id}`
export const byName=name=>`${monstersFull}/name/${name}`

export const convertToJson=creature=>({...creature,
    terrain:creature.terrain.split(',').map(i=>i.trim())
})