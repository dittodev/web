"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="text-4xl font-bold">Oops! I messed up, sorry 🫣</p>
      <button className="bg-gray-800 p-2 rounded-lg" onClick={() => reset()}>
        Retry?
      </button>
    </div>
  );
}
