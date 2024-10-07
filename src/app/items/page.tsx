import React from 'react';
import { getItem } from '@/utils/serverApi';
import '../../styles/item.css';
import gold from '@/img/gold.png';

async function itemList() {
    const itemListData = await getItem();

    // 유니코드 이스케이프 문자열을 HTML로 변환하는 함수
    const decodeDescription = (description: string): string => {
        return description
            .replace(/\\u003C/g, '<')
            .replace(/\\u003E/g, '>')
            .replace(/마나 /g, '<span class="mana">마나</span>')
            .replace(/기본 체력 재생 /g, '<span class="moreheart">기본 체력 재생 </span>')
            .replace(/체력 /g, '<span class="heart">체력</span>')
            .replace(/방어력 /g, '<span class="defence">방어력 </span>')
            .replace(/공격력 /g, '<span class="attack">공격력 </span>')
            .replace(/주문력 /g, '<span class="magic">주문력 </span>')
            .replace(/강인함/g, '<span class="strong">강인함</span>')
            .replace(/스킬 가속 /g, '<span class="time">스킬 가속 </span>')
            .replace(/공격 속도 /g, '<span class="atspeed">공격 속도 </span>')
            .replace(/이동 속도 /g, '<span class="speed">이동 속도 </span>')
            .replace(/물리 관통력/g, '<span class="baba">물리 관통력</span>')
            .replace(/마법 저항력 /g, '<span class="magicDefence">마법 저항력 </span>')
            .replace(/마법 관통력/g, '<span class="mama">마법 관통력</span>')
            .replace(/생명력 흡수/g, '<span class="blood">생명력 흡수</span>')
            .replace(/치명타 확률/g, '<span class="critical">치명타 확률</span>')
            .replace(/방어구 관통력/g, '<span class="decri">방어구 관통력</span>')
            .replace(/적응형 능력치/g, '<span class="Adaptive">적응형 능력치</span>')
            .replace(/치명타 피해량/g, '<span class="morecri">치명타 피해량</span>');
    };

    return (
        <div>
            <h1 className="mainTitle">아이템 리스트</h1>
            <p className="text-center">Ctrl + F로 아이템을 찾아보세요</p>
            <div className="itemListBox">
                {itemListData.map((item) => {
                    return (
                        <div className="item">
                            <div className="leftEx">
                                <img
                                    src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
                                    alt={item.name}
                                />
                                <div className="leftBox">
                                    <h1>{item.name}</h1>
                                    <span className="gold">{item.gold.total}</span>
                                </div>
                            </div>
                            <div className="middleLine" data-v-dc02058a=""></div>
                            {/* dangerouslySetInnerHTML로 HTML을 렌더링 */}
                            <p
                                dangerouslySetInnerHTML={{ __html: decodeDescription(item.description) }}
                                className="caption"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default itemList;
