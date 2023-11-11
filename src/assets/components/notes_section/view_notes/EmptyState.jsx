import Lottie from "lottie-react";
import emptyLogo from "../../../icons/emptyLogo.json";

function EmptyState({ message }) {
  return (
    <div className="flex flex-col w-full items-center gap-4 py-5">
      <div className="md:w-80">
        <Lottie animationData={emptyLogo} />
      </div>
      <p className="text-2xl font-bold uppercase">{message}</p>
    </div>
  );
}

export default EmptyState;
