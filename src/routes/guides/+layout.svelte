<script lang="ts">
	import NavTreeView from "$lib/component/NavTreeView.svelte";
	import type { NavTreeNode } from "$lib/data/NavTreeNode";

    const tree: NavTreeNode = {
        label: "Home",
        href: "/guides",
        expanded: true,
        children: [
            {
                label: "Navigation",
                href: "/guides/navigation"
            },
            {
                label: "Traveling",
                href: "/guides/traveling"
            },
            {
                label:  "Mysteries",
                href: "/guides/mysteries",
            }
        ]
    };
</script>

<div class="w-full mx-auto max-w-6xl flex gap-4 flex-col md:flex-row">
    <div class="border-2 border-neutral rounded-lg p-4 md:self-start">
        <NavTreeView tree={tree} />
    </div>
    <article>
        <slot />
    </article>
</div>