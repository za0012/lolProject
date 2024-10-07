import React from 'react';
import { getChampionDetail } from '@/utils/serverApi';
import '@/styles/championList.css';
import HeaderDivider from '@/img/t1HeaderDivider.png';

type Props = {
    params: {
        id: string;
    };
};

export async function ChampionDetail({ params }: Props) {
    const championDetail = await getChampionDetail(params.id);
    console.log(params);
    return (
        <div className="bg-[#0a0a0c]">
            <div className="backgroundBox1">
                <div className="backgroundBox2">
                    <div className="header"></div>
                    <div
                        style={{
                            backgroundImage: `url(
                    https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.id}_0.jpg
                )`,
                            opacity: 1,
                        }}
                        className="background3"
                    >
                        <div className="backgroundContent">
                            <h3>{params.id}</h3>
                            <img src={'https://universe.leagueoflegends.com/images/t1HeaderDivider.png'} />
                        </div>
                    </div>
                </div>
            </div>
            {championDetail.map((champion) => {
                return (
                    <div key={champion.name}>
                        <div className="mainBox">
                            {/* <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} /> */}
                            <h1>{champion.name}</h1>
                            <p>{champion.title}</p>

                            <p>{champion.lore}</p>
                            <p>{champion.allytips}</p>
                            <p>{champion.enemytips}</p>
                            <p>{champion.tags}</p>
                            <p>{champion.partype}</p>
                            <p>{champion.title}</p>
                            <p>{champion.title}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="skill">
                            {champion.spells.map((spell) => {
                                return (
                                    <>
                                        <img
                                            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/spell/${spell.id}.png`}
                                        />
                                        <p>{spell.id}</p>
                                        <p>{spell.name}</p>
                                        <p>{spell.description}</p>
                                        <p>{spell.cooldownBurn}</p>
                                        <br />
                                        <br />
                                        <br />
                                    </>
                                );
                            })}
                        </div>
                        <div>
                            {champion.skins.map((skin) => {
                                return (
                                    <>
                                        <img
                                            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skin.num}.jpg`}
                                        />
                                        <p>{skin.name}</p>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ChampionDetail;
