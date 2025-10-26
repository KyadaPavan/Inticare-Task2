import StarRating from "./StarRating";

const RatingCard = ({ name, logo, score }) => {
  return (
    <div className="flex items-center ">
      <img src={logo} alt={name} className="w-20 h-20 " />
      <StarRating rating={5} size="md" />
      <span className="text-sm font-semibold text-gray-700 md:text-base">
        {score}
      </span>
    </div>
  );
};

export default RatingCard;
