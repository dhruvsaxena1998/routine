"use client";
import CreateRoutineBottomSheet from "@/components/habits/CreateRoutineBottomSheet";
import RoutineCard from "@/components/habits/RoutineCard";
import { v4 as uuid } from "uuid";

import type { IRoutine } from "@/lib/types/routine";
import { useEffect, useState } from "react";

export default function Home() {
  const [routines, setRoutines] = useState<IRoutine[]>([]);

  useEffect(() => {
    const routines = localStorage.getItem("routines");

    if (routines) {
      setRoutines(JSON.parse(routines));
    }
  }, []);

  const onSubmitHandler = (values: Omit<IRoutine, "id">) => {
    const routine: IRoutine = {
      ...values,
      id: uuid(),
    };

    setRoutines((prev) => {
      const newRoutines = [...prev, routine];

      localStorage.setItem("routines", JSON.stringify(newRoutines));
      return newRoutines;
    });
  };

  const onIncrementCompletedTimes = (id: string) => {
    setRoutines((prev) => {
      const newRoutines = prev.map((routine) => {
        if (routine.id === id) {
          return {
            ...routine,
            completedTimes:
              routine.completedTimes + 1 >= routine.target
                ? routine.target
                : routine.completedTimes + 1,
          };
        }

        return routine;
      });

      localStorage.setItem("routines", JSON.stringify(newRoutines));
      return newRoutines;
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mx-auto md:w-1/2">
        <header className="sticky top-0 z-50 w-full bg-background/50 backdrop-blur-lg">
          <h1 className="p-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Routine
          </h1>
        </header>
        <div className="mx-auto my-8 space-y-4">
          {routines.length === 0 ? (
            <p className="text-center text-lg font-semibold">
              No routines found!
              <br />
              <span className="text-base font-normal">
                create a new routine to get started.
              </span>
            </p>
          ) : (
            routines.map((routine) => (
              <RoutineCard
                key={routine.id}
                routine={routine}
                onIncrement={onIncrementCompletedTimes}
              />
            ))
          )}
        </div>
      </div>
      <CreateRoutineBottomSheet onSubmitHandler={onSubmitHandler} />
    </div>
  );
}
