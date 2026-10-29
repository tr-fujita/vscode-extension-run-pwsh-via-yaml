import z from "zod";

export const yamlSchema = z.object({
    script_execution: z.object({
        name: z.string().optional(),
        path: z.string(),
        arguments: z.string().or(z.null())
    })
});
