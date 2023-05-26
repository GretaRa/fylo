const Product = ({ product }) => {
	const { image, title, description } = product;
	
	return (
		<div className="bg-primary-main flex flex-col items-center gap-5">
			<img className="max-w-min" src={image} alt={title} />
			<div className="text-center flex flex-col gap-2 items-center justify-center">
				<p className="font-bold text-xl font-special">{title}</p>
				<p className="max-w-sm text-sm">{description}</p>
			</div>
		</div>
	);
};

export default Product;
