import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ServicesCard({ cardsData }) {
  return (
    <div>
      {cardsData.map((card, index) => (
        <Card key={index} className="mt-6 w-55 mb-40">
          <CardHeader color="blue-gray" className="relative h-90">
            <img src={card.image} alt={`card-image-${index}`} />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {card.title}
            </Typography>
            <Typography>{card.description}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>{card.buttonText}</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
