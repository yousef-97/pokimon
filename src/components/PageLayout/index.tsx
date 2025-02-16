import { ReactNode } from 'react';

type Props = { children: ReactNode };

const PageLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default PageLayout;
