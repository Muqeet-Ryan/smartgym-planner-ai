import { useAuth } from "../context/authContext";
import { RedirectToSignIn, SignedIn } from "@neondatabase/neon-js/auth/react";

const Onboarding = () => {
  const { user } = useAuth();

  if (!user) {
    return <RedirectToSignIn />;
  }

  return (
    <SignedIn>
      <div>Onboarding</div>
    </SignedIn>
  );
};

export default Onboarding;
