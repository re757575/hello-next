//@ts-check
import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    {/* Note: Link is Just a Higher Order Component (HOC) */}
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
