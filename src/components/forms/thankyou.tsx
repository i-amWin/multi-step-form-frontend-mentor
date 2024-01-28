import ThankYouIcon from "../../assets/images/icon-thank-you.svg";

export default function ThankYou() {
  return (
    <div className="px-6 py-14 bg-white rounded-lg shadow-md mb-10 mx-6 space-y-3 text-center max-w-[26rem] md:shadow-none">
      <img src={ThankYouIcon} alt="" className="mx-auto size-16" />
      <h2 className="text-marine-blue font-bold text-2xl">Thank You!</h2>
      <p className="text-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support please feel free to email us at
        support @loremgaming.com.
      </p>
    </div>
  );
}
