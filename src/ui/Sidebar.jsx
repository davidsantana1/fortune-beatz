import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <>
      <div className="bg-brand-999 hidden w-full flex-col items-center p-8 lg:flex">
        <Logo />
        <Heading as="h3" color="light" variant="secondary" size="sm">
          Fortune Beatz
        </Heading>
        <MainNav />
      </div>
      <div className="bg-brand-999 sticky flex items-center justify-center p-2 shadow-md lg:hidden">
        <Logo />
      </div>
    </>
  );
}

export default Sidebar;
