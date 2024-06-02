"use client";

import Todo from "@/components/OneTodo";
import { TODOexecute, TODOinProccess, TODOsuccess } from "@/server";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="grid grid-cols-3 h-[100vh] w-full gap-[20px]">
        <div className="w-full">
          <div>To execute</div>
          <div className="w-full">
            {TODOexecute.map((e) => (
              <Todo
                type="execute"
                key={e.description.substring(0, 10)}
                description={e.description}
              />
            ))}
          </div>
        </div>

        <div className="w-full">
          <div>In progress</div>
          <div className="w-full">
            {TODOinProccess.map((e) => (
              <Todo
                type="inProccess"
                key={e.description.substring(0, 10)}
                description={e.description}
              />
            ))}
          </div>
        </div>

        <div className="w-full">
          <div>To execute</div>
          <div className="w-full">
            {TODOsuccess.map((e) => (
              <Todo
                type="success"
                key={e.description.substring(0, 10)}
                description={e.description}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
