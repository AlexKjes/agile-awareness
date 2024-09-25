import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../components/ui/carousel";
import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { Questions, Results } from "../static/HowAgileIsYourTeam";
import { AnswerGroup } from "../components/AnswerGroup";

export const HowAgileIsYourTeam = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [_, setCount] = useState(0);
  const [sum, setSum] = useState(0);

  const radioChange = (value: string) => {
    setSum(Number.parseInt(value) + sum);
    console.log(sum)
    setTimeout(() => api?.scrollNext(), 100);
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const questions = Questions;
  const results = Results;

  return (
    <>
      <h2 className="text-xl">How Agile Is Your Team?</h2>
      <div className="mx-auto max-w-s">
        <Carousel setApi={setApi} className="max-w-s">
          <CarouselContent>
            {questions.map((question, index) => (
              <CarouselItem key={index}>
                <span className="text-4xl font-semibold">
                  {question.question}
                </span>
                <br />
                <AnswerGroup 
                  question={question}
                  index={index}
                  onValueChange={radioChange}
                />
              </CarouselItem>
            ))}
            <CarouselItem>
              <div>
                <div className="text-4xl font-semibold">Conclusion:</div>
                <div className="text-2xl font-semibold">
                  {sum >= 40 ? results[0] : ""}
                  {sum >= 30 && sum < 41 ? results[1] : ""}
                  {sum >= 20 && sum < 31 ? results[2] : ""}
                  {sum < 21 ? results[3] : ""}
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        {current < 11 ? (
          <div className="py-2 text-center text-sm text-muted-foreground">
            Question {current} of 10
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
