<script>
	import '../app.css';
	import icon from '$lib/assets/icon.png';
	import { Button } from "$lib/components/ui/button/index.js";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={icon} />
</svelte:head>


{@render children?.()}
