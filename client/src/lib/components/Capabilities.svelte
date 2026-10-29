<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';
	import { capabilities } from '$lib/content';
</script>

<section id="capabilities" class="scroll-mt-20 border-t border-tan/10 px-5 py-24 sm:px-8 sm:py-32">
	<div class="mx-auto max-w-6xl">
		<SectionHeading
			index="03"
			label="Capabilities"
			title="The stack I reach for."
			lead="Chosen for fit, not fashion. Every column here has shipped something real."
		/>

		<div class="grid gap-px overflow-hidden rounded-sm border border-tan/10 bg-tan/10 sm:grid-cols-2 lg:grid-cols-4">
			{#each capabilities as group (group.label)}
				<div class="bg-espresso/70 p-6">
					<h3 class="mb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-ember/80">
						{group.label}
					</h3>
					<ul class="space-y-2.5">
						{#each group.items as item (item)}
							<li class="group/item flex items-baseline gap-2.5 text-[13px] text-cream/70">
								<span
									class="h-px w-2.5 shrink-0 translate-y-[-3px] bg-tan/25 transition-all duration-300 group-hover/item:w-4 group-hover/item:bg-tan/60"
								></span>
								{item}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>
