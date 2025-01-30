<script lang="ts">
	import clsx from "clsx";
	import { type Node } from "./Node.svelte";
	import * as Drawer from "$lib/components/ui/drawer";
	import { CircleDollarSign, Clock10, LockIcon, UsersRoundIcon } from "lucide-svelte";
	import * as Popover from "$lib/components/ui/popover";
	import { MediaQuery } from "svelte/reactivity";
	import { TEAMS } from "$lib/initial-data";

	let { hasHovered, data }: { hasHovered: boolean; data: Node } = $props();

	let isDesktop = new MediaQuery("(min-width: 768px)");
</script>

{#snippet trigger()}
	<div
		role="listitem"
		onmouseenter={() => (hasHovered = true)}
		onmouseleave={() => (hasHovered = false)}
		class={clsx(
			"group text-nowrap rounded px-6 py-4 text-left transition-all duration-100",
			"min-w-72 max-w-96",
			"border-2 drop-shadow-none",
			"hover:scale-105 hover:border-solid hover:border-[#162253] hover:bg-[#2c44a7] hover:text-white hover:drop-shadow-lg",
			{
				"border-solid border-gray-300 bg-white/60": data.locked,
				"border-solid border-[#1B3292] bg-white": !data.locked,
			},
		)}
	>
		<data.icon fill={hasHovered ? "#bdc5e2" : "none"} class="mb-2" />
		<div class="w-fit font-clash text-lg font-semibold">
			{data.title}
		</div>
		<div class="mt-1 flex place-items-center gap-2 font-clash text-base">
			{#if data.locked}
				<LockIcon class="size-4" />
				Locked
			{:else if data.points != null}
				{data.points} points
			{/if}
		</div>
	</div>
{/snippet}

{#snippet content()}
	<div
		class="mx-auto flex max-w-screen-md flex-col text-center {isDesktop.current ? 'p-3' : 'p-8'}"
	>
		<div class="font-clash text-2xl font-medium text-[#1B3292]">{data.title}</div>
		<div class="mt-2">
			{#if data.points != null}
				<div class="flex place-items-center gap-2 font-clash text-lg">
					<CircleDollarSign class="size-5" />
					<div>{data.points} points</div>
				</div>
			{/if}
			{#if data.days != null}
				<div class="flex place-items-center gap-2 font-clash text-lg">
					<Clock10 class="size-5" />
					<div>3 days left</div>
				</div>
			{/if}
			{#if data.team != null}
				<div class="flex place-items-center gap-2 font-clash text-lg">
					<UsersRoundIcon class="size-5" />
					<div class="text-wrap">
						{TEAMS[data.team].name}
					</div>
				</div>
			{/if}
		</div>
		<!-- <div class="mt-4 line-clamp-3 truncate text-wrap font-serif text-lg">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque quam eros, a feugiat
			nulla tristique vitae. Pellentesque fermentum ante quis posuere ultrices. Praesent ac mi
			sapien. Aenean hendrerit felis quis sem semper faucibus. Nullam id aliquam erat, tincidunt
			auctor enim. Morbi consectetur auctor auctor. Morbi convallis felis at dolor lobortis
			vestibulum. In sit amet commodo dui.
		</div> -->
		<!-- {#if data.locked}
			<button
				class="bg-special hover:text-special mt-4 rounded p-2 font-clash font-semibold text-white transition-all duration-200 hover:bg-white"
				>Unlock</button
			>
		{/if} -->
	</div>
{/snippet}

<div class="flex cursor-pointer place-items-center py-2 text-[#1B3292]">
	{#if data.points != null || data.days != null || data.team != null}
		{#if isDesktop.current}
			<Popover.Root>
				<Popover.Trigger>{@render trigger()}</Popover.Trigger>
				<Popover.Content>{@render content()}</Popover.Content>
			</Popover.Root>
		{:else}
			<Drawer.Root>
				<Drawer.Trigger>{@render trigger()}</Drawer.Trigger>
				<Drawer.Content>{@render content()}</Drawer.Content>
			</Drawer.Root>
		{/if}
	{:else}
		{@render trigger()}
	{/if}
</div>
