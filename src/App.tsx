import Breadcrumb, { BreadcrumbItem } from "./components/Breadcrumb";
import "./styles.css";

export default function App() {
  const steps: BreadcrumbItem[] = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Laptops", link: "/products/laptops" },
    { label: "MacBook Pro" },
  ];

  return (
    <div className="App">
      <Breadcrumb items={steps} />
    </div>
  );
}
