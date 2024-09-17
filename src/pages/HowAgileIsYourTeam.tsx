import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { Questions, Results } from "../static/HowAgileIsYourTeam";

export const HowAgileIsYourTeam = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [_, setCount] = useState(0);

  var sum: number = 0;

  const radioChange = (value: String) => {
    sum += +value;
    setTimeout(() => api.scrollNext(), 100);
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
                <div className="mx-auto width-full pt-10">
                  <RadioGroup onValueChange={(event) => radioChange(event)}>
                    <div className="flex flex-wrap">
                      <div className="flex items-center space-x-2 w-32">
                        {question.lowAnswer}
                      </div>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div className="flex flex-auto items-center space-x-2 w-16 justify-center">
                          <RadioGroupItem
                            value={i + 1 + ""}
                            id={"option-" + i}
                            onChange={(event) =>
                              radioChange(event.currentTarget.value)
                            }
                          />
                          <Label htmlFor={"option-" + i}>{i + 1}</Label>
                        </div>
                      ))}
                      <div className="flex items-center space-x-2 w-32">
                        {question.lowAnswer}
                      </div>
                    </div>
                  </RadioGroup>
                </div>
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
