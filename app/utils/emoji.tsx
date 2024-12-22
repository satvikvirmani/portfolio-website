import Image from "next/image";
import { Emoji as EmojiType } from "@/app/lib/interfaces";

const Emoji = ({data}: {data: EmojiType}) => {
    return ( 
        <Image src={data.url} width={60} height={60} alt={data.name} className={`absolute ${data.position.yaxis} ${data.position.xaxis}`} />
     );
}
 
export default Emoji;