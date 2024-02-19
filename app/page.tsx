// import Image from "next/image";
"use server"
import Heading from "@/components/Heading";
import SearchBar from "@/components/SearchBar";

const Home=async () => {

  return (
    <div className="flex flex-1 justify-center flex-col mx-2 mt-5 gap-y-2">
      <Heading />
      {/* <h1 className="font-bold text-3xl items-center">EWS & LEAD One </h1> */}
      <SearchBar />
    </div>
  );
}

export default Home;