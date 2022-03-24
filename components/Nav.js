import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="bg-black text-white h-10 flex items-center">
      <ul className="flex flex-row px-4">
        <li className="px-3">
          <Link href="/">Home</Link>
        </li>
        <li className="px-3">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav