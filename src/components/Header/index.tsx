import { ReactNode } from 'react';

type Props = { children: ReactNode };

const Header = ({ children }: Props) => {
  return <div className="h-10 min-w-52 bg-blue-500 flex items-center px-2 text-white">{children}</div>;
};

export default Header;
