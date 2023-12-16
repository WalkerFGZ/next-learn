interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string[];
  };
}

export default function Category(props: CategoryProps) {
  const { categories } = props.params;
  return (
    <div>
      <h1>Category: {categories}</h1>
    </div>
  );
}
