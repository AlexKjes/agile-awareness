import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "../components/ui/carousel";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import {
  AgilePrinciplesQuestions,
  AgilePrinciplesResults,
} from "../static/WhichAgilePrincipleAreYou";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { AnswerGroup } from "../components/AnswerGroup";

export const WhichAgilePrincipleAreYou: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [_, setCounts] = useState(0);

  const initialScores: { [key: string]: number } = {};
  AgilePrinciplesResults.forEach((result) => {
    initialScores[result.principle] = 0;
  });

  const [principleScores, setPrincipleScores] = useState<{
    [key: string]: number;
  }>(() => {
    const scores: { [key: string]: number } = {};
    AgilePrinciplesResults.forEach((result) => {
      scores[result.principle] = 0;
    });
    return scores;
  });

  const [result, setResult] = useState<string | null>(null);

  const handleRadioChange = (value: string, principle: string) => {
    const numericValue = parseInt(value, 10);
    setPrincipleScores((prevScores) => ({
      ...prevScores,
      [principle]: prevScores[principle] + numericValue,
    }));

    setTimeout(() => {
      api?.scrollNext();
    }, 100);
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCounts(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const handleSubmit = () => {
    const maxScore = Math.max(...Object.values(principleScores));
    const topPrinciples = Object.keys(principleScores).filter(
      (principle) => principleScores[principle] === maxScore,
    );

    const resultDescriptions = topPrinciples
      .map(
        (principle) =>
          `• ${principle}: ${
            AgilePrinciplesResults.find((p) => p.principle === principle)
              ?.description
          }`,
      )
      .join("\n\n");

    setResult(
      `You align most with the following Agile Principle${
        topPrinciples.length > 1 ? "s" : ""
      }:\n\n${resultDescriptions}`,
    );
  };

  return (
    <>
      <h2 className="text-xl mb-4 text-center">
        Which Agile Principle Are You?
      </h2>
      <div className="mx-auto w-full px-4">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {AgilePrinciplesQuestions.map((question, index) => (
              <CarouselItem key={index}>
                <div className="p-6 bg-white rounded-lg w-full">
                  <span className="text-2xl font-semibold">
                    {question.question}
                  </span>
                  <AnswerGroup
                    question={question}
                    index={index}
                    onValueChange={value => handleRadioChange(value, question.principle)}
                  />
                </div>
              </CarouselItem>
            ))}
            <CarouselItem>
              <div className="p-6 bg-white rounded-lg w-full">
                <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                {result ? (
                  <div className="mt-4 text-lg whitespace-pre-line">
                    {result}
                  </div>
                ) : (
                  <Button onClick={handleSubmit} className="mt-4">
                    Submit
                  </Button>
                )}
                {result && (
                  <Link to="/" className="inline-block mt-6">
                    <Button className="bg-blue-500 hover:bg-blue-700 text-white">
                      Back to Main
                    </Button>
                  </Link>
                )}
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        {current <= AgilePrinciplesQuestions.length && (
          <div className="py-2 text-center text-sm text-muted-foreground">
            Question {current} of {AgilePrinciplesQuestions.length}
          </div>
        )}
        {current === AgilePrinciplesQuestions.length + 1 && (
          <div className="py-2 text-center text-sm text-muted-foreground">
            Conclusion
          </div>
        )}
      </div>
    </>
  );
};

export default WhichAgilePrincipleAreYou;
