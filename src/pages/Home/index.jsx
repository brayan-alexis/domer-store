import { useState, useEffect } from "react";
import { useShoppingCartContext } from "../../context";
import { useProductDetailContext } from "../../context";
import { dummyjsonURL } from "../../api/index";
import { Card } from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";
import { ProductModal } from "../../components/ProductModal";

const Home = () => {
  const { openModal } = useProductDetailContext();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${dummyjsonURL}/products?limit=100`);
        const data = await response.json();
        setProducts(data.products);
        console.log(data.products);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products?.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      {openModal && (
        <ProductModal>
          <ProductDetail />
        </ProductModal>
      )}
    </>
  );
}

export { Home };