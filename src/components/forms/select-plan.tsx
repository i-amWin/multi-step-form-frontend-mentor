import ArcadeIcon from "../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../assets/images/icon-advanced.svg";
import ProIcon from "../../assets/images/icon-pro.svg";
import FormWrapper from "./form-wrapper";
import { Plan, useFormValuesStore } from "../../store/form-values";
import BottomNavigation from "../bottom-navigation";

export default function SelectPlan() {
  const selectedPlan = useFormValuesStore((state) => state.plan);
  const isMonthlyBilling = useFormValuesStore(
    (state) => state.isMonthlyBilling
  );

  const setPlan = useFormValuesStore((state) => state.setPlan);
  const setIsMonthlyBilling = useFormValuesStore(
    (state) => state.setIsMonthlyBilling
  );

  const plans = [
    {
      icon: ArcadeIcon,
      title: "Arcade",
      price: [9, 90],
    },
    {
      icon: AdvancedIcon,
      title: "Advanced",
      price: [12, 120],
    },
    {
      icon: ProIcon,
      title: "Pro",
      price: [15, 150],
    },
  ];

  return (
    <>
      <FormWrapper
        heading="Select your plan"
        description="You have the option of monthly or yearly billing."
      >
        <div className="md:flex gap-4">
          {plans.map((plan) => (
            <label key={plan.title} className="flex-1">
              <input
                type="radio"
                defaultChecked={plan.title === selectedPlan}
                name="plans"
                className="peer appearance-none"
                onChange={() => setPlan(plan.title as Plan)}
              />

              <div className="ring-[1.5px] ring-cool-gray/20 peer-checked:ring-purplish-blue flex gap-4 px-4 py-2 rounded peer-checked:bg-magnolia md:flex-col md:items-center">
                <img src={plan.icon} alt="" />
                <div>
                  <h3 className="font-medium text-marine-blue">{plan.title}</h3>
                  <p className="text-sm text-cool-gray">
                    ${plan.price[isMonthlyBilling ? 0 : 1]}/
                    {isMonthlyBilling ? "mo" : "yr"}
                  </p>
                  {!isMonthlyBilling && (
                    <p className="text-marine-blue text-xs">2 months free</p>
                  )}
                </div>
              </div>
            </label>
          ))}
        </div>

        <div className="bg-magnolia rounded px-4 mt-6 flex py-3 justify-center gap-4">
          <p
            className={isMonthlyBilling ? "text-marine-blue" : "text-cool-gray"}
          >
            Monthly
          </p>
          <label className="bg-marine-blue h-6 w-12 inline-block rounded-full relative">
            <input
              type="checkbox"
              className="appearance-none peer"
              checked={!isMonthlyBilling}
              onChange={() => setIsMonthlyBilling(!isMonthlyBilling)}
            />

            <div className="size-4 bg-white absolute left-1 top-1 peer-checked:translate-x-6 transition-transform rounded-full"></div>
          </label>
          <p
            className={
              !isMonthlyBilling ? "text-marine-blue" : "text-cool-gray"
            }
          >
            Yearly
          </p>
        </div>
      </FormWrapper>
      <BottomNavigation prevButtonHref="/" nextButtonHref="/pick-addons" />
    </>
  );
}
