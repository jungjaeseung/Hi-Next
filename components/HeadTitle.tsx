import Head from "next/head";

type Props = {
  title: string;
  children?: React.ReactNode;
};

const Seo: React.FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title} | Next Movie</title>
    </Head>
  );
};

export default Seo;
