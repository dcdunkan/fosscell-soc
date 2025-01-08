<script module lang="ts">
	import type { Icon } from "lucide-svelte";

	export interface Node {
		id: string;
		title: string;
		points: number | null;
		days: number | null;
		team: string | null;
		icon: typeof Icon;
		level: number;
		locked: boolean;
		children: Node[];
	}
</script>

<script lang="ts">
	import ComplexPiece, { flicksBuilder } from "./ComplexPiece.svelte";
	import NodeRoot from "./Node.svelte";
	import Card from "./Card.svelte";

	let hasHovered = $state(false);

	let { data }: { data: Node } = $props();

	function isUnlocked(node: Node) {
		return node.locked == false;
	}

	// TODO: a lot of unnecessary duplications, needs to be fixed.
	function calc(i: number): number {
		const flicks: number[] = [];

		if (!data.children[i].locked) {
			flicks.push(1);
		}

		// ALWAYS n > 1
		const n = data.children.length;
		if (n % 2 === 0) {
			if (data.children.some(isUnlocked)) {
				flicks.push(10, 5);
			}
			const root0 = n / 2 - 1,
				root1 = n / 2;

			if (i == root0) {
				if (!data.children[i].locked) flicks.push(2);
				const upper = data.children.slice(0, root0).findIndex(isUnlocked);
				if (upper != -1) flicks.push(0, 2);
			} else if (i === root1) {
				if (!data.children[i].locked) flicks.push(0);
				const downer = data.children.slice(root1 + 1).findLastIndex(isUnlocked);
				if (downer != -1) flicks.push(0, 2);
			} else if (i === 0) {
				if (!data.children[i].locked) flicks.push(2);
			} else if (i === n - 1) {
				if (!data.children[i].locked) flicks.push(0);
			} else {
				if (i < root0) {
					if (!data.children[i].locked) {
						flicks.push(2);
					}
					const up = data.children.slice(0, i).findIndex(isUnlocked);
					if (up != -1) {
						flicks.push(0);
						flicks.push(2);
					}
				} else if (i > root1) {
					if (!data.children[i].locked) {
						flicks.push(0);
					}
					const down = data.children.slice(i + 1).findLastIndex(isUnlocked);
					if (down != -1) {
						flicks.push(0);
						flicks.push(2);
					}
				}
			}
		} else {
			if (data.children.some(isUnlocked)) {
				flicks.push(3);
			}
			const middle = Math.ceil(n / 2) - 1;
			// MIN N >= 3
			if (i == middle) {
				const first = data.children.slice(0, i).findIndex(isUnlocked),
					last = data.children.slice(i + 1).findLastIndex(isUnlocked);
				if (first != -1) flicks.push(0);
				if (last != -1) flicks.push(2);
			} else if (i === 0) {
				if (!data.children[i].locked) flicks.push(2);
			} else if (i === n - 1) {
				if (!data.children[i].locked) flicks.push(0);
			} else {
				if (i < middle) {
					if (!data.children[i].locked) {
						flicks.push(2);
					}
					const up = data.children.slice(0, i).findIndex(isUnlocked);
					if (up != -1) {
						flicks.push(0);
						flicks.push(2);
					}
				} else if (i > middle) {
					if (!data.children[i].locked) {
						flicks.push(0);
					}
					const down = data.children.slice(i + 1).findLastIndex(isUnlocked);
					if (down != -1) {
						flicks.push(0);
						flicks.push(2);
					}
				}
			}
		}

		return flicks.length > 0 ? flicksBuilder(...new Set(flicks)) : 0;
	}
</script>

<div class="flex">
	<Card {data} {hasHovered} />
	{#if data.children.length > 0}
		{@const n = data.children.length}

		<div class="grid auto-cols-min grid-rows-[{n}] auto-rows-fr">
			{#each data.children as child, i}
				<div class="flex place-items-center">
					{#if n === 1}
						<!-- ONE -->
						<ComplexPiece
							flicks={0b010100000000}
							locked={child.locked}
							colors={data.children[0].locked ? 0 : flicksBuilder(1, 3)}
						/>
					{:else if n % 2 != 0}
						<div class="grid h-full">
							<!-- ODD >= 3 -->
							{#if i == Math.ceil(n / 2) - 1}
								<!-- INITIALZER -->
								<ComplexPiece
									flicks={flicksBuilder(0, 1, 2, 3)}
									locked={child.locked}
									colors={calc(i)}
								/>
							{:else if i === 0}
								<!-- FIRST ONE -->
								<ComplexPiece flicks={0b011000000000} locked={child.locked} colors={calc(i)} />
							{:else if i === n - 1}
								<!-- LAST ONE -->
								<ComplexPiece flicks={0b110000000000} locked={child.locked} colors={calc(i)} />
							{:else}
								<!-- MIDWAY -->
								<ComplexPiece flicks={0b111000000000} locked={child.locked} colors={calc(i)} />
							{/if}
						</div>
					{:else}
						<div class="grid h-full">
							{#if i === n / 2 - 1}
								<!-- INITIALZER -->
								<ComplexPiece
									flicks={flicksBuilder(10, 2, 1, n > 2 && 0)}
									locked={child.locked}
									colors={calc(i)}
								/>
							{:else if i === n / 2}
								<ComplexPiece
									flicks={flicksBuilder(5, 0, 1, n > 2 && 2)}
									locked={child.locked}
									colors={calc(i)}
								/>
							{:else if i === 0}
								<!-- FIRST ONE -->
								<ComplexPiece flicks={0b011000000000} locked={child.locked} colors={calc(i)} />
							{:else if i === n}
								<!-- LAST ONE -->
								<ComplexPiece flicks={0b110000000000} locked={child.locked} colors={calc(i)} />
							{:else}
								<!-- MIDWAY -->
								<ComplexPiece flicks={0b111000000000} locked={child.locked} colors={calc(i)} />
							{/if}
						</div>
					{/if}
					<NodeRoot data={child} />
				</div>
			{/each}
		</div>
	{/if}
</div>
