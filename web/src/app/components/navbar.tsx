import Image from "next/image";
import cfpvpLogo from "../assets/imgs/coinflippvp_logo.png";
import { LoginButton } from "./buttons/Button";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col sm:flex-row justify-between items-center p-4 text-white border-b-2 border-stone-600">
      <Image
        className="text-lg font-bold mb-2 sm:mb-0"
        src={cfpvpLogo}
        alt="Coinflip PVP Logo"
        width={150}
        height={200}
      />

      <div className="flex gap-4">
        <a href="/leaderboard" className="hover:underline">
          Leaderboard
        </a>
        <a href="/profile" className="hover:underline">
          Profile
        </a>
        <LoginButton isNavbar={true} />
      </div>
    </nav>
  );
};

export default Navbar;
