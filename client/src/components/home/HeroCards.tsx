const HeroCard = ({ imgSrc, title, description, bgColor, customClasses, childClasses }) => (
    <div className={`flex flex-col border-4 border-white border-b-0 items-center h-[370px] relative ${bgColor} ${customClasses}`}>
        <div className={`${childClasses}`}>
            <img src={imgSrc} alt={title} />
        </div>
        <div className="flex flex-col items-center relative -top-10 p-3">
            <h3 className="m-0 text-black font-bold text-2xl">{title}</h3>
            <h3>Challenges</h3>
            {/*<p className="m-0">{description}</p>*/}
        </div>
    </div>
);


export default HeroCard;
