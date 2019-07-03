export default function (encounterLevel, numberEncounter, filteredByAlignment) {
  numberEncounter=Number(numberEncounter)
  encounterLevel=Number(encounterLevel)
  if(filteredByAlignment.length<1){
    return []
  }
  let temp=[]
  while(numberEncounter>1){
    let modifier=encounterLevel-numberEncounter+1
    
    if(modifier<1)
      modifier=1

    let tempSmall=filteredByAlignment.filter(creature=>{
      let semiTemp=creature.challenge_rating
      if(isNaN(semiTemp)){
        semiTemp=Number(semiTemp[0])/Number(semiTemp[2])
      }else{
        semiTemp=Number(semiTemp)
      }
      return semiTemp<modifier
    })

    if(tempSmall.length<1){
      tempSmall=filteredByAlignment.filter(creature=>isNaN(creature.challenge_rating) || creature.challenge_rating===1)
    }

    let pickedCreature=tempSmall[
      Math.floor(Math.random()*tempSmall.length)
    ]

    temp.push(pickedCreature)

    if(isNaN(pickedCreature.challenge_rating))
      encounterLevel-=Number(pickedCreature.challenge_rating[0])/Number(pickedCreature.challenge_rating[2])
    else
      encounterLevel-=pickedCreature.challenge_rating

    numberEncounter--
  }
  if(numberEncounter===1){
    let tempSmall=filteredByAlignment.filter(creature=>{
      encounterLevel=Math.ceil(encounterLevel)
      if(isNaN(creature.challenge_rating))
        return encounterLevel === 1
      else
        return Number(creature.challenge_rating) === encounterLevel
    })

    if(tempSmall.length<1){
      tempSmall=filteredByAlignment.filter(creature=>isNaN(creature.challenge_rating) || creature.challenge_rating===1)
    }
    let pickedCreature=tempSmall[
      Math.floor(Math.random()*tempSmall.length)
    ]

    temp.push(pickedCreature)
    // encounterLevel-=pickedCreature.challenge_rating
    numberEncounter--
  }

  return temp;
}