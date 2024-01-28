interface FormWrapperProps {
  heading: string;
  description: string;
  children: React.ReactNode;
}

export default function FormWrapper({
  heading,
  description,
  children,
}: FormWrapperProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md md:shadow-none mb-10 mx-6 max-w-[26rem]">
      <h2 className="text-marine-blue font-bold text-2xl mb-1">{heading}</h2>
      <p className="text-cool-gray">{description}</p>

      {children}
    </div>
  );
}
