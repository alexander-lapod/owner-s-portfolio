<script lang="ts">
	import { onMount } from 'svelte';
	import { nav, profile } from '$lib/content';

	let active = $state('');

	onMount(() => {
		const sections = nav
			.map((item) => document.getElementById(item.id))
			.filter((el): el is HTMLElement => el !== null);

		if (sections.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) active = entry.target.id;
				}
			},
			{ rootMargin: '-45% 0px -50% 0px', threshold: 0 }
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	});
</script>

<header class="fixed inset-x-0 top-0 z-50 border-b border-tan/10 bg-espresso/85 backdrop-blur-xl">
	<div class="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
		<a href="#top" class="group flex items-baseline gap-2.5">
			<span class="font-mono text-[11px] tracking-[0.3em] text-tan/80 transition-colors group-hover:text-cream">AFL</span>
			<span class="hidden h-3 w-px bg-tan/25 sm:block"></span>
			<span class="hidden text-[11px] tracking-wide text-cream/65 sm:block">{profile.role}</span>
		</a>

		<nav aria-label="Sections" class="hidden items-center gap-7 md:flex">
			{#each nav as item (item.id)}
				<a
					href={`#${item.id}`}
					aria-current={active === item.id ? 'true' : undefined}
					class="relative font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 {active === item.id
						? 'text-cream'
						: 'text-cream/60 hover:text-cream/90'}"
				>
					{item.label}
					<span
						class="absolute -bottom-1.5 left-0 h-px bg-ember transition-all duration-300 {active === item.id
							? 'w-full opacity-100'
							: 'w-0 opacity-0'}"></span>
				</a>
			{/each}
		</nav>

		<a
			href="#contact"
			class="rounded-full border border-tan/25 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-cream/80 transition-colors duration-300 hover:border-tan/60 hover:text-cream"
		>
			Get in touch
		</a>
	</div>
</header>
