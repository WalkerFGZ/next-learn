interface CategoryProps {
  params: {
    category: string;
  };
}

export default function Category(props: CategoryProps) {
  const { category } = props.params;
  console.log(category);
  return (
    <div>
      <h1>Category: {category}</h1>
    </div>
  );
}
