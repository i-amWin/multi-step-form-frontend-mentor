import { Input } from "../ui/input";
import FormWrapper from "./form-wrapper";
import { useFormValuesStore } from "../../store/form-values";
import BottomNavigation from "../bottom-navigation";

export default function PersonalProfile() {
  const name = useFormValuesStore((state) => state.name);
  const email = useFormValuesStore((state) => state.email);
  const phone = useFormValuesStore((state) => state.phone);

  const setName = useFormValuesStore((state) => state.setName);
  const setEmail = useFormValuesStore((state) => state.setEmail);
  const setPhone = useFormValuesStore((state) => state.setPhone);

  return (
    <>
      <FormWrapper
        heading="Personal info"
        description="Please provide your name, email address, and phone number."
      >
        <div className="space-y-4 mt-4">
          <Input
            label="Name"
            placeholder="e.g. Stephen King"
            value={name}
            onChange={setName}
          />

          <Input
            label="Email Address"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            onChange={setEmail}
            type="email"
          />

          <Input
            label="Phone Number"
            placeholder="e.g. +1 234 567 890"
            value={phone}
            onChange={setPhone}
            type="tel"
          />
        </div>
      </FormWrapper>
      <BottomNavigation nextButtonHref="/select-plan" />
    </>
  );
}
