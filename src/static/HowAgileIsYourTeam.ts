import { Question } from "./common";


export const createQuestion = (
  questionText: String,
  lowAnswer: String,
  highAnswer: String,
): Question => {
  return {
    question: questionText,
    lowAnswer: lowAnswer,
    highAnswer: highAnswer,
  };
};

export const questionImages = [
  "./brace-yourself-deployment.png",
  "./changes.png",
  "./bad_design.png",
  "./smoke_screen.png",
  "./no_docs.png",
  "./adults.png",
  "./britney_stress.png",
  "./review.png",
  "./pair-programming.png",
  "./feedback.png"
]

export const answerImages = [
  "./agile_burn.png",
  "./agile_waterfall.png",
  "./burndown.png",
  "./backlog.png"
]


export const Questions = [
  createQuestion(
    "How frequently do you deliver working increments of the product to stakeholders?",
    "Rarely (Once a year or more)",
    "Very Frequently (Every week or less)",
  ),
  createQuestion(
    "How well does your team adapt to changing requirements, even late in the development process?",
    "We struggle with changes",
    "We embrace changes easily",
  ),
  createQuestion(
    "How often does your team collaborate directly with stakeholders (e.g., customers, business users) to ensure alignment?",
    "Rarely (Once per project)",
    "Very frequently (Daily or weekly)",
  ),
  createQuestion(
    "How clear and transparent is the communication between team members and stakeholders?",
    "Communication is unclear and infrequent",
    "Communication is highly transparent and consistent",
  ),
  createQuestion(
    "How much does your team prioritize delivering valuable, working software over documentation or non-functional activities?",
    "Documentation and process are prioritized over software",
    "Working software is always the priority",
  ),
  createQuestion(
    "How empowered is your team to make decisions and self-organize around tasks?",
    "Decisions are made top-down, and we have limited autonomy",
    "The team is fully empowered and self-organizing",
  ),
  createQuestion(
    "How sustainable is the pace at which your team works?",
    "We frequently experience burnout or overwork",
    "We maintain a constant, sustainable pace throughout",
  ),
  createQuestion(
    "How often does your team review its processes and practices to identify areas for improvement?",
    "Rarely (At the end of a project or less)",
    "Very frequently (At least once per iteration)",
  ),
  createQuestion(
    "How well does your team collaborate and communicate internally (within the development team)?",
    "Communication is poor, and we often face misunderstandings",
    "Communication is excellent, and collaboration is seamless",
  ),
  createQuestion(
    "How frequently do you incorporate feedback from stakeholders into your product development?",
    "Rarely (Only at the end of the project)",
    "Very frequently (Continuously during the project)",
  ),
];

export const Results = [
  "Minimal Agility – Your project follows traditional methodologies or lacks agility in critical areas like collaboration, adaptability, and iterative progress.",
  "Low Agility – Your project adopts some agile practices but struggles with key elements such as frequent delivery, feedback loops, and adaptability.",
  "Moderately Agile Project – Your project is fairly agile but could improve in certain areas, like embracing change or stakeholder collaboration.",
  "Highly Agile Project – Your project embodies most principles of agility, with excellent collaboration, adaptability, and frequent delivery of working software.",
];
