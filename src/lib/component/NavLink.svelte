<script lang="ts">
    export let href: string;
    export let title: string;
</script>

<a href={href} class="no-underline flex flex-col items-center [&>div]:hover:w-full">
    <span class="font-bold text-lg">{title}</span>
    <div class="duration-150 origin-center h-1 w-0 bg-primary rounded-full"></div>
</a>