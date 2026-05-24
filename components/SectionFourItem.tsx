//Components
import Image from "next/image";
import Link from "next/link";

interface SectionFourItemProps {
    img: string; 
    textH: string; 
    textP: string; 
}

export default function SectionFourItem({ img, textH, textP }: SectionFourItemProps) {
    return(
        <div className="flex flex-col items-center gap-5 duration-500
                        hover:scale-105">
            <Image 
                src={"/images/" + img}
                alt="img"
                width={104}
                height={108}
            />
            <h4 className="font-semibold text-[20px]">{textH}</h4>
            <p>{textP}</p>
            <Link
                href={'/'}
                className="mt-auto underline text-[#008248] font-semibold text-[15px] duration-300
                            hover:text-[#d4e9e2]"
            >
                Learn more
            </Link>
        </div>
    );
}