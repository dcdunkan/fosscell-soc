<script lang="ts">
	import NodeRoot, { type Node } from "$lib/components/Node.svelte";
	import { PHARMALINK, generateNode } from "$lib/initial-data";

	const root = $state(generateNode(PHARMALINK, false));
</script>

<svelte:head>
	<title>Roadmap &middot; Season of Commits</title>
</svelte:head>

<div id="root" class="h-screen select-none overflow-scroll scroll-smooth">
	<div class="mx-6 mb-4 mt-8 flex place-items-center">
		<div class="font-title text-lg font-medium uppercase text-[#1B3292]">
			<a href="/">Season of Commits</a> / <span class="font-bold">ROADMAP</span>
		</div>
	</div>

	<div class="m-8 inline-block">
		<NodeRoot data={root} />
	</div>
</div>

<style>
	#root {
		background-image: url("/src/assets/grey-jean.png");
	}
</style>
