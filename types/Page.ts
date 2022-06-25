import HeaderType from './Header';
import FooterType from './Footer';

type Page = {
  title: string;
  description: string;
  header: HeaderType;
  footer: FooterType;
  previewImg?: string;
  children?: React.ReactNode;
};

export default Page;
