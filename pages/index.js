import AppLayout from "../components/layout/AppLayout";
import Hero from "../components/sections/Hero";
import TokenInfo from "../components/sections/TokenInfo";
import Community from "../components/sections/Community";
import BullishStatement from "../components/sections/BullishStatement";
import BuyToken from "../components/sections/BuyToken";

export default function Home() {
  return (
    <AppLayout>
      <div className="font-sans">
        <Hero />
        <BullishStatement />
        <BuyToken />
        <TokenInfo />
        <Community />
      </div>
    </AppLayout>
  );
}
