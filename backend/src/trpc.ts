import { initTRPC } from "@trpc/server";

const trpc = initTRPC.create();

const ideas = [
  {
    id: 1,
    title: "Smart Study Planner",
    description:
      "An app that creates personalized study schedules based on your courses and deadlines.",
  },
  {
    id: 2,
    title: "Campus Navigation",
    description:
      "A mobile app that helps students navigate large university campuses using AR technology.",
  },
  {
    id: 3,
    title: "Virtual Study Groups",
    description:
      "A platform for students to form virtual study groups and collaborate on assignments.",
  },
];

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas };
  }),
});



export type TrpcRouter = typeof trpcRouter;
