import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Header/header";
import { Body } from "../components/Body/body";
import Footer from "../components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Body />
    </div>
  );
}
