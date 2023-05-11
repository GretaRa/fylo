const Product = ({ product }) => {
  const { image, title, description } = product;
  return (
    <div className="bg-primary-main">
      <img src={image} alt={title} />
      <div className="">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Product;