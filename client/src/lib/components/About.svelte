<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';
	import { profile } from '$lib/content';
</script>

<section id="about" class="scroll-mt-20 border-t border-tan/10 px-5 py-24 sm:px-8 sm:py-32">
	<div class="mx-auto max-w-6xl">
		<SectionHeading
			index="02"
			label="About"
			title="Software that survives its own demo."
			lead="The interesting work is rarely the first screen. It is the schema, the error path, and the handover."
		/>

		<div class="grid gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16">
			<div>
				<div
					class="relative aspect-[4/5] w-full max-w-[16rem] overflow-hidden rounded-sm border border-tan/15 bg-gradient-to-br from-cocoa via-espresso to-void"
				>
					<span
						class="absolute inset-0 flex items-center justify-center font-display text-[5.5rem] italic leading-none text-tan/45"
					>
						AFL
					</span>
					<span
						class="absolute inset-x-4 bottom-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-cream/60"
					>
						<span>Surabaya</span>
						<span>WIB</span>
					</span>
				</div>

				<dl class="mt-8 max-w-[22rem] divide-y divide-tan/10 border-y border-tan/10">
					{#each profile.facts as fact (fact.label)}
						<div class="grid grid-cols-[6.5rem_1fr] gap-3 py-2.5">
							<dt class="font-mono text-[9px] uppercase tracking-[0.16em] text-cream/55">{fact.label}</dt>
							<dd class="text-[12.5px] leading-snug text-cream/70">{fact.value}</dd>
						</div>
					{/each}
				</dl>
			</div>

			<div class="space-y-5">
				{#each profile.bio as paragraph, i (i)}
					<p
						class={i === 0
							? 'text-[17px] leading-[1.7] text-cream/85 sm:text-lg'
							: 'max-w-prose text-[14px] leading-[1.8] text-cream/55'}
					>
						{paragraph}
					</p>
				{/each}

				<p
					class="max-w-prose border-l border-tan/25 pl-5 font-display text-[clamp(1.15rem,2vw,1.45rem)] italic leading-snug text-tan/80"
				>
					"If it needs a spreadsheet to stay alive, it is not finished."
				</p>
			</div>
		</div>
	</div>
</section>
