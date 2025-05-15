'use client';
import { useProducts } from './controllers/useProducts';
import { ProductCard } from './components/ProductCard';
import { ThemeToggle } from './components/ThemeToggle';

export default function HomePage() {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products.</p>;

  return (
    <main className="p-4">
      <div className="flex justify-end position-fixed bg-yellow-500 mb-4">
        <ThemeToggle />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}