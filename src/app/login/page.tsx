"use client";
import Login from "@/components/inputForms/Login";
import BaseCard from "@/components/shared/card/BaseCard";

export default function LoginPage() {
  return (
    <div className="flex flex-row justify-center items-center w-screen h-[calc(100vh-100px-2rem-2.5rem)]">
      <BaseCard
        title={"Login"}
        className="flex flex-col divide-gray-400 divide-x-0 w-1/4 border-4 border-white rounded-3xl bg-slate-500"
      >
        <div className="w-full py-10 px-10">
          <Login />
        </div>
      </BaseCard>
    </div>
  );
}
