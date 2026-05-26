//Components
import Image from "next/image";
import { ReactNode } from "react";

interface SectionFiveItemprops {
    img: string;
    textH: string;
    textP: ReactNode;
    classN: string;
}

export default function SectionFiveItem({ img, textH, textP, classN }: SectionFiveItemprops) {
    return(
        <div className="flex gap-2">
            <div className=" hidden lg:flex items-start justify-end max-w-[87px] h-full w-full max-h-[100px]">
                <Image 
                    src={'/images/' + img}
                    alt="img"
                    width={100}
                    height={100}
                    className={classN + ""}
                />
            </div>
            <div className="flex flex-col gap-3 lg:w-[50%]">
                <h5 className="font-semibold text-[20px]">{textH}</h5>
                {textP}
            </div>
        </div>
    );
}