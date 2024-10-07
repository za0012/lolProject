import React from 'react';
import { getchampionList } from '@/utils/serverApi';
import '../../styles/championList.css';
import Link from 'next/link';
import { Champion } from '@/types/Champion';

async function championList() {
    const championListData = await getchampionList();
    
    return (
        <div>
            <h1 className="mainTitle">챔피언</h1>
            <img className="lineImg" src={'https://universe.leagueoflegends.com/images/t1HeaderDivider.png'} />
            <div className="championListBox">
                {championListData.map((champion) => {
                    return (
                        <Link key={champion.name} href={`champions/${champion.id}`}>
                            <img
                                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                            />
                            <div className="exBox">
                                <h1>{champion.name}</h1>
                                <p>{champion.title}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default championList;
