"use client";
import CreateRoutineBottomSheet from "@/components/habits/CreateRoutineBottomSheet";
import HabitCard from "@/components/habits/HabitCard";

export default function Home() {
  const habits = [
    { id: 1, name: "Drink Water" },
    { id: 2, name: "Read a book" },
    { id: 3, name: "Exercise" },
  ];

  const onSubmitHandler = (values: any) => {
    console.log(values);
  };

  return (
    <div className="p-4">
      <div className="container mx-auto">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Routine
        </h1>
        <div className="mx-auto my-8 space-y-4">
          {habits.map((habit) => (
            <HabitCard key={habit.id} habitName={habit.name} />
          ))}
        </div>
      </div>
      <CreateRoutineBottomSheet onSubmitHandler={onSubmitHandler} />
    </div>
  );
}
