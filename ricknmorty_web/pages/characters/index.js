import Image from "next/image";
import { Inter } from "next/font/google";
import { Card } from "../../components/Body/card";
import { Body } from "@/components/Body/body";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Body />
    </div>
  );
}
