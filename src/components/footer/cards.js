import { TabloidWrapper } from "../../styles/tabloid";
import { Tabloid } from "../../styles/footerTabloid";

const Cards = () => {
  const data = [
    {
      icon: "envelope",
      heading: "Email",
      content: "enquiries@godfatherng.com",
    },
    {
      icon: "mobile",
      heading: "Phone",
      content: "08181234567",
    },
    {
      icon: "building",
      heading: "Office",
      content: "26, Folawiyo Bankole Street Surulere Lagos",
    },
  ];
  return (
    <TabloidWrapper>
      {data.map((d, i) => {
        return (
          <Tabloid
            icon={d.icon}
            heading={d.heading}
            content={d.content}
            key={i}
          />
        );
      })}
    </TabloidWrapper>
  );
};

export default Cards;
