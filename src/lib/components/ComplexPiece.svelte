<script module lang="ts">
	export function flicksBuilder(...flicks: (false | number)[]) {
		return flicks.filter((f) => f !== false).reduce((prev, flick) => prev + 2 ** (11 - flick), 0);
	}
</script>

<script lang="ts">
	import clsx from "clsx";

	let {
		flicks,
		locked,
		paths: paths = 0,
	}: { flicks: number; locked: boolean; paths?: number } = $props();
	/**
	 *       5 (0) 6
	 *      ----|----
	 *   4  | 4 | 1 |  7
	 *  (3) |-------| (1)
	 *   11 | 3 | 2 |  8
	 *      ----|----
	 *      10 (2) 9
	 */

	if (flicks < 0 || flicks > 2 ** 12 - 1) {
		throw new RangeError("Invalid value for flicks.");
	}

	const sides: boolean[] = Array(12)
		.fill(0)
		.map((_, i) => (flicks & (2 ** i)) === 2 ** i)
		.toReversed();

	const colored: boolean[] = Array(12)
		.fill(0)
		.map((_, i) => (paths & (2 ** i)) === 2 ** i)
		.toReversed();
</script>

<div class={clsx("piece", "grid min-w-8 grid-cols-2")}>
	<div
		class={clsx("border-gray", {
			"border-r-2": sides[0],
			"border-b-2": sides[3],
			"border-l-2": sides[4],
			"border-t-2": sides[5],

			"rounded-bl": sides[3] && sides[4],
			"rounded-br": sides[0] && sides[3],
			"rounded-tl": sides[4] && sides[5],
			"rounded-tr": sides[5] && sides[0],

			"border-r-special": colored[0],
			"border-b-special": colored[3],
			"border-l-special": colored[4],
			"border-t-special": colored[5],
		})}
	>
		<!-- 4 -->
	</div>
	<div
		class={clsx("", {
			"border-l-2": sides[0],
			"border-b-2": sides[1],
			"border-t-2": sides[6],
			"border-r-2": sides[7],
			"rounded-bl": sides[0] && sides[1],
			"rounded-br": sides[1] && sides[7],
			"rounded-tl": sides[0] && sides[6],
			"rounded-tr": sides[6] && sides[7],

			"border-l-special": colored[0],
			"border-b-special": colored[1],
			"border-t-special": colored[6],
			"border-r-special": colored[7],
		})}
	>
		<!-- 1 -->
	</div>
	<div
		class={clsx("", {
			"border-r-2": sides[2],
			"border-t-2": sides[3],
			"border-l-2": sides[11],
			"border-b-2": sides[10],
			"rounded-bl": sides[11] && sides[10],
			"rounded-br": sides[10] && sides[2],
			"rounded-tl": sides[3] && sides[11],
			"rounded-tr": sides[2] && sides[3],

			"border-r-special": colored[2],
			"border-t-special": colored[3],
			"border-l-special": colored[11],
			"border-b-special": colored[10],
		})}
	>
		<!-- 3 -->
	</div>
	<div
		class={clsx("", {
			"border-t-2": sides[1],
			"border-l-2": sides[2],
			"border-r-2": sides[8],
			"border-b-2": sides[9],
			"rounded-bl": sides[9] && sides[2],
			"rounded-br": sides[8] && sides[9],
			"rounded-tl": sides[1] && sides[2],
			"rounded-tr": sides[1] && sides[8],

			"border-t-special": colored[1],
			"border-l-special": colored[2],
			"border-r-special": colored[8],
			"border-b-special": colored[9],
		})}
	>
		<!-- 2 -->
	</div>
</div>
