<script lang="ts">
	import type { NavTreeNode } from '$lib/data/NavTreeNode';

	export let tree: NavTreeNode;

    let expanded = false;
</script>

<div>
	<div class="flex flex-row items-center gap-2">
		{#if tree.children}
			<button class="w-6 h-6 grid place-items-center rounded-lg duration-150 bg-transparent hover:bg-neutral" on:click={() => expanded = !expanded}>
				<svg width="8" height="16" viewBox="0 0 64 128" class="duration-150" style="transform: {expanded ? "rotate(90deg)" : "none"};" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_28_2)">
						<path d="M63.5 64L0 0V32L32 64L0 96V128L63.5 64Z" fill="white" />
					</g>
					<defs>
						<clipPath id="clip0_28_2">
							<rect width="64" height="128" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</button>
		{:else}
            <!-- put an empty div-->
            <div class="w-6 h-6"></div>
        {/if}

		<!-- use <a> if href exists -->
		{#if tree.href}
			<a class="no-underline px-2 py-1 rounded-lg duration-150 bg-transparent hover:bg-neutral" href={tree.href}>{tree.label}</a>
		{:else}
			<p>{tree.label}</p>
		{/if}
	</div>

	{#if tree.children && expanded}
		<div class="ml-6">
			{#each tree.children as child}
				<svelte:self tree={child} />
			{/each}
		</div>
	{/if}
</div>
