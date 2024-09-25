import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../components/ui/carousel";
import { useEffect, useState } from "react";
import { answerImages, questionImages, Questions, Results } from "../static/HowAgileIsYourTeam";
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

  const scoreIndex = () => {
    if (sum >= 40) return 3
    else if (sum >= 30 && sum < 41) return 2
    else if (sum >= 20 && sum < 31) return 1
    else return 0
  }

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
      <div className="max-h-screen">
        <h2 className="text-xl">How Agile Is Your Team?</h2>
        <div>
          <Carousel setApi={setApi}>
            <CarouselContent>
              {questions.map((question, index) => (
                <CarouselItem key={index}>
                  <div className="flex gap-4 flex-col md:flex-row max-h-screen">
                    <div className="flex-1 md:order-first order-last justify-center flex">
                      <img src={questionImages[index]} className="object-contain max-w-full max-h-[85vh]"/>
                    </div>
                    <div className="flex-1 md:order-first">
                    <span className="text-2xl font-semibold">
                    {question.question}
                  </span>
                  <br />
                  <AnswerGroup 
                    question={question}
                    index={index}
                    onValueChange={radioChange}
                  />
                    </div>
                  </div>
                  
                </CarouselItem>
              ))}
              <CarouselItem>
              <div className="flex gap-4 flex-col md:flex-row max-h-screen">
                    <div className="flex-1 md:order-first order-last justify-center flex">
                      <img src={answerImages[scoreIndex()]} className="object-contain max-w-full max-h-[85vh]"/>
                    </div>
                <div className="flex-1 md:order-first">
                  <div className="text-4xl font-semibold">Conclusion:</div>
                  <div className="text-2xl font-semibold">
                    {results[scoreIndex()]}
                  </div>
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
      </div>
    </>
  );
};
