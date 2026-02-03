import world from "../image/glass.png"
import adapter from "../image/adapter.png"
import carpenter from "../image/carpenter.png"
import healthinsurance from "../image/health-insurance.png"
import { Link } from "react-router-dom";
export default function ProductsSection() {
  const products = [
    {
      icon: world,
      title: "VR Weld",
      link: "/vrweld"
    },
    {
      icon: adapter,
      title: "VR HVAC",
      link: ""
    },
    {
      icon: carpenter,
      title: "VR Mechatronics",
      link: ""
    },
    {
      icon: healthinsurance,
      title: "VR Sterile  ",
      link: ""
    }
  ];

  return (
    <div className="w-full    mb-[90px]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-gray-800 mb-4 transition-transform duration-200 group-hover:scale-110">
                <img
        src={product.icon}
        className={`${
          product.title === "VR Mechatronics"
            ? "w-11 h-11"
            : "w-10 h-11"
        }`}
        alt={product.title}
      />
              </div>
              <span className="text-[#0D349C] underline text-sm font-medium">
                {product.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}