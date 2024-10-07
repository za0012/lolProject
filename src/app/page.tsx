import Image from 'next/image';
import { version } from 'os';
import defence from '../img/defence.png';

export default function Home() {
    return (
        <div>
            <p>메인페이지</p>
            <Image alt='방어력' src={defence} />
            방어력
        </div>
    );
}
