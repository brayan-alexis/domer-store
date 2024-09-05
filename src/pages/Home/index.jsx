// import { useContext } from "react";
import { useGlobalContext } from "../../context";
import { Card } from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";
import { ProductModal } from "../../components/ProductModal";

const Home = () => {
  const { products, setSearchByTitle, openModal } = useGlobalContext();

  return (
    <>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
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