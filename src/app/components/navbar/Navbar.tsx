"use client";

import Categories from "./Categories";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser: IUserSafe | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed z-10 w-full bg-white shadow-sm">
      <div className="py-4 border-b">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};
export default Navbar;