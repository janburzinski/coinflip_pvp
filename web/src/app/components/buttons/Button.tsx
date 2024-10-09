import Image from "next/image";
import googleLogo from "../../assets/imgs/googlelogo.png";

const LoginButton = ({ isNavbar = false }) => {
  const sizeClass = !isNavbar
    ? "text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    : "text-xs h-8 px-4";

  return (
    <a
      className={`rounded-full border border-solid border-transparent transition-colors 
        flex items-center justify-center bg-foreground text-background gap-2 
        hover:bg-[#383838] dark:hover:bg-[#ccc] ${sizeClass}`}
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={googleLogo} alt="Google logomark" width={20} height={20} />
      LOGIN WITH GOOGLE
    </a>
  );
};

export { LoginButton };
