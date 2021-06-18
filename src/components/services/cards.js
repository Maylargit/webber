import { ServiceWrapper, Card } from ".././../styles/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cards = () => {
  const data = [
    "Web Design",
    "Graphics Design",
    "SEO Optimization",
    "Email Marketing",
    "Social Media Marketing",
    "Facebook Advertising",
    "Content Creation",
    "PPC Advertising",
  ];
  return (
    <ServiceWrapper>
      {data.map((d, i) => {
        return (
          <Card key={i}>
            {d} <FontAwesomeIcon icon="long-arrow-alt-right" color="#7a0e25" />
          </Card>
        );
      })}
    </ServiceWrapper>
  );
};

export default Cards;
