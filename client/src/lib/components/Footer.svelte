<script lang="ts">
	import { onMount } from 'svelte';
	import { profile, site } from '$lib/content';

	let clock = $state('--:--:--');

	onMount(() => {
		const format = new Intl.DateTimeFormat('en-GB', {
			timeZone: profile.timezone,
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: false
		});

		const tick = () => {
			clock = format.format(new Date());
		};

		tick();
		const id = setInterval(tick, 1000);
		return () => clearInterval(id);
	});
</script>

<footer class="border-t border-tan/10 px-5 py-8 sm:px-8">
	<div
		class="mx-auto flex max-w-6xl flex-col gap-4 font-mono text-[9px] uppercase tracking-[0.18em] text-cream/55 sm:flex-row sm:items-center sm:justify-between"
	>
		<p>Signature Work · Established {site.established}</p>
		<p class="hidden sm:block">SvelteKit · static · no server</p>
		<div class="flex items-center gap-4">
			<span aria-label={`Current time in Surabaya, ${clock}`}>{clock} WIB</span>
			<a href="#top" class="link-quiet uppercase tracking-[0.18em]">Top ↑</a>
		</div>
	</div>
</footer>
