
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="grid grid-cols-3">

        <div>
          1
        </div>

        <div>
          2
        </div>

        <div>
          3
        </div>

      </div>
    </main>
  );
}
