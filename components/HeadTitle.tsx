import Head from "next/head";

type Props = {
  title: string;
  children?: React.ReactNode;
};

const Seo: React.FC<Props> = ({ title }) => {
  const titlemsg = `${title} | Next Movie`;
  return (
    <Head>
      <title>{titlemsg}</title>
    </Head>
  );
};

export default Seo;
