const Review = ({ review }) => {
  const { body, image, name, title } = review;
  return (
    <div className="bg-primary-testimonials p-7 flex flex-col gap-5 rounded-md shadow-md shadow-primary-intro">
      <p className="text-sm max-w-xs">{body}</p>
      <div className="flex gap-3">
        <img className="rounded-full w-8 h-8" src={image} alt={name} />
        <div >
          <h3 className="font-bold text-sm">{name}</h3>
          <p className="text-xs">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default Review;