import Button from "./ui/button";
import { Link } from "react-router-dom";

interface BottomNavigationProps {
  nextButtonHref: string;
  prevButtonHref?: string;
  nextButtonLabel?: string;
}

export default function BottomNavigation({
  prevButtonHref,
  nextButtonHref,
  nextButtonLabel,
}: BottomNavigationProps) {
  return (
    <div className="fixed md:relative bottom-0 left-0 right-0 bg-white px-6 py-4 flex justify-between">
      {!!prevButtonHref && (
        <Button variant="ghost" asChild>
          <Link to={prevButtonHref}>Go Back</Link>
        </Button>
      )}
      <Button
        variant={nextButtonLabel ? "secondary" : "primary"}
        asChild
        className="ml-auto"
      >
        <Link to={nextButtonHref}>{nextButtonLabel || "Next Step"}</Link>
      </Button>
    </div>
  );
}
