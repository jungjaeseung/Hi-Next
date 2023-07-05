import NavBar from "./NavBar";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <NavBar />
    <div>{children}</div>
  </>
);

export default Layout;
