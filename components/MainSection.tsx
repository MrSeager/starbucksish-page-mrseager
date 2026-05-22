//Components
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

export default function MainSection() {
    return(
      <main className="max-w-[120rem] w-full shadow-lg flex flex-col">
        <SectionOne />
        <SectionTwo />
      </main>
    );
} 