import {
  faListCheck,
  faSquareCheck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavItem from "@/src/components/SideMenu/NavList/NavItem/NavItem";

interface NavItemType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavList = () => {
  const navList: NavItemType[] = [
    {
      id: 1,
      label: "All Tasks",
      link: "/",
      icon: <FontAwesomeIcon icon={faListCheck} className="size-5" />,
    },
    {
      id: 2,
      label: "Completed Tasks",
      link: "/completed",
      icon: <FontAwesomeIcon icon={faSquareCheck} className="size-5" />,
    },
    {
      id: 3,
      label: "Expired Tasks",
      link: "/expired",
      icon: <FontAwesomeIcon icon={faClock} className="size-5" />,
    },
  ];
  return (
    <div className="mt-24 space-y-2 px-2">
      {navList.map((item) => (
        <NavItem
          key={item.id}
          label={item.label}
          link={item.link}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default NavList;
