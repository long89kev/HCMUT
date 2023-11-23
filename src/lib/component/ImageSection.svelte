<script lang="ts">
    export let src: string;
    export let alt: string;
    export let width: number;
    export let height: number;
    export let align: "left" | "right";

    let clazz = "";
    export { clazz as class };

    let innerWidth = 0;
</script>

<svelte:window bind:innerWidth={innerWidth} />

<div class="flex items-center gap-16 flex-col md:flex-row {clazz}">
    <!-- 768 = md in tailwind -->
    {#if innerWidth < 768}
        <img src={src} alt={alt} width={width} height={height} />
        <div class="w-full">
            <slot />
        </div>
    {:else}
        {#if align === "left"}
            <img src={src} alt={alt} width={width} height={height} />
        {/if}
        <div class="w-full self-stretch">
            <slot />
        </div>
        {#if align === "right"}
            <img src={src} alt={alt} width={width} height={height} />
        {/if}
    {/if}
</div>