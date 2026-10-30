import z from "zod";

// yamlファイルの構造を指定します。
// この構造に従わないyamlファイルは実行されません。
export const yamlSchema = z.object({
    script_execution: z.object({
        name: z.string().optional(),
        path: z.string(),
        arguments: z.string().or(z.null())
    })
});


export const AppConfig = {
    // 実行したいyamlファイルについて定義しています。
    yaml: {
        path: "2_Env/41_VsCode/62_ExMak/scripts/hello-world.yaml",
        schema: yamlSchema
    }
};
