"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CirclePlus } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

const createHabitSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
  target: z.coerce.number().positive().max(10),
});

interface CreateRoutineBottomSheetProps {
  onSubmitHandler: (values: any) => void;
}

const CreateRoutineBottomSheet: React.FC<CreateRoutineBottomSheetProps> = ({
  onSubmitHandler,
}) => {
  const [sheetIsOpen, setSheetIsOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof createHabitSchema>>({
    resolver: zodResolver(createHabitSchema),
    defaultValues: {
      name: "",
      description: "",
      target: 1,
    },
  });

  function onSubmit(values: z.infer<typeof createHabitSchema>) {
    onSubmitHandler(values);
    form.reset();
    setSheetIsOpen(false);
  }

  return (
    <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
      <SheetTrigger asChild>
        <div className="fixed bottom-4 right-4">
          <Button className="p-4 shadow-lg">
            <CirclePlus /> Add Routine
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent side={"bottom"}>
        <SheetHeader>
          <SheetTitle>Create New Routine</SheetTitle>
          <SheetDescription>
            Create a new routine to track your routines.
          </SheetDescription>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="text-left ml-2">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Take Medicines" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="text-left ml-2">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Vitamin Medicines" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="target"
                render={({ field }) => (
                  <FormItem className="text-left ml-2">
                    <FormLabel>Target / Day</FormLabel>
                    <FormDescription className="text-left">
                      How many times you want to complete this habit per day.
                    </FormDescription>
                    <FormControl>
                      <Input placeholder="e.g. 2" {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Create Routine</Button>
            </form>
          </Form>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CreateRoutineBottomSheet;
