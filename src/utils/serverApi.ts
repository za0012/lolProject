'use server';
import { Champion, ChampionDetail } from '@/types/Champion';
import { ErrorMessage } from '@/types/error';
import { item } from '@/types/Item';

export async function getversion() {
    const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json', {
        method: 'GET',
    });
    const version: number[] = await response.json();
    return version[0];
}

export async function getchampionList() {
    const version = await getversion();
    const championResponse = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
        {
            next: { revalidate: 86400 },
        }
    );

    // if (!championResponse.ok) {
    //     const error: ErrorMessage = {
    //         message: 'Please enter a valid Champion Name',
    //         status: championResponse.status,
    //     };
    //     return error;
    // }

    const champion = await championResponse.json();
    const championList: Champion[] = Object.values(champion.data); //Object.value메소드

    return championList;
}

export async function getChampionDetail(championId: string) {
    //()안에 넣음으로써 동적 페이지에서 id를 받아서 들어오는 방식인 것 같다.
    const version = await getversion();
    const championParticularResponse = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${championId}.json`
    );

    const championData = await championParticularResponse.json();
    const ChampionDetail: ChampionDetail[] = Object.values(championData.data);

    // if (!championParticularResponse.ok) {
    //     return {
    //         message: 'There was an error.🤔🤔',
    //         status: championParticularResponse.status,
    //     };
    // }

    return ChampionDetail;
}

export async function getItem() {
    const version = await getversion();
    const itemResponse = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`, {
        next: { revalidate: 86400 },
    });

    // if (!championResponse.ok) {
    //     return {
    //         message: 'Please enter a valid Champion Name',
    //         status: championResponse.status,
    //     };
    // }

    const item = await itemResponse.json();
    const itemList: item[] = Object.values(item.data); //Object.value메소드

    return itemList;
}


