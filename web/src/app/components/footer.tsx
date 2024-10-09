import Image from "next/image";
import xLogo from "../assets/imgs/x-logo-white.png";
import githubLogo from "../assets/imgs/github-mark-white.png";

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/janburzinski/coinflip_pvp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src={githubLogo}
          alt="File icon"
          width={16}
          height={16}
        />
        Github
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://janburzinski.de"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="https://nextjs.org/icons/globe.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Personal Website
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://x.com/janburzinski"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src={xLogo}
          alt="Twitter icon"
          width={16}
          height={16}
        />
        X (Twitter)
      </a>
    </footer>
  );
};

export default Footer;
