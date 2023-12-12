import DetailBox from "./DetailBox";
function GameDetails() {
  const gameDetailsData = [
    {
      label: "نوع محصول",
      buttons: ["In-Game", "Redeem Code"],
    },
    {
      label: "ریجن",
      buttons: ["Country", "Country", "Country"],
    },
    {
      label: "مقدار (عنوان محصول) (واحد شمارش)",
      buttons: ["Number", "Number", "Number", "Number", "Number", "Number"],
    },
    {
      label: "پلتفرم",
      buttons: ["Platform A", "Platform B", "Platform C", "Platform D"],
    },
  ];
  const gameDetails = gameDetailsData.map((detail, index) => (
    <DetailBox gameData={detail} key={index} />
  ));
  return <div className="details">{gameDetails}</div>;
}
export default GameDetails;
