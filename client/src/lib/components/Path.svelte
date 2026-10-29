<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';
	import { path } from '$lib/content';
</script>

<section id="path" class="scroll-mt-20 border-t border-tan/10 px-5 py-24 sm:px-8 sm:py-32">
	<div class="mx-auto max-w-6xl">
		<SectionHeading
			index="04"
			label="Path"
			title="Where the work comes from."
			lead="Industry, study, and the projects nobody assigned."
		/>

		<ol class="border-y border-tan/10">
			{#each path as entry, i (entry.org)}
				<li class="grid gap-4 border-b border-tan/10 py-8 last:border-b-0 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-12 md:py-10">
					<div class="flex items-start gap-4">
						<span class="mt-1 font-mono text-[10px] tracking-[0.2em] text-cream/60">
							{String(i + 1).padStart(2, '0')}
						</span>
						<div>
							<h3 class="font-display text-[clamp(1.4rem,2.6vw,1.9rem)] leading-tight text-cream">
								{entry.org}
							</h3>
							<p class="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-tan/70">{entry.role}</p>
						</div>
					</div>

					<p class="max-w-prose text-[13px] leading-relaxed text-cream/55 md:pt-1.5">
						{entry.description}
					</p>
				</li>
			{/each}
		</ol>
	</div>
</section>
