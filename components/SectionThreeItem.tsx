//Components
import Image from "next/image";

interface SectionThreeItemProps {
    option: number;
    numb: number;
    text: string;
}

export default function SectionThreeItem({ option, numb, text }: SectionThreeItemProps) {
    return(
        <div className={`overflow-hidden flex flex-col md:grid grid-cols-3 items-center max-w-[50rem] text-center
                        duration-500
                        ${option === numb ? "w-full scale-100" : "w-0 scale-0"}`}>
            <Image
                src={'/images/' + numb + '.png'}
                alt={numb.toString()}
                width={369}
                height={243}
                className="mx-auto"
            />
            <div className="h-[75px] md:col-span-2 flex items-center justify-center">
                <p>{text}</p>
            </div>
        </div>
    );
}