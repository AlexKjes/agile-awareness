import { Question } from "../static/common"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"


interface Props {
    question: Question,
    index: number,
    onValueChange(value: string): void 
}


export const AnswerGroup = ({question, index, onValueChange}: Props) => {

    return (
        <div className="mt-6">
        <RadioGroup
          onValueChange={onValueChange}
        >
          <div className="flex items-center space-x-4 justify-center align-center">
            <Label className="w-1/3 text-right">
              {question.lowAnswer}
            </Label>
            <div className="flex space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <RadioGroupItem
                    value={(i + 1).toString()}
                    id={`option-${index}-${i}`}
                    className="radio-button"
                  />
                  <Label htmlFor={`option-${index}-${i}`}>
                    {i + 1}
                  </Label>
                </div>
              ))}
            </div>
            <Label className="w-1/3 text-left">
              {question.highAnswer}
            </Label>
          </div>
        </RadioGroup>
      </div>
    )
}