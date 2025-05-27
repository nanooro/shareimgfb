import Image from "next/image";
import ArticleCard from "@ui/articleCard";

export default function Home() {
  return (
    <>
      <div className="absolute justify-start p-2 items-center w-full top-0 left-0 bg-white text-black h-12 flex ">
        <h1 className="text-4xl">Nannuru</h1>
        <div className="w-16 h-[80%] rounded-md p-4  ml-auto flex justify-center items-center bg-black text-white shadow-2xl">
          menu
        </div>
      </div>
      <div className="mt-16">
        <ArticleCard />
      </div>
    </>
  );
}
