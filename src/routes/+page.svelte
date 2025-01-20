<script lang="ts">
	import FOSSCellLogo from "../assets/fosscell-logo.png";
	import SOCTitle from "../assets/logo.png";
</script>

<svelte:head>
	<title>Season of Commits</title>
</svelte:head>

<div id="root" class="min-h-screen select-none overflow-scroll p-8">
	<div class="mx-auto min-h-full w-full max-w-screen-md">
		<div class="mb-8 mt-16 text-center">
			<!-- <img src={FOSSCellLogo} alt="foss-logo" width="40px" /> -->
			<div class="mb-2 font-title text-lg font-semibold text-[#1B3292]">FOSS CELL TKMCE</div>
			<img src={SOCTitle} alt="Logo" />
			<!-- <h1
				class="text-shadow textured mb-4 font-title text-4xl font-black text-[#1B3292] drop-shadow-lg"
			>
				SEASON OF
				<div class="absolute top-4 w-full font-playful text-8xl font-black text-black">COMMITS</div>
			</h1> -->
			<div class="mt-8 font-title font-bold">JAN 13 TO JAN 31</div>
		</div>

		<div class="space-y-4 text-center *:block">
			<a href="/leaderboard">
				<div
					class="border border-transparent px-6 py-4 transition-all duration-100 hover:border-black hover:shadow-lg"
				>
					<div class="mb-4 flex w-full place-items-end justify-center gap-1 font-serif">
						<div class="h-10 border border-black px-2 font-bold">2</div>
						<div class="h-14 border border-black px-2 font-bold">1</div>
						<div class="h-7 border border-black px-2 font-bold">3</div>
					</div>
					<div class="mb-1 font-title text-xl font-bold uppercase">Leaderboard</div>
					<div class="font-serif text-xl">
						View team rankings and see how each group stacks up on the leaderboard.
					</div>
				</div>
			</a>
			<a href="/roadmap">
				<div
					class="border border-transparent px-6 py-4 transition-all duration-100 hover:border-black hover:shadow-lg"
				>
					<div class="mb-4 flex w-full place-items-center justify-center font-serif">
						<div class="border border-black px-2 font-bold">A</div>
						<div class="font-bold">&mdash;</div>
						<div class="border border-black px-2 font-bold">B</div>
						<div class="font-bold">&mdash;</div>
						<div class="border border-black px-2 font-bold">C</div>
					</div>

					<div class="mb-1 font-title text-xl font-bold uppercase">Roadmap</div>
					<div class="font-serif text-xl">
						Track our project's journey: key milestones, features, and progress updates all in one
						place.
					</div>
				</div>
			</a>
			<div class="px-6 py-4">
				<div class="mb-4 flex justify-center font-serif font-bold">
					<!-- <div
						class="flex h-8 w-6 place-items-center justify-center rounded-sm rounded-br-none rounded-tr-xl border border-black"
					>
						=
					</div>
					<div
						class="flex h-8 w-6 place-items-center justify-center rounded-sm rounded-bl-none rounded-tl-xl border border-black"
					>
						=
					</div> -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="0.8"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-book-open"
						><path d="M12 7v14" /><path
							d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
						/></svg
					>
				</div>
				<div class="mb-1 font-title text-xl font-bold uppercase">Guidelines</div>
				<!-- <div class="font-serif text-xl">
					Clear and simple rules to help you stay on track and aligned with our goals.
				</div> -->
				<div class="text-pretty pl-4 text-left font-serif text-xl">
					<ul class="list-outside list-disc">
						<li class="list-item">
							Teams must consist of 2–4 members with diverse skill sets, including UI design,
							frontend development, and backend development.
						</li>
						<li class="list-item">The tech stack for the event will be HTML, CSS, and Flask.</li>
						<li>
							Mentorship will be provided throughout the event, so don’t worry if you're not
							comfortable with the stack.
						</li>
						<li class="list-item">
							All contributions must be made to the assigned repository — branch with meaningful
							commits.
						</li>
						<li class="list-item">
							Points are awarded for impactful commits, feature implementations, and bug fixes.
						</li>
						<li class="list-item">
							Follow the project’s style guide and get features approved by mentors before merging.
						</li>
						<li class="list-item">A leaderboard will track scores based on contributions.</li>
						<li class="list-item">
							All communications will be through the FOSS Discord server — join it to stay updated.
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#root {
		background-image: url("/src/assets/grey-jean.png");
	}
</style>
