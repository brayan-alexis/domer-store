import { useGlobalContext } from "../../context";
import { Card } from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";
import { ProductModal } from "../../components/ProductModal";

const Home = () => {
  const { products, searchProduct, filteredProducts, openModal } = useGlobalContext();

  const renderView = () => {
    // Check if products are not yet loaded
    if (!products) {
      return <p className="text-center text-2xl font-semibold col-span-full">Loading products...</p>;
    }

    const productsToRender = searchProduct?.length > 0 ? filteredProducts : products;
    return (productsToRender?.length > 0)
      ? productsToRender.map(product => <Card key={product.id} {...product} />)
      : <p className="text-center text-2xl font-semibold col-span-full">No products found</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {renderView()}
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