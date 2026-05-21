//Components
import Image from "next/image";
import Link from "next/link";

export default function SectionOne() {
    return(
        <div className="grid md:grid-cols-2 bg-[#d4e9e2]">
            <div className="flex flex-col items-center md:items-start justify-center gap-2
                            px-10 text-center md:text-start py-5
                            text-[#1e3932]">
                <h1 className="uppercase font-semibold text-[40px]">Free coffee<br />is a tap away</h1>
                <p className="font-semibold">Join now to start earning Rewards.</p>
                <Link
                    href={'/'}
                    className="bg-[#008248] border border-2 border-[#008248] font-semibold text-white rounded-full px-5 py-1 mt-5 duration-300
                                hover:bg-transparent hover:text-[#008248]"
                >
                    Join now
                </Link>
                <p className="font-semibold">Or <span className="underline">join in the app</span> for the best experience</p>
            </div>
            <div className="hidden md:block">
                <Image 
                    src={'/images/C1-Starbucks.png'}
                    alt="star"
                    width={765}
                    height={794}
                    className="ms-auto"
                />
            </div>
        </div>
    );
}