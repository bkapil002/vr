import world from "../image/glass.png"
import adapter from "../image/adapter.png"
import carpenter from "../image/carpenter.png"
import healthinsurance from "../image/health-insurance.png"
export default function ProductsSection() {
  const products = [
    {
      icon: world,
      title: "VR world",
      link: "#"
    },
    {
      icon: adapter,
      title: "VR HVAC",
      link: "#"
    },
    {
      icon: carpenter,
      title: "VR Carpentry",
      link: "#"
    },
    {
      icon: healthinsurance,
      title: "VR Strile ",
      link: "#"
    }
  ];

  return (
    <div className="w-full  bg-white mt-10 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.link}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-gray-800 mb-4 transition-transform duration-200 group-hover:scale-110">
                <img src={product.icon}  className="w-10 h-11"/>
              </div>
              <span className="text-[#0D349C] hover:underline text-sm font-medium">
                {product.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}