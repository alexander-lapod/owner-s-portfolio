<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	// Warm, slow aurora. Radial gradients instead of canvas blur filters:
	// same softness, a fraction of the per-frame cost.
	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		let width = 0;
		let height = 0;
		let raf = 0;
		let last = 0;

		type Blob = { x: number; y: number; vx: number; vy: number; radius: number; hue: number };
		const blobs: Blob[] = [
			{ x: 0.2, y: 0.28, vx: 0.012, vy: 0.009, radius: 0.52, hue: 26 },
			{ x: 0.78, y: 0.22, vx: -0.009, vy: 0.013, radius: 0.44, hue: 34 },
			{ x: 0.62, y: 0.78, vx: 0.007, vy: -0.011, radius: 0.48, hue: 18 },
			{ x: 0.3, y: 0.85, vx: -0.013, vy: -0.007, radius: 0.38, hue: 40 }
		];

		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			width = window.innerWidth;
			height = window.innerHeight;
			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};

		const paint = () => {
			ctx.clearRect(0, 0, width, height);
			ctx.globalCompositeOperation = 'lighter';

			for (const blob of blobs) {
				const cx = blob.x * width;
				const cy = blob.y * height;
				const r = Math.max(width, height) * blob.radius;
				const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
				gradient.addColorStop(0, `hsla(${blob.hue}, 76%, 46%, 0.42)`);
				gradient.addColorStop(0.55, `hsla(${blob.hue}, 66%, 32%, 0.16)`);
				gradient.addColorStop(1, 'hsla(24, 60%, 20%, 0)');
				ctx.fillStyle = gradient;
				ctx.beginPath();
				ctx.arc(cx, cy, r, 0, Math.PI * 2);
				ctx.fill();
			}

			ctx.globalCompositeOperation = 'source-over';
		};

		const step = (now: number) => {
			const dt = Math.min(64, now - last || 16);
			last = now;

			for (const blob of blobs) {
				blob.x += (blob.vx * dt) / 1000;
				blob.y += (blob.vy * dt) / 1000;

				if (blob.x < -0.35 || blob.x > 1.35) blob.vx *= -1;
				if (blob.y < -0.35 || blob.y > 1.35) blob.vy *= -1;
			}

			paint();
			raf = requestAnimationFrame(step);
		};

		resize();
		paint();

		if (!reduceMotion) raf = requestAnimationFrame(step);

		const onResize = () => {
			resize();
			paint();
		};
		const onVisibility = () => {
			if (reduceMotion) return;
			cancelAnimationFrame(raf);
			if (!document.hidden) {
				last = performance.now();
				raf = requestAnimationFrame(step);
			}
		};

		window.addEventListener('resize', onResize);
		document.addEventListener('visibilitychange', onVisibility);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', onResize);
			document.removeEventListener('visibilitychange', onVisibility);
		};
	});
</script>

<canvas bind:this={canvas} aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-80"></canvas>
<div
	aria-hidden="true"
	class="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-espresso/10 via-espresso/40 to-espresso"
></div>
