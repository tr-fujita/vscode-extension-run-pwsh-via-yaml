import z from "zod";

export const validateYamlData = async <Output, T, U>(
    yamlData: unknown,
    schema: z.ZodType<Output, any>,
    onSuccess: (data: Output) => T,
    onFailure: (e: z.ZodError) => U
): Promise<Awaited<T | U>> => {
    const parsed = schema.safeParse(yamlData);

    if (!parsed.success) {
        return await onFailure(parsed.error);
    }

    return await onSuccess(parsed.data);
};
