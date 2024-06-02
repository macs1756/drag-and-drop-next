import Todo from "@/components/OneTodo";
import { TODOexecute } from "@/server";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      noHydration={true}
    >
      <div className="grid grid-cols-3 h-[100vh] w-full gap-[10px]">
        <div className="w-full">
          <div>To execute</div>
          <div className="border w-full">
            {TODOexecute.map((e) => (
              <Todo
                key={e.description.substring(0, 10)}
                description={e.description}
              />
            ))}
          </div>
        </div>

        <div className="w-full">
          <div>In progress</div>
          <div className="border w-full">tasks</div>
        </div>

        <div className="w-full">
          <div>To execute</div>
          <div className="border w-full">tasks</div>
        </div>
      </div>
    </main>
  );
}
