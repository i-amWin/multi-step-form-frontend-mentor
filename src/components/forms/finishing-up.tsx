import { useFormValuesStore } from "../../store/form-values";
import BottomNavigation from "../bottom-navigation";
import FormWrapper from "./form-wrapper";

export default function FinishingUp() {
  const isMonthlyBilling = useFormValuesStore(
    (state) => state.isMonthlyBilling
  );

  const setIsMonthlyBilling = useFormValuesStore(
    (state) => state.setIsMonthlyBilling
  );

  return (
    <>
      <FormWrapper
        heading="Finishing up"
        description="Double-check everything looks OK before confirming."
      >
        <div className="bg-magnolia rounded mt-4 p-4">
          <div className="flex justify-between items-center border-b pb-3 font-medium text-marine-blue">
            <div>
              <h3>Arcade({isMonthlyBilling ? "Monthly" : "Yearly"})</h3>
              <button
                className="underline text-cool-gray text-sm font-normal"
                onClick={() => setIsMonthlyBilling(!isMonthlyBilling)}
                type="button"
              >
                Change
              </button>
            </div>
            <p>
              ${isMonthlyBilling ? 9 : 90}/{isMonthlyBilling ? "mo" : "yr"}
            </p>
          </div>

          <p className="pt-3 flex justify-between">
            <span className="text-cool-gray">Online service</span>
            <span className="text-marine-blue">
              +${isMonthlyBilling ? 1 : 10}/{isMonthlyBilling ? "mo" : "yr"}
            </span>
          </p>
          <p className="pt-3 flex justify-between">
            <span className="text-cool-gray">Larger storage</span>
            <span className="text-marine-blue">
              +${isMonthlyBilling ? 2 : 20}/{isMonthlyBilling ? "mo" : "yr"}
            </span>
          </p>
        </div>

        <p className="mt-4 px-4 flex justify-between">
          <span className="text-cool-gray">
            Total (per {isMonthlyBilling ? "month" : "year"})
          </span>
          <span className="text-purplish-blue font-medium">
            +${isMonthlyBilling ? 12 : 120}/{isMonthlyBilling ? "mo" : "yr"}
          </span>
        </p>
      </FormWrapper>
      <BottomNavigation
        prevButtonHref="/pick-addons"
        nextButtonHref="/thankyou"
        nextButtonLabel="Continue"
      />
    </>
  );
}
