<script lang="ts">
	import NodeRoot, { type Node } from "$lib/components/Node.svelte";
	import { PHARMALINK, generateNode } from "$lib/initial-data";

	const root = $state(generateNode(PHARMALINK, false));
</script>

<div id="root" class="h-screen select-none overflow-scroll scroll-smooth">
	<!-- bg-[#3194F4] -->
	<!-- <div class="">
		<div class="text-center font-title text-xl font-black text-[#1B3292]">FOSS CELL TKMCE</div>

		<h1
			class="text-shadow textured mb-4 font-title text-6xl font-black text-[#CDF16B] drop-shadow-lg"
		>
			BEYOND<br /> CODE
		</h1>
		<div class="w-2/3 text-right font-title text-xl font-black text-[#1B3292]">
			MASTERING DEVELOPMENT DISCIPLINE
		</div>
	</div> -->

	<div class="m-8 inline-block">
		<NodeRoot data={root} />
	</div>
</div>

<!-- .text-shadow {
	text-shadow: 8px 8px black;
}

.textured {
	background-size: cover;
	-webkit-background-clip: text;
	background-clip: text;
	-moz-text-fill-color: #cdf16b;
	-webkit-text-fill-color: #cdf16b;
	background-image: url('/src/assets/grey-jean.png');
} -->

<style>
	#root {
		background-image: url("/src/assets/grey-jean.png");
	}
</style>
