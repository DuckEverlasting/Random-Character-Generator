import React,{useState} from 'react'
import {SectionCards,ActionSection} from '../styles/SectionView'
import cn from '../utils/ClassReducer'
import {Special} from '../styles/MonsterViewer'

function SectionView(props) {
    console.log(props);
    const [display,setDisplay]=useState('std')

    return (
        <SectionCards>
            <section className="buttons">
                <button onClick={()=>setDisplay('std')}>Actions</button><button onClick={()=>setDisplay('legend')}>Legendary Actions</button>
            </section>
            <section className={cn({hide:true,show:display==='std'})}>
                <Special>
                    {props.actions.map(action=>(
                        <ActionSection>
                            <dt>{action.name}</dt>
                            <dd>{action.desc}</dd>
                        </ActionSection>
                    ))}
                </Special>
            </section>
            <section className={cn({hide:true,show:display==='legend'})}>
                <Special>
                    {props.la.map(action=>(
                        <ActionSection>
                            <dt>{action.name}</dt>
                            <dd>{action.desc}</dd>
                        </ActionSection>
                    ))}
                </Special>
            </section>
        </SectionCards>
    )
}

export default SectionView
