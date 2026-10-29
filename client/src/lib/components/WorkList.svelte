<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';
	import { work } from '$lib/content';
</script>

<section id="work" class="scroll-mt-20 border-t border-tan/10 px-5 py-24 sm:px-8 sm:py-32">
	<div class="mx-auto max-w-6xl">
		<SectionHeading
			index="01"
			label="Selected work"
			title="Systems built to be used, not demoed."
			lead="Four pieces that show the range: a product, a thesis, a model, and this site."
		/>

		<ol class="border-b border-tan/10">
			{#each work as item (item.index)}
				<li class="group border-t border-tan/10">
					<article
						class="grid gap-5 py-8 transition-colors duration-500 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.15fr)] md:gap-10 md:py-10"
					>
						<div class="flex items-start gap-3 md:block">
							<span
								class="font-mono text-[11px] tracking-[0.2em] text-cream/60 transition-colors duration-500 group-hover:text-ember"
							>
								{item.index}
							</span>
							<span
								class="ml-auto font-mono text-[9px] uppercase tracking-[0.18em] text-cream/55 md:hidden"
							>
								{item.status}
							</span>
						</div>

						<div class="transition-transform duration-500 md:group-hover:translate-x-1">
							<h3 class="font-display text-[clamp(1.6rem,3.2vw,2.35rem)] leading-tight text-cream">
								{item.title}
							</h3>
							<p class="mt-1.5 text-[13px] text-tan/70">{item.subtitle}</p>

							<div class="mt-4 flex flex-wrap gap-1.5">
								{#each item.stack as tech (tech)}
									<span
										class="rounded-full border border-tan/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-cream/55"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>

						<div>
							<p class="max-w-prose text-[13px] leading-relaxed text-cream/55 sm:text-sm">
								{item.description}
							</p>

							<div class="mt-5 flex items-center gap-4">
								<span
									class="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-cream/55 md:inline"
								>
									{item.status}
								</span>
								{#if item.link}
									<a
										href={item.link.href}
										target="_blank"
										rel="noreferrer"
										class="link-quiet inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em]"
									>
										{item.link.label}
										<span aria-hidden="true">↗</span>
									</a>
								{/if}
							</div>
						</div>
					</article>
				</li>
			{/each}
		</ol>

		<p class="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/55">
			More repositories at
			<a href="https://github.com/joynard" target="_blank" rel="noreferrer" class="link-quiet ml-1">github.com/joynard</a>
		</p>
	</div>
</section>
