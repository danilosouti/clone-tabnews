import { Analytics } from "@vercel/analytics/next";

function Home() {
  return (
    <>
      <h1>Olá! Agora com nova frase.</h1>
      <Analytics />
    </>
  );
}

export default Home;
