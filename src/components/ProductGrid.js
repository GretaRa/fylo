import Product from "./Product";
import AcessImg from "../images/icon-access-anywhere.svg";
import SecurityImg from "../images/icon-security.svg";
import CollaborationImg from "../images/icon-collaboration.svg";
import AnyFileImg from "../images/icon-any-file.svg";

const ProductGrid = () => {
	const products = [
		{
			title: "Access your files, anywhere",
			description:
				"The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
			image: AcessImg,
		},
		{
			title: "Security you can trust",
			description:
				"2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
			image: SecurityImg,
		},
		{
			title: "Real-time collaboration",
			description:
				"Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
			image: CollaborationImg,
		},
		{
			title: "Store any type of file",
			description:
				"Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
			image: AnyFileImg,
		},
	];

	return (
		<div className="grid grid-col-1 md:grid-cols-2 bg-primary-main gap-20 px-[17%] items-center">
			{products.map((product) => (
				<Product key={product.title} product={product} />
			))}
		</div>
	);
};

export default ProductGrid;
