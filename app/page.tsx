"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("https://sayyedsaad.vercel.app");
  });

  return <div></div>;
};

export default Home;
