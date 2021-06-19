import { WorkWrapper, WorkImg, Card } from ".././../styles/work";

const Cards = () => {
  const data = [
    "blog.jpg",
    "burger.jpg",
    "excercise.jpg",
    "abstract.jpg",
    "vegan.jpg",
    "office.jpg",
  ];
  return (
    <WorkWrapper>
      {data.map((d, i) => {
        return (
          <Card key={i}>
            <WorkImg work={`/assets/images/${d}`} />
          </Card>
        );
      })}
    </WorkWrapper>
  );
};

export default Cards;
