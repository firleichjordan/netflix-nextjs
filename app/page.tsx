import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/sign-in");
  } else {
    return redirect("/home");
  }

  // return (
  //   <div className="m-5">
  //     <Button>Click me</Button>
  //     <h1>{session?.user?.name}</h1>
  //     <img src={session?.user?.image} alt="" />
  //   </div>
  // );
}
