import { useFormValuesStore } from "../../store/form-values";
import { cn } from "../../utils/cn";
import BottomNavigation from "../bottom-navigation";
import FormWrapper from "./form-wrapper";

export default function PickAddons() {
  const isMonthlyBilling = useFormValuesStore(
    (state) => state.isMonthlyBilling
  );
  const addOns = useFormValuesStore((state) => state.addOns);
  const toggleAddOn = useFormValuesStore((state) => state.toggleAddOn);

  const addOnsData = [
    {
      title: "Online service",
      description: "Access to multiplayer games",
      price: [1, 10],
    },
    {
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: [2, 20],
    },
    {
      title: "Customizable profile",
      description: "Custom theme on your profile",
      price: [2, 20],
    },
  ];
  return (
    <>
      <FormWrapper
        heading="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      >
        <div className="mt-4 grid gap-4">
          {addOnsData.map((addOnData) => (
            <div key={addOnData.title}>
              <label
                className={cn(
                  "ring-[1.5px] rounded px-4 py-2 ring-cool-gray/20 flex items-center gap-3",
                  addOns.includes(addOnData.title) && "ring-purplish-blue"
                )}
              >
                <input
                  type="checkbox"
                  className="size-5"
                  onChange={() => toggleAddOn(addOnData.title)}
                />
                <div>
                  <h3 className="font-medium text-marine-blue">
                    {addOnData.title}
                  </h3>
                  <p className="text-sm text-cool-gray">
                    {addOnData.description}
                  </p>
                </div>
                <p className="ml-auto text-purplish-blue text-sm">
                  +${addOnData.price[isMonthlyBilling ? 0 : 1]}/
                  {isMonthlyBilling ? "mo" : "yr"}
                </p>
              </label>
            </div>
          ))}
        </div>
      </FormWrapper>
      <BottomNavigation
        prevButtonHref="/select-plan"
        nextButtonHref="/finishing-up"
      />
    </>
  );
}
