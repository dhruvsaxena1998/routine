"use client";

import React, { useState } from "react";
import HabitCompletionButton from "./HabitCompletionButton";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface HabitCardProps {
  habitName: string;
}

const HabitCard: React.FC<HabitCardProps> = ({ habitName }) => {
  const target = 4;
  const [completedTime, setCompletedTimes] = useState<number>(0);

  const incrementCompletedTimes = () => {
    setCompletedTimes((prev) => (prev + 1 > target ? target : prev + 1));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <div></div>
        <HabitCompletionButton
          completedTimes={completedTime}
          target={target}
          onClick={incrementCompletedTimes}
        ></HabitCompletionButton>
      </CardContent>
    </Card>
  );
};

export default HabitCard;
