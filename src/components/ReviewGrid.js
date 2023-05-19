import Review from "./Review";
import Profile1 from "../images/profile-1.jpg";
import Profile2 from "../images/profile-2.jpg";
import Profile3 from "../images/profile-3.jpg";

const ReviewGrid = () => {
	return (
		<div className="bg-primary-main flex flex-col items-center justify-around md:gap-10 px-[10%] pb-80">
			<div className="flex flex-col md:flex-row gap-8 md:gap-16">
				<Review
					review={{
						body: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
						image: Profile1,
						name: "Satish Patel",
						title: "Founder & CEO, Huddle",
					}}
				/>
				<Review
					review={{
						body: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
						image: Profile2,
						name: "Bruce McKenzie",
						title: "Founder & CEO, Huddle",
					}}
				/>
				<Review
					review={{
						body: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
						image: Profile3,
						name: "Iva Boyd",
						title: "Founder & CEO, Huddle",
					}}
				/>
			</div>
		</div>
	);
};

export default ReviewGrid;
