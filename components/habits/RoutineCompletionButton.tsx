"use client";

import { cx } from "class-variance-authority";
import React from "react";
import { Button } from "@/components/ui/button";

interface RoutineCompletionButton {
  completedTimes: number;
  target: number;
  onClick: () => void;
}

const RoutineCompletionButton: React.FC<RoutineCompletionButton> = ({
  completedTimes,
  target,
  onClick,
}) => {
  const isTargetMet = completedTimes >= target;

  return (
    <Button
      className={cx({
        "bg-green-500 hover:bg-green-700 text-white": isTargetMet,
        "bg-gray-100 hover:bg-gray-200 text-black": !isTargetMet,
      }, "w-full")}
      onClick={onClick}
    >
      <span>{completedTimes}</span> / <span>{target}</span>
    </Button>
  );
};

export default RoutineCompletionButton;
