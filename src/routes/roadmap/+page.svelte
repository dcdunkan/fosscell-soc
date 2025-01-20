<script lang="ts">
	import NodeRoot, { type Node } from "$lib/components/Node.svelte";
	import { PHARMALINK, generateNode } from "$lib/initial-data";

	const root = $state(generateNode(PHARMALINK, false));
</script>

<div id="root" class="h-screen select-none overflow-scroll scroll-smooth">
	<div class="m-8 inline-block">
		<NodeRoot data={root} />
	</div>
</div>

<style>
	#root {
		background-image: url("/src/assets/grey-jean.png");
	}
</style>
