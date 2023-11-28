<script lang="ts">
	import { useRegisterSW } from 'virtual:pwa-register/svelte';
	const { needRefresh, updateServiceWorker, offlineReady } = useRegisterSW({
		onRegistered(r) {
			// uncomment following code if you want check for updates
			// r && setInterval(() => {
			//    console.log('Checking for sw update')
			//    r.update()
			// }, 20000 /* 20s for testing purposes */)
			console.log(`SW Registered: ${r}`);
		},
		onRegisterError(error) {
			console.log('SW registration error', error);
		}
	});
	const close = () => {
		offlineReady.set(false);
		needRefresh.set(false);
	};
	$: toast = $offlineReady || $needRefresh;
</script>

{#if toast}
	<div class="fixed w-full p-2 bottom-0">
		<div class="w-fit mx-auto md:mx-0 md:float-right bg-background rounded-lg border-2 border-neutral p-2" role="alert">
			{#if $offlineReady}
				<span>App ready to work offline.</span>
			{:else}
				<span>New content available,click on reload button to update.</span>
			{/if}
			<div class="w-full flex justify-end gap-2 mt-2">
				{#if $needRefresh}
					<button class="px-2 py-1 border-2 border-neutral bg-transparent rounded-lg duration-150 hover:bg-neutral active:bg-neutral" on:click={() => updateServiceWorker(true)}>Reload</button>
				{/if}
				<button class="px-2 py-1 border-2 border-neutral bg-transparent rounded-lg duration-150 hover:bg-neutral active:bg-neutral" on:click={close}>Close</button>
			</div>
		</div>
	</div>
{/if}
