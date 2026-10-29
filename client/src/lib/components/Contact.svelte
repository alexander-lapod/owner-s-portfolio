<script lang="ts">
	import { contact, profile } from '$lib/content';

	type Channel = { label: string; value: string; href: string; external: boolean };

	const channels: Channel[] = [
		contact.email && {
			label: 'Email',
			value: contact.email,
			href: `mailto:${contact.email}`,
			external: false
		},
		contact.github && {
			label: 'GitHub',
			value: contact.github.replace(/^https?:\/\//, ''),
			href: contact.github,
			external: true
		},
		contact.linkedin && {
			label: 'LinkedIn',
			value: contact.linkedin.replace(/^https?:\/\//, ''),
			href: contact.linkedin,
			external: true
		}
	].filter((channel): channel is Channel => Boolean(channel));
</script>

<section id="contact" class="scroll-mt-20 border-t border-tan/10 px-5 py-24 sm:px-8 sm:py-32">
	<div class="mx-auto max-w-6xl">
		<div class="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-16">
			<div>
				<div class="mb-5 flex items-center gap-3">
					<span class="font-mono text-[10px] tracking-[0.3em] text-ember/80">05</span>
					<span class="h-px w-8 bg-tan/25"></span>
					<span class="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">Contact</span>
				</div>

				<h2
					class="max-w-lg font-display text-[clamp(2.2rem,5.5vw,3.6rem)] leading-[1.02] tracking-tight text-cream"
				>
					Let's make something <span class="italic text-tan/90">worth keeping</span>.
				</h2>

				<p class="mt-6 max-w-md text-[14px] leading-relaxed text-cream/55">
					Open to freelance builds, full-stack roles, and problems that need both a model and an
					interface. Replies within a day, {profile.timezone.replace('Asia/', '')} time.
				</p>
			</div>

			<div class="flex flex-col justify-end">
				{#if channels.length > 0}
					<ul class="border-t border-tan/10">
						{#each channels as channel (channel.label)}
							<li>
								<a
									href={channel.href}
									target={channel.external ? '_blank' : undefined}
									rel={channel.external ? 'noreferrer' : undefined}
									class="group flex items-center justify-between gap-4 border-b border-tan/10 py-4 transition-colors duration-300 hover:text-cream"
								>
									<span class="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/60">
										{channel.label}
									</span>
									<span class="flex items-center gap-2 text-[13px] text-cream/70 transition-colors group-hover:text-cream">
										{channel.value}
										<span class="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
									</span>
								</a>
							</li>
						{/each}
					</ul>
				{/if}

				<p class="mt-6 font-mono text-[9px] uppercase tracking-[0.2em] text-cream/60">
					Based in {profile.location}
				</p>
			</div>
		</div>
	</div>
</section>
