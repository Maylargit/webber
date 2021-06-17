import { Tabloid, TabloidWrapper } from ".././../styles/tabloid";

const Cards = () => {
  const data = [
    {
      icon: "palette",
      heading: "Design",
      content:
        "We do design the way it should be done. Modern, Class, and Accessible",
    },
    {
      icon: "laptop-code",
      heading: "Develop",
      content:
        "Our developmemt teams are top notch around the world using modern tools available",
    },
    {
      icon: "tasks",
      heading: "Manage",
      content:
        "Beyond the design, development, we also help our client manage the web assets",
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
