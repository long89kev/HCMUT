<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { pwaInfo } from 'virtual:pwa-info'; 
	import Header from '$lib/component/Header.svelte';
	import Footer from '$lib/component/Footer.svelte';

	$: pathname = $page.url.pathname;
	$: title = `${$page.data.title ?? 'Untitled'} | HCMUT Maps & Guides`;
	$: description = $page.data.description ?? 'HCMUT Maps & Guides';
	$: url = `https://hcmut.reimnop.com${pathname}`;
	$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '' 
</script>

<svelte:head>
	{@html webManifestLink}

	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta property="twitter:title" content={title} />

	<meta name="description" content={description} />
	<meta name="og:description" content={description} />
	<meta name="twitter:description" content={description} />

	<link rel="canonical" href={url} />
	<meta name="og:url" content={url} />
	<meta name="twitter:url" content={url} />
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="p-4">
		<slot />
	</main>
	<div class="mt-auto">
		<Footer />
	</div>
</div>
