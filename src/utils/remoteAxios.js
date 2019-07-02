export const baseURL='https://random-character-generator-be.herokuapp.com'
export const monstersFull=`${baseURL}/monsters`
export const filter=`${monstersFull}/filter`
export const byId=id=>`${monstersFull}/id/${id}`
export const byName=name=>`${monstersFull}/name/${name}`

export const convertToJson=creature=>({...creature,
    speed:JSON.parse(creature.speed),
    actions:JSON.parse(creature.actions),
    reactions:JSON.parse(creature.reactions),
    legendary_actions:JSON.parse(creature.legendary_actions),
    special_abilities:JSON.parse(creature.special_abilities),
    terrain:creature.terrain.split(',').map(i=>i.trim)
})