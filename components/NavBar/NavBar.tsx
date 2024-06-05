import Image from "next/image";

type NavBarProps = {
  id: number;
  name: string;
};

// Define menu items outside the component to avoid re-definition on each render
const leftMenus = [
  { id: 1, name: "home", link: "/" },
  { id: 2, name: "works", link: "/" },
  { id: 3, name: "faq", link: "/" },
];
const rightMenus = [
  { id: 1, name: "services", link: "/" },
  { id: 2, name: "contact", link: "/" },
  { id: 3, name: "bottom", link: "/" },
];

const drawerMenus = [
  { id: 1, name: "home", link: "/" },
  { id: 2, name: "works", link: "/" },
  { id: 3, name: "faq", link: "/" },
  { id: 4, name: "services", link: "/" },
  { id: 5, name: "contact", link: "/" },
];

// Reusable Menu component
const Menu = ({
  items,
  isRight,
}: {
  items: NavBarProps[];
  isRight?: boolean;
}) => (
  <div
    className={`flex gap-2 basis-1/3 items-center px-5 ${
      isRight ? "justify-end" : " justify-start"
    }`}
  >
    {items.slice(0, isRight ? 2 : 3).map((item) => (
      <p
        className={`h-10 w-28 cursor-pointer flex justify-center items-center ${
          isRight ? "last:bg-secondary last:rounded-full" : ""
        }`}
        key={item.id}
      >
        {item.name}
      </p>
    ))}
  </div>
);

// Reusable Logo component
const Logo = ({ src }: { src: string }) => (
  <div className="basis-1/3 flex justify-center items-center cursor-pointer">
    <Image src={src} height={60} width={60} alt="logo" />
  </div>
);

type NavBarSSRProps = {
  scrolled: boolean;
  isOpen: boolean;
  setIsOpen: any;
};

const NavBar = ({ scrolled, setIsOpen, isOpen }: NavBarSSRProps) => {
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // console.log(isOpen);
  return (
    <>
      <div
        className={`sticky container hidden xl:block overflow-hidden z-50 top-5 ${
          scrolled ? "h-20" : "h-0 invisible"
        } transition-all duration-500 ease-in-out bg-primary rounded-full flex justify-center items-center text-background`}
      >
        <div className="w-full h-full container flex items-center">
          <Menu items={leftMenus} />
          <Logo src="/images/logos/logo-white.svg" />
          <Menu items={rightMenus} isRight />
        </div>
      </div>
      <div
        data-aos="fade-down"
        data-aos-delay={300}
        className=" text-primary hidden xl:block"
      >
        <div className="w-full h-40 container flex items-center">
          <Menu items={leftMenus} />
          <Logo src="/images/logos/logo.svg" />
          <Menu items={rightMenus} />
        </div>
      </div>

      <div
        data-aos="fade-down"
        data-aos-delay={300}
        className=" relative xl:hidden"
      >
        <div className="w-full h-40 container flex items-center justify-between">
          <Image
            src={"/images/logos/logo.svg"}
            height={60}
            width={60}
            alt="logo"
          />
          <div
            onClick={handleToggleMenu}
            className=" bg-quaternary px-8 space-y-1 py-3 rounded-full"
          >
            {Array(3)
              .fill("")
              .map((item) => (
                <p
                  key={item.id}
                  className="bg-primary h-1 rounded-full w-6"
                ></p>
              ))}
          </div>
        </div>
        {isOpen && (
          <div
            data-aos="zoom-out-left"
            data-aos-delay="50"
            className=" fixed top-0 z-50 w-full h-full bg-white"
          >
            <div className="container py-5 relative h-full flex justify-center items-center">
              <div className="w-full h-40 absolute top-10">
                <Image
                  src={"/images/logos/logo-slate.svg"}
                  height={60}
                  width={60}
                  alt="logo"
                />
              </div>
              <div className="h-full flex w-full flex-col gap-2 justify-center items-center">
                {drawerMenus.map((item) => (
                  <h1
                    data-aos="fade-down"
                    data-aos-delay={50 * item.id}
                    className={` cursor-pointer text-end w-full font-title last:text-secondary`}
                    key={item.id}
                  >
                    {item.name}
                  </h1>
                ))}
              </div>
              <p
                onClick={handleToggleMenu}
                className="text-primary absolute bottom-10 py-3 w-full text-center rounded-full border border-primary"
              >
                Close
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const scrolled = false;
  const isOpen = false;
  const setIsOpen = false;

  return {
    props: {
      scrolled,
      isOpen,
      setIsOpen,
    },
  };
}

export default NavBar;
