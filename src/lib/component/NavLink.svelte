<script lang="ts">
	import { page } from "$app/stores";

    export let href: string;
    export let title: string;

    $: focused = $page.url.pathname === href;
</script>

<a href={href} class="no-underline flex flex-col items-center [&>div]:hover:w-full [&>span]:hover:-translate-y-1 {focused ? "[&>div]:w-full" : ""}">
    <span class="duration-150 font-bold text-lg">{title}</span>
    <div class="duration-150 origin-center h-1 w-0 bg-primary rounded-full"></div>
</a>