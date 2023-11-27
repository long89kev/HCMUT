import type { PageData } from "$lib/data/PageData";

export function load(): PageData {
    return {
        title: "FAQ",
        description: "Have a burning question about us? You will likely find the answer here."
    };
}