import { cn } from "../utils/cn";
import { useLocation } from "react-router-dom";
import BgDesktop from "../assets/images/bg-sidebar-desktop.svg";

const steps = [
  {
    number: 1,
    text: "YOUR INFO",
  },
  {
    number: 2,
    text: "SELECT PLAN",
  },
  {
    number: 3,
    text: "ADD-ONS",
  },
  {
    number: 4,
    text: "SUMMARY",
  },
];

export default function Steps() {
  const pathname = useLocation().pathname;

  const pathToIndex = {
    "/": 0,
    "/select-plan": 1,
    "/pick-addons": 2,
    "/finishing-up": 3,
  };

  const currentStep =
    pathToIndex[pathname as keyof typeof pathToIndex] ??
    pathToIndex["/finishing-up"];

  return (
    <div className="flex md:flex-col gap-4 w-full md:rounded-md md:overflow-hidden md:min-h-full md:w-fit justify-center md:justify-start px-6 py-10 relative isolate md:pr-16">
      <img
        src={BgDesktop}
        alt=""
        className="hidden absolute top-0 left-0 h-full w-full object-cover -z-10 md:block"
      />
      {steps.map((step) => (
        <div className="flex gap-4 items-center text-white">
          <div
            className={cn(
              "size-10 border-2 flex justify-center items-center rounded-full border-white",
              currentStep === step.number - 1 && "bg-white text-marine-blue"
            )}
            key={step.number}
          >
            {step.number}
          </div>
          <div className="hidden md:block">
            <p className="text-pastel-blue leading-tight">STEP {step.number}</p>
            <p className="font-medium">{step.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
