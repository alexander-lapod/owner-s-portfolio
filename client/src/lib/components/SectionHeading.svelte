<script lang="ts">
	type Props = {
		index: string;
		label: string;
		title: string;
		lead?: string;
	};

	let { index, label, title, lead }: Props = $props();
</script>

<div class="mb-12 sm:mb-16">
	<div class="mb-5 flex items-center gap-3">
		<span class="font-mono text-[10px] tracking-[0.3em] text-ember/80">{index}</span>
		<span class="h-px w-8 bg-tan/25"></span>
		<span class="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">{label}</span>
	</div>

	<div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
		<h2 class="max-w-2xl font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] tracking-tight text-cream">
			{title}
		</h2>
		{#if lead}
			<p class="max-w-sm text-sm leading-relaxed text-cream/60">{lead}</p>
		{/if}
	</div>
</div>
