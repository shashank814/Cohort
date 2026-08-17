import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";

const NavbarPage = () => {
  const usageCode = `import ComponentDemo from "../ComponentsDemo";
      <Navbar />


  `;

  return (
    <div className="md:hidden">
      <ComponentDemo code={usageCode}>
        <Navbar />
      </ComponentDemo>
    </div>
  );
};

export default NavbarPage;
