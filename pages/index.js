//@ts-check

import Link from "next/link";

const index = () => (
  <div>
    {/* Note: Link is Just a Higher Order Component (HOC) */}
    <Link href="/about">
      <button style={{ fontSize: 20 }}>About Page</button>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default index;
