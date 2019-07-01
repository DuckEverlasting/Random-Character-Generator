import React from 'react'
import {useSelector} from 'react-redux'
import {FaShieldAlt} from 'react-icons/fa'
import dummy from '../utils/dummyData'
import {AC, Important,Special, Bottom,MonsterView} from '../styles/MonsterViewer'
import { IconContext } from 'react-icons';
import SectionView from './SectionView'

function MonsterViewer() {

    //const monster=useSelector(state=>state.selected)
    const monster = dummy;

    if(monster){
        return (
            <MonsterView>
                <h2>Name: <span>{monster.name}</span></h2>
                <Important>
                    <IconContext.Provider value={{size:"7rem"}}>
                        <AC>
                            <FaShieldAlt/><span>{monster.armor_class}</span>
                        </AC>
                    </IconContext.Provider>
                    <section>
                        <h4>Damage Immunities</h4>
                        <p>
                            {monster.damage_immunities===""?"None":monster.damage_immunities}
                        </p>
                        <h4>Damage Resistances</h4>
                        <p>
                            {monster.damage_resistances===""?"None":monster.damage_resistances}
                        </p>
                        <h4>Damage Vulnerabilities</h4>
                        <p>
                            {monster.damage_vulnerabilities===""?"None":monster.damage_vulnerabilities}
                        </p>
                    </section>
                    <section>
                        <h4>HP</h4>
                        <pre>
                            Normal :{monster.hit_points}<br/>
                            Dice   :{monster.hit_dice}
                        </pre>
                        <h4>Alignment</h4>
                        <p>
                            {monster.alignment}
                        </p>
                        <h4>
                            Armor Source: {monster.armor_desc || "None"}
                        </h4>
                    </section>
                    <section>
                        Speed
                        <ul>
                            { Object.keys(monster.speed).map(key=>(
                                <li>
                                    {key}: {monster.speed[key]} ft ({monster.speed[key]/5} Squares)
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <h4>Languages</h4>
                        <p>{monster.languages}</p>
                    </section>
                </Important>
                <Bottom>
                    <section>
                        <fieldset>
                            <legend>Stats and Saves</legend>
                            <ul>
                                <li>Str: {monster.strength} ({monster.strength_save || "Special"})</li>
                                <li>Dex: {monster.dexterity} ({monster.dexterity_save || "Special"})</li>
                                <li>Con: {monster.constitution} ({monster.constitution_save || "Special"})</li>
                                <li>Int: {monster.intelligence} ({monster.intelligence_save || "Special"})</li>
                                <li>Wis: {monster.wisdom} ({monster.wisdom_save || "Special"})</li>
                                <li>Cha: {monster.charisma} ({monster.charisma_save || "Special"})</li>
                            </ul>
                        </fieldset>
                        <section>
                            <h4>
                                Special Abilities:
                            </h4>
                            <Special>
                                {monster.special_abilities.length<1 && <dd>No Abilities</dd>}
                                {monster.special_abilities.map(ability=>(
                                    <section>
                                        <dt>{ability.name}</dt>
                                        <dl>{ability.desc}</dl>
                                    </section>
                                ))}
                            </Special>
                        </section>
                    </section>
                    <SectionView actions={monster.actions} la={monster.legendary_actions}/>
                </Bottom>
            </MonsterView>
        )
    }else{
        return(
            <section>
                Click a monster to view it's stats
            </section>
        )
    }
}

export default MonsterViewer
