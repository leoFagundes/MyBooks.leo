import NavBar from "@/components/NavBar";

type Product = {
  id: number
  name: string
}

function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Produto 1" },
        { id: 2, name: "Produto 2" },
        { id: 2, name: "Produto 3" }
      ])
    }, 2000)
  })
}

export default async function Home() {
  const products = await fetchProducts()

  return (
    <main>
      <NavBar />
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </main>
  )
}
