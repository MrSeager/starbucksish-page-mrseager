//Components
import HeaderNavbar from "@/components/HeaderNavbar";
import MainSection from "@/components/MainSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-start">
      <HeaderNavbar />
      <MainSection />
    </div>
  );
}
