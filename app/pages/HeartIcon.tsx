import Image from 'next/image';
import rounded from '../img/rounded.png'
export default function HeartIcon() {
    return (
        <div>
            <Image src={rounded} alt="cursor" />
        </div>
    );
}