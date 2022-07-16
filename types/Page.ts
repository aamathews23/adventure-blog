import FooterType from './Footer';

type Page = {
  title: string;
  description: string;
  footer?: FooterType;
  previewImg?: string;
  children?: React.ReactNode;
};

export default Page;
