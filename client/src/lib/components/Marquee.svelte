<script lang="ts">
	import { marquee } from '$lib/content';

	const items = [...marquee, ...marquee];
</script>

<div
	class="marquee-pause relative overflow-hidden border-y border-tan/10 bg-cocoa/20 py-4"
	aria-hidden="true"
>
	<div class="marquee-track">
		{#each items as item, i (i)}
			<span class="flex items-center whitespace-nowrap">
				<span class="px-6 font-mono text-[11px] uppercase tracking-[0.28em] text-cream/60">{item}</span>
				<span class="text-ember/50">✳</span>
			</span>
		{/each}
	</div>
</div>
