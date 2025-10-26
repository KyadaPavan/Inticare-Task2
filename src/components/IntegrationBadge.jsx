const IntegrationBadge = ({ name, icon, fallback, color }) => {
  const colorClasses = {
    orange: "text-orange-500",
    purple: "text-purple-500",
    blue: "text-blue-500",
  };

  return (
    <div className="flex items-center justify-center w-8 h-8 transition-transform duration-200 bg-white rounded-full shadow-md md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-110">
      <img
        src={icon}
        alt={name}
        className="object-contain w-full h-full"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.parentElement.innerHTML = `<span class="${colorClasses[color]} font-bold text-xs md:text-sm">${fallback}</span>`;
        }}
      />
    </div>
  );
};

export default IntegrationBadge;
