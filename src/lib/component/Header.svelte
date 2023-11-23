<script lang="ts">
    import Logo from "$lib/assets/logo.svg";
    import Hcmut from "$lib/assets/hcmut.png";
	import NavLink from "./NavLink.svelte";
</script>

<header class="w-full px-8 border-b-2 border-neutral flex flex-col md:flex-row md:justify-between">
    <nav class="my-4 flex items-center justify-between gap-6">
        <a href="https://hcmut.edu.vn/" class="duration-150 scale-100 hover:scale-105">
            <img src={Hcmut} alt="HCMUT Logo" width="64" height="64" />
        </a>
        <a href="/" class="duration-150 scale-100 hover:scale-105">
            <img src={Logo} alt="Logo" width="64" height="64" />
        </a>
    </nav>
    <nav class="my-4 flex flex-wrap items-center justify-between gap-6">
        <NavLink href="/" title="Home" />
        <NavLink href="/maps" title="Maps" />
        <NavLink href="/guides" title="Guides" />
        <NavLink href="/faq" title="FAQ" />
    </nav>
</header>