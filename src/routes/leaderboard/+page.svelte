<script lang="ts">
	import * as Popover from "$lib/components/ui/popover";
	import { LEADERBOARD } from "$lib/initial-data";
</script>

<svelte:head>
	<title>Leaderboard &middot; Season of Commits</title>
</svelte:head>

<div id="root" class="min-h-screen select-none overflow-scroll p-8">
	<div class="mx-auto min-h-full w-full max-w-screen-md">
		<div class="mb-4 mt-8">
			<div class="font-title text-lg font-medium uppercase text-[#1B3292]">
				<a href="/">Season of Commits</a> /
			</div>
			<h1
				class="text-shadow mb-4 font-title text-4xl font-black uppercase text-[#1B3292] drop-shadow-lg"
			>
				Leaderboard
			</h1>
		</div>

		<div class="mb-8 font-serif text-lg">
			Rankings are based on cumulative points earned through consistent contributions and
			activities. (Teams with the same oints are grouped together below and share the same rank.)
		</div>

		<div>
			{#each LEADERBOARD as { rank, teams }}
				{@const points = teams[0].points}
				<div class="py-2 font-serif">
					<div class="flex place-items-center">
						<div
							class="flex aspect-square place-items-center border-2 border-black bg-black/5 px-3 text-center text-xl font-bold"
						>
							{rank}
						</div>
						<div class="flex-grow border border-black bg-black"></div>
						<div class="ml-2 text-lg font-medium">{points} points</div>
					</div>
					<div class="ml-12 mt-2 px-6">
						{#each teams as team}
							<div class="flex place-items-center justify-between">
								<Popover.Root>
									<Popover.Trigger>
										<div class="px-3 py-1 text-xl hover:bg-black/10">
											{team.name}
										</div>
									</Popover.Trigger>
									<Popover.Content class="w-fit">
										<div class="p-2 font-serif">
											<div class="text-lg font-bold">Members</div>
											<ul class="list-inside list-disc">
												{#each team.members as member}
													<li>{member}</li>
												{/each}
											</ul>
										</div>
									</Popover.Content>
								</Popover.Root>
								<!-- <div>{team.points}</div> -->
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	#root {
		background-image: url("/src/assets/grey-jean.png");
	}
</style>
