import Image from "next/image";
import cfpvpLogo from "./assets/imgs/coinflippvp_logo.png";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { LoginButton } from "./components/buttons/Button";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center 
    min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      >
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image src={cfpvpLogo} alt="Logo" width={280} height={60} priority />

          <ol
            className="list-inside list-decimal text-sm text-center sm:text-left 
        font-[family-name:var(--font-geist-mono)]"
          >
            <li className="mb-2">
              There are currently
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <LoginButton />
            <a
              className="rounded-full border border-solid border-transparent transition-colors 
                  flex items-center justify-center bg-foreground text-background 
                  gap-2 hover:bg-[#383838] dark:hover:bg-stone-700 text-sm 
                  sm:text-base h-10 sm:h-12 px-4 sm:px-5 text-white bg-stone-900
                  shadow-lg shadow-purple-500/50"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN THE GAME
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
