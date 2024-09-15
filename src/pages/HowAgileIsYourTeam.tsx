import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Label } from "../components/ui/label"


interface Question {
    question: String,
    lowAnswer: String,
    highAnswer: String
}

const createQuestion = (questionText: String, lowAnswer: String, highAnswer: String): Question => {
    return {
        question: questionText,
        lowAnswer: lowAnswer,
        highAnswer: highAnswer
    } as Question 
}

const questions = [
    createQuestion(
        "How frequently do you deliver working increments of the product to stakeholders?",
        "Rarely (Once a year or more)", "Very Frequently (Every week or less)"
    ),
    createQuestion(
        "How well does your team adapt to changing requirements, even late in the development process?",
        "We struggle with changes", "We embrace changes easily"
    ),
    createQuestion(
        "How often does your team collaborate directly with stakeholders (e.g., customers, business users) to ensure alignment?",
        "Rarely (Once per project)", "Very frequently (Daily or weekly)"
    ),
    createQuestion(
        "How clear and transparent is the communication between team members and stakeholders?",
        "Communication is unclear and infrequent",
        "Communication is highly transparent and consistent"
    ),
    createQuestion(
        "How much does your team prioritize delivering valuable, working software over documentation or non-functional activities?",
        "Documentation and process are prioritized over software", "Working software is always the priority"
    ),
    createQuestion(
        "How empowered is your team to make decisions and self-organize around tasks?",
        "Decisions are made top-down, and we have limited autonomy", "The team is fully empowered and self-organizing"
    ),
    createQuestion(
        "How sustainable is the pace at which your team works?",
        "We frequently experience burnout or overwork", "We maintain a constant, sustainable pace throughout"
    ),
    createQuestion(
        "How often does your team review its processes and practices to identify areas for improvement?",
        "Rarely (At the end of a project or less)", "Very frequently (At least once per iteration)"
    ),
    createQuestion(
        "How well does your team collaborate and communicate internally (within the development team)?",
        "Communication is poor, and we often face misunderstandings", "Communication is excellent, and collaboration is seamless"
    ),
    createQuestion(
        "How frequently do you incorporate feedback from stakeholders into your product development?",
        "Rarely (Only at the end of the project)", "Very frequently (Continuously during the project)"
    )
]

const results = [
    "Highly Agile Project – Your project embodies most principles of agility, with excellent collaboration, adaptability, and frequent delivery of working software.",
    "Moderately Agile Project – Your project is fairly agile but could improve in certain areas, like embracing change or stakeholder collaboration.",
    "Low Agility – Your project adopts some agile practices but struggles with key elements such as frequent delivery, feedback loops, and adaptability.",
    "Minimal Agility – Your project follows traditional methodologies or lacks agility in critical areas like collaboration, adaptability, and iterative progress."
]

interface HowAgileIsYourTeamProps {
    questions: Question[]
}

export const  HowAgileIsYourTeam = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  var sum:number = 0;

  const radioChange = (value: String) => {
    sum += +value
    setTimeout(() => api.scrollNext(), 100);
  }
 
  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <>
        <h2 className="text-xl">How Agile Is Your Team?</h2>
        <div className="mx-auto max-w-s">
      <Carousel setApi={setApi} className="max-w-s">
        <CarouselContent>
          {questions.map((question, index) => (
            <CarouselItem key={index}>
              
                  <span className="text-4xl font-semibold">{question.question}</span>
                  <br/>
                  <div className="mx-auto width-full pt-10">
                  <RadioGroup onValueChange={event => radioChange(event)}>
                    <div className="flex flex-wrap">
                        <div className="flex items-center space-x-2 w-32" >{question.lowAnswer}</div>
                    {Array.from({length: 5}).map((_, i) => 
                      <div className="flex flex-auto items-center space-x-2 w-16 justify-center">
                    <RadioGroupItem value={i + 1 + ""} id={"option-" + i} onChange={(event) => radioChange(event.currentTarget.value)} />
                    <Label htmlFor={"option-" + i}>{i+1}</Label>
                  </div>
                )}
                    <div className="flex items-center space-x-2 w-32">{question.lowAnswer}</div>
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
                    {sum < 21 ? results[3]   : ""}
                    </div>
                </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      {current < 11 ? <div className="py-2 text-center text-sm text-muted-foreground">
        Question {current} of 10
      </div> : ""}
    </div>
    </>

  )
}
