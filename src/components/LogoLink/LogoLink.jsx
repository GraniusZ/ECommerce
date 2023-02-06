import { Logo } from "@ui/Logo/Logo";
import { Link } from "react-router-dom";

export const LogoLink = () => {
  return (
    <Link to={"/"}>
      {" "}
      <Logo />
    </Link>
  );
};
