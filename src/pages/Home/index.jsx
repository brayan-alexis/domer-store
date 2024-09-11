import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { Card } from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";
import { ProductModal } from "../../components/ProductModal";

// List of subcategories for each category
const categoriesMap = {
  beauty: ["beauty", "fragrances", "skin Care"],
  electronics: ["laptops", "mobile-accessories", "smartphones", "tablets"],
  fashion: [
    "mens-shirts", "mens-watches", "sunglasses", "tops", 
    "womens-bags", "womens-dresses", "womens-jewellery", 
    "womens-shoes", "womens-watches"
  ],
  "home-decoration": ["furniture", "home-decoration", "kitchen-accessories"],
  "sports-vehicles": ["motorcycle", "sports-accessories", "vehicle", "groceries"]
};

const Home = () => {
  const { category } = useParams(); // Obtain the category from the URL
  const { products, searchProduct, openModal } = useGlobalContext();

  // Filter products by category and subcategory
  const filterProductsByCategory = (products) => {
    if (!category || category === "All") return products;

    // Get the subcategories or the category itself
    const subcategories = categoriesMap[category] || [category];

    // Filter products by subcategories and return the result
    return products.filter(product => 
      subcategories.includes(product.category.toLowerCase())
    );
  };

  const filterProductsBySearch = (products) => {
    return products.filter(product =>
      product.title.toLowerCase().includes(searchProduct.toLowerCase()) ||
      product.description.toLowerCase().includes(searchProduct.toLowerCase()) ||
      product.category.toLowerCase().includes(searchProduct.toLowerCase())
    );
  }

  const renderView = () => {
    if (!products) {
      return <p className="text-center text-2xl font-semibold col-span-full">Loading products...</p>;
    }

    // Filter products by search then by category
    const productsByCategory = filterProductsByCategory(products);
    const productsToRender = searchProduct?.length > 0
      ? filterProductsBySearch(productsByCategory)
      : productsByCategory;

    // Render products or a message if no products are found
    return productsToRender.length > 0
      ? productsToRender.map(product => <Card key={product.id} {...product} />)
      : <p className="text-center text-2xl font-semibold col-span-full">No products found</p>;
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {renderView()}
      </div>

      {openModal && (
        <ProductModal>
          <ProductDetail />
        </ProductModal>
      )}
    </>
  );
};

export { Home };