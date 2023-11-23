<script lang="ts">
    export let src: string;
    export let alt: string;
    export let width: number;
    export let height: number;
    export let align: "left" | "right";

    let clazz = "";
    export { clazz as class };
</script>

<div class="gap-4 {clazz}">
    <div class="flex flex-col items-center gap-4 md:hidden">
        <img src={src} alt={alt} width={width} height={height} />
        <div class="w-full">
            <slot />
        </div>
    </div>
    <div class="hidden md:flex md:flex-row md:gap-4">
        {#if align === "left"}
            <img src={src} alt={alt} width={width} height={height} />
        {/if}
        <div class="w-full self-stretch">
            <slot />
        </div>
        {#if align === "right"}
            <img src={src} alt={alt} width={width} height={height} />
        {/if}
    </div>
</div>