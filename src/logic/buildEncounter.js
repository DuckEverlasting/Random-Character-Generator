export default function (encounterLevel, numberEncounter, filteredByAlignment) {
  let temp=[]
  while(numberEncounter>1){
    let tempSmall=filteredByAlignment.filter(creature=>creature.challenge_rating<encounterLevel-numberEncounter+1)

    let pickedCreature=tempSmall[
      Math.floor(Math.random()*tempSmall.length+1)
    ]

    temp.push(pickedCreature)
    encounterLevel-=pickedCreature.challenge_rating
    numberEncounter--
  }
  if(numberEncounter===1){
    let tempSmall=filteredByAlignment.filter(crature=>crature.challenge_rating===encounterLevel)
    let pickedCreature=tempSmall[
      Math.floor(Math.random()*tempSmall.length+1)
    ]
    temp.push(pickedCreature)
    encounterLevel-=pickedCreature.challenge_rating
    numberEncounter--
  }

  return temp;
}