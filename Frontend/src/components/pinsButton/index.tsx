import Button from "../button";

interface PinsButtonsProps {
  availablePins: number[];
  onPinClick: (number: number) => void;
}

const PinsButtons = ({ availablePins, onPinClick }: PinsButtonsProps) => (
  <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-6">
    {availablePins.map((number, index) => (
      <div
        className="w-[calc(20%-8px)] sm:w-[calc(16.66%-12px)] md:w-[calc(9%-16px)]"
        key={number}
      >
        <Button
          className={`w-full ${
            index === 10
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          }  text-white`}
          handleClick={() => onPinClick(number)}
        >
          {number}
        </Button>
      </div>
    ))}
  </div>
);

export default PinsButtons;
