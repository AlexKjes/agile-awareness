import { Question } from "./common";

export interface PrincipleQuestion extends Question {
  question: string;
  lowAnswer: string;
  highAnswer: string;
  principle: string;
}

export const createQuestion = (
  questionText: string,
  lowAnswer: string,
  highAnswer: string,
  principle: string,
): PrincipleQuestion => {
  return {
    question: questionText,
    lowAnswer: lowAnswer,
    highAnswer: highAnswer,
    principle: principle,
  };
};

export const AgilePrinciplesQuestions: PrincipleQuestion[] = [
  createQuestion(
    "I prioritize delivering valuable results to customers as early and consistently as possible.",
    "I rarely focus on early and continuous delivery to customers.",
    "I consistently prioritize early and continuous delivery of valuable results to customers.",
    "Customer Satisfaction through Early and Continuous Delivery",
  ),
  createQuestion(
    "I welcome and adapt to changes in project requirements, even late in the development process.",
    "I resist changes in project requirements, especially late in the development process.",
    "I readily embrace and adapt to changes in project requirements, even late in the development process.",
    "Embracing Changing Requirements",
  ),
  createQuestion(
    "I aim to deliver functional parts of the project frequently, preferring shorter delivery cycles.",
    "I prefer long delivery cycles and seldom release functional parts of the project.",
    "I strive for short delivery cycles and frequently release functional parts of the project.",
    "Frequent Delivery of Working Software",
  ),
  createQuestion(
    "I believe in daily collaboration between business stakeholders and the development team to ensure project success.",
    "I rarely collaborate with business stakeholders during the development process.",
    "I engage in daily collaboration with business stakeholders to ensure project success.",
    "Collaboration Between Business and Development",
  ),
  createQuestion(
    "I focus on surrounding myself with motivated team members and providing them with the necessary support and environment.",
    "I do not prioritize team motivation or support.",
    "I actively build and support a team of motivated individuals to foster a productive environment.",
    "Building Around Motivated Individuals",
  ),
  createQuestion(
    "I find face-to-face conversations to be the most effective way to convey information and solve problems.",
    "I prefer indirect communication methods over face-to-face conversations.",
    "I prioritize face-to-face conversations as the most effective means of communication and problem-solving.",
    "Face-to-Face Communication",
  ),
  createQuestion(
    "I consider the completion of functional software as the primary indicator of project progress.",
    "I rely more on documentation and plans than on functional software to measure progress.",
    "I use the completion of functional software as the main measure of project progress.",
    "Working Software as a Measure of Progress",
  ),
  createQuestion(
    "I promote a balanced work pace that can be maintained consistently over the long term without burnout.",
    "I often push the team towards an unsustainable work pace, leading to burnout.",
    "I ensure a sustainable work pace that can be maintained consistently to prevent burnout.",
    "Sustainable Development",
  ),
  createQuestion(
    "I continuously strive for technical excellence and prioritize good design to enhance the project's agility.",
    "I do not prioritize technical excellence or good design, focusing instead on quick fixes.",
    "I prioritize technical excellence and good design to enhance the project's agility.",
    "Continuous Attention to Technical Excellence and Good Design",
  ),
  createQuestion(
    "I focus on maximizing the amount of work not done by simplifying processes and avoiding unnecessary tasks.",
    "I often engage in unnecessary tasks and overly complex processes.",
    "I strive to simplify processes and eliminate unnecessary tasks to maximize efficiency.",
    "Simplicity in Work",
  ),
  createQuestion(
    "I believe that the best project outcomes emerge from self-organizing teams without heavy-handed management.",
    "I prefer to micromanage the team to ensure project outcomes.",
    "I trust self-organizing teams to achieve the best project outcomes without heavy-handed management.",
    "Self-Organizing Teams",
  ),
  createQuestion(
    "I regularly reflect on team performance and seek ways to improve and adjust our processes for better effectiveness.",
    "I seldom reflect on team performance or seek process improvements.",
    "I consistently reflect on team performance and actively seek ways to improve and adjust our processes.",
    "Regular Reflection and Adjustment",
  ),
];

export const AgilePrinciplesResults = [
  {
    principle: "Customer Satisfaction through Early and Continuous Delivery",
    description:
      "You prioritize delivering value to customers consistently and early, ensuring their needs are met continuously.",
  },
  {
    principle: "Embracing Changing Requirements",
    description:
      "You are flexible and adaptable, welcoming changes even in late stages to improve the project's outcome.",
  },
  {
    principle: "Frequent Delivery of Working Software",
    description:
      "You focus on delivering functional segments regularly, valuing shorter, iterative cycles.",
  },
  {
    principle: "Collaboration Between Business and Development",
    description:
      "You emphasize strong collaboration between business and development teams to achieve project goals.",
  },
  {
    principle: "Building Around Motivated Individuals",
    description:
      "You build and support teams composed of motivated individuals, fostering a productive environment.",
  },
  {
    principle: "Face-to-Face Communication",
    description:
      "You value direct, personal communication as the most effective way to share information and resolve issues.",
  },
  {
    principle: "Working Software as a Measure of Progress",
    description:
      "You measure progress primarily through the delivery of functional software rather than just documentation or plans.",
  },
  {
    principle: "Sustainable Development",
    description:
      "You advocate for a work pace that can be maintained sustainably, preventing burnout and ensuring long-term productivity.",
  },
  {
    principle: "Continuous Attention to Technical Excellence and Good Design",
    description:
      "You continuously seek technical excellence and prioritize good design to enhance the project's adaptability.",
  },
  {
    principle: "Simplicity in Work",
    description:
      "You aim to simplify processes and focus on essential tasks, avoiding unnecessary work to maximize efficiency.",
  },
  {
    principle: "Self-Organizing Teams",
    description:
      "You believe in empowering teams to organize themselves, trusting that they will find the best ways to achieve goals.",
  },
  {
    principle: "Regular Reflection and Adjustment",
    description:
      "You regularly assess and refine team processes to improve effectiveness and adaptability.",
  },
];
