<script lang="ts">
	import { profile } from '$lib/content';

	let x = $state(0);
	let y = $state(0);
	let dragging = $state(false);
	let moved = $state(false);
	let vx = 0;
	let vy = 0;
	let raf = 0;
	let lastX = 0;
	let lastY = 0;
	let lastT = 0;
	let node: HTMLDivElement;

	function clampPosition() {
		const maxX = Math.max(32, window.innerWidth / 2 - 130);
		const maxY = Math.max(24, window.innerHeight / 2 - 110);
		x = Math.min(maxX, Math.max(-maxX, x));
		y = Math.min(maxY, Math.max(-maxY, y));
	}

	function handlePointerDown(event: PointerEvent) {
		if (event.pointerType === 'mouse' && event.button !== 0) return;
		cancelAnimationFrame(raf);
		dragging = true;
		moved = true;
		vx = 0;
		vy = 0;
		lastX = event.clientX;
		lastY = event.clientY;
		lastT = performance.now();
		node.setPointerCapture(event.pointerId);
	}

	function handlePointerMove(event: PointerEvent) {
		if (!dragging) return;

		const now = performance.now();
		const dt = Math.max(8, now - lastT);
		const dx = event.clientX - lastX;
		const dy = event.clientY - lastY;

		x += dx;
		y += dy;
		vx = (dx / dt) * 14;
		vy = (dy / dt) * 14;
		lastX = event.clientX;
		lastY = event.clientY;
		lastT = now;
		clampPosition();
	}

	function handlePointerUp() {
		if (!dragging) return;
		dragging = false;

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			x = 0;
			y = 0;
			return;
		}

		// Momentum plus a spring back to zero: throw it, it returns.
		const settle = () => {
			vx += -x * 0.045;
			vy += -y * 0.045;
			vx *= 0.9;
			vy *= 0.9;
			x += vx;
			y += vy;

			if (Math.abs(x) < 0.4 && Math.abs(y) < 0.4 && Math.abs(vx) < 0.4 && Math.abs(vy) < 0.4) {
				x = 0;
				y = 0;
				vx = 0;
				vy = 0;
				return;
			}

			raf = requestAnimationFrame(settle);
		};

		raf = requestAnimationFrame(settle);
	}

	$effect(() => () => cancelAnimationFrame(raf));
</script>

<section id="top" class="relative flex min-h-[100svh] flex-col justify-between px-5 pt-24 pb-6 sm:px-8">
	<div class="mx-auto w-full max-w-6xl">
		<div
			class="flex flex-col items-start gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-cream/70 sm:flex-row sm:items-center sm:justify-between sm:text-[10px] sm:tracking-[0.24em]"
		>
			<span class="hidden sm:inline">Portfolio / 2026</span>
			<span class="flex items-center gap-2 text-cream/80">
				<span class="relative flex h-1.5 w-1.5">
					<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember/70"></span>
					<span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember"></span>
				</span>
				{profile.availability}
			</span>
		</div>
	</div>

	<div class="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center py-10">
		<!-- The signature: draggable, with inertia and a spring home. -->
		<div
			bind:this={node}
			onpointerdown={handlePointerDown}
			onpointermove={handlePointerMove}
			onpointerup={handlePointerUp}
			onpointercancel={handlePointerUp}
			style="transform: translate3d({x}px, {y}px, 0) rotate({x * 0.012}deg); touch-action: pan-y;"
			class="relative isolate cursor-grab select-none will-change-transform {dragging ? 'cursor-grabbing' : ''}"
		>
			<div
				aria-hidden="true"
				class="pointer-events-none absolute -inset-x-10 -inset-y-8 -z-10 rounded-[50%] bg-ember/10 blur-3xl transition-opacity duration-500 {dragging
					? 'opacity-100'
					: 'opacity-0'}"
			></div>

			<h1 class="font-display text-[clamp(3.1rem,12vw,8.25rem)] leading-[0.92] tracking-[-0.02em] text-cream">
				<span class="block">Alexander</span>
				<span class="block italic text-tan/95">F. J. Lapod</span>
			</h1>

			<div class="mt-4 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.32em] text-cream/55">
				<span class="h-px w-6 bg-cream/20"></span>
				<span class="transition-opacity duration-700 {moved ? 'opacity-30' : 'opacity-90'}">
					{moved ? 'nice throw' : 'drag me'}
				</span>
			</div>
		</div>

		<div class="mt-10 flex flex-col gap-10 sm:mt-14 lg:flex-row lg:items-end lg:justify-between">
			<div class="max-w-xl">
				<p class="text-balance text-[15px] leading-relaxed text-cream/65 sm:text-base">
					{profile.statement}
				</p>

				<div class="mt-7 flex flex-wrap items-center gap-3">
					<a
						href="#work"
						class="rounded-full bg-cream px-5 py-2.5 text-[13px] font-medium text-espresso transition-transform duration-300 hover:-translate-y-0.5"
					>
						See the work
					</a>
					<a
						href="#contact"
						class="rounded-full border border-tan/25 px-5 py-2.5 text-[13px] text-cream/80 transition-colors duration-300 hover:border-tan/60 hover:text-cream"
					>
						Get in touch
					</a>
				</div>
			</div>

			<dl class="hidden shrink-0 gap-x-10 gap-y-4 border-l border-tan/15 pl-8 lg:flex lg:flex-col">
				<div>
					<dt class="font-mono text-[9px] uppercase tracking-[0.24em] text-cream/55">Currently</dt>
					<dd class="mt-1.5 font-display text-lg italic leading-tight text-tan/85">
						Thesis &amp; Omnitrack
					</dd>
				</div>
				<div>
					<dt class="font-mono text-[9px] uppercase tracking-[0.24em] text-cream/55">Working in</dt>
					<dd class="mt-1.5 text-[12px] leading-relaxed text-cream/55">
						Laravel · SvelteKit · Python
					</dd>
				</div>
			</dl>
		</div>
	</div>

	<div class="mx-auto flex w-full max-w-6xl items-end justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/55">
		<span>{profile.location}</span>
		<a href="#work" class="group flex items-center gap-2 transition-colors hover:text-cream/70">
			<span>Scroll</span>
			<span class="relative block h-8 w-px overflow-hidden bg-cream/15">
				<span class="absolute inset-x-0 top-0 h-3 animate-[scroll-cue_2.4s_ease-in-out_infinite] bg-tan/70"></span>
			</span>
		</a>
		<span class="hidden sm:block">WIB · UTC+7</span>
	</div>
</section>
