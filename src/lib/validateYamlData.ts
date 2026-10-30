import z from "zod";

export const withValidatedYamlData = async <Output, T, U>(
    yamlData: unknown,
    schema: z.ZodType<Output, any>,
    onSuccess: (data: Output) => T | Promise<T>,
    onFailure: (e: z.ZodError) => U | Promise<U>
): Promise<Awaited<T> | Awaited<U>> => {
    const parsed = schema.safeParse(yamlData);

    if (!parsed.success) {
        return await onFailure(parsed.error);
    }

    return await onSuccess(parsed.data);
};
