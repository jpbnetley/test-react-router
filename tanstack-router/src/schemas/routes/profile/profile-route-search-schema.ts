import z from "zod";

export const profileRouteSearchSchema = z.object({
  name: z.string().optional(),
});

export type ProfileRouteSearch = z.infer<typeof profileRouteSearchSchema>;