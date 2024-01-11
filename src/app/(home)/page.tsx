import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future world",
  description: "future world",
  keywords: ["future", "world", "future world"],
};
export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
