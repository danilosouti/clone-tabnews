import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

function Home() {
  return (
    <>
      <h1>Olá! Agora com nova frase.</h1>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default Home;
