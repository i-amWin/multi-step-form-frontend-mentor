import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type Plan = "Arcade" | "Advanced" | "Pro";

interface FormValuesState {
  name: string;
  email: string;
  phone: string;
  plan: Plan;
  isMonthlyBilling: boolean;
  addOns: string[];
}

interface FormValuesActions {
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setPlan: (plan: Plan) => void;
  setIsMonthlyBilling: (isMonthlyBilling: boolean) => void;
  toggleAddOn: (addOn: string) => void;
}

const initialState: FormValuesState = {
  name: "",
  email: "",
  phone: "",
  plan: "Arcade",
  isMonthlyBilling: true,
  addOns: [],
};

export const useFormValuesStore = create<FormValuesState & FormValuesActions>()(
  immer((set) => ({
    ...initialState,
    setName: (name) => set((state) => void (state.name = name)),
    setEmail: (email) => set((state) => void (state.email = email)),
    setPhone: (phone) => set((state) => void (state.phone = phone)),
    setPlan: (plan) => set((state) => void (state.plan = plan)),
    setIsMonthlyBilling: (isMonthlyBilling) =>
      set((state) => void (state.isMonthlyBilling = isMonthlyBilling)),
    toggleAddOn: (addOn) =>
      set((state) => {
        const index = state.addOns.indexOf(addOn);
        if (index === -1) {
          state.addOns.push(addOn);
        } else {
          state.addOns.splice(index, 1);
        }
      }),
  }))
);
