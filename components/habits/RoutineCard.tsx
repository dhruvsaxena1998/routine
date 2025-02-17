"use client";

import React from "react";
import RoutineCompletionButton from "./RoutineCompletionButton";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import type { IRoutine } from "@/lib/types/routine";

export interface RoutineCardProps {
  routine: IRoutine;
  onIncrement: (id: string) => void;
}

const RoutineCard: React.FC<RoutineCardProps> = ({ routine, onIncrement }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link href={"/view/" + routine.id}>{routine.name}</Link>
        </CardTitle>
        <CardDescription>{routine.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <RoutineCompletionButton
          completedTimes={routine.completedTimes}
          target={routine.target}
          onClick={() => onIncrement(routine.id)}
        />
      </CardContent>
    </Card>
  );
};

export default RoutineCard;
