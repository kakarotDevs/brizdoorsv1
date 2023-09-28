import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/new-user"
        afterSignInUrl="/new-user"
      />
    </div>
  );
}
