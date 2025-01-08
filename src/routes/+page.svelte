<script lang="ts">
	import {
		ActivityIcon,
		EllipsisIcon,
		EyeIcon,
		FileUpIcon,
		HammerIcon,
		LayoutDashboardIcon,
		LayoutTemplateIcon,
		NotebookPenIcon,
		PaintbrushIcon,
		ScanFaceIcon,
		ShieldIcon,
		type Icon,
	} from "lucide-svelte";
	import NodeRoot, { type Node } from "$lib/components/Node.svelte";

	const root = $state(
		generate(
			{
				title: "Activity Management",
				locked: false,
				points: 15,
				days: 7,
				team: "Team name",
				icon: ActivityIcon,
				children: [
					{
						locked: true,
						title: "Login and Registration",
						points: null,
						days: 7,
						team: "Team name",
						icon: ScanFaceIcon,
						children: [
							{
								locked: false,
								title: "UI",
								points: 15,
								days: 7,
								team: "Team name",
								icon: LayoutTemplateIcon,
								children: [
									{
										locked: false,
										title: "Frontend",
										points: 15,
										days: 7,
										team: "Team name",
										icon: PaintbrushIcon,
										children: [
											{
												locked: false,
												title: "Backend",
												points: 15,
												days: 7,
												team: "Team name",
												icon: HammerIcon,
												children: [
													{
														locked: false,
														title: "Data Collection",
														points: 15,
														days: 7,
														team: "Team name",
														icon: NotebookPenIcon,
														children: [],
													},
												],
											},
										],
									},
								],
							},
						],
					},
					{
						locked: false,
						title: "Student Dashboard",
						points: 15,
						days: 7,
						team: "Team name",
						icon: LayoutDashboardIcon,
						children: [
							{
								locked: false,
								title: "UI",
								points: 15,
								days: 7,
								team: "Team name",
								icon: LayoutTemplateIcon,
								children: [
									{
										locked: false,
										title: "Frontend",
										points: 15,
										days: 7,
										team: "Team name",
										icon: PaintbrushIcon,
										children: [
											{
												locked: true,
												title: "Backend",
												points: 15,
												days: 7,
												team: "Team name",
												icon: HammerIcon,
												children: [
													{
														locked: false,
														title: "Data Collection",
														points: 15,
														days: 7,
														team: "Team name",
														icon: NotebookPenIcon,
														children: [],
													},
												],
											},
										],
									},
								],
							},
						],
					},
					{
						locked: true,
						title: "Staff Dashboard",
						points: 15,
						days: 7,
						team: "Team name",
						icon: LayoutDashboardIcon,
						children: [
							{
								locked: false,
								title: "UI",
								points: 15,
								days: 7,
								team: "Team name",
								icon: LayoutTemplateIcon,
								children: [
									{
										locked: false,
										title: "Frontend",
										points: 15,
										days: 7,
										team: "Team name",
										icon: PaintbrushIcon,
										children: [
											{
												locked: false,
												title: "Backend",
												points: 15,
												days: 7,
												team: "Team name",
												icon: HammerIcon,
												children: [],
											},
										],
									},
								],
							},
						],
					},
					{
						locked: false,
						title: "Review Submission",
						points: 15,
						days: 7,
						team: "Team name",
						icon: EyeIcon,
						children: [
							{
								locked: true,
								title: "UI",
								points: 15,
								days: 7,
								team: "Team name",
								icon: LayoutTemplateIcon,
								children: [
									{
										locked: false,
										title: "Frontend",
										points: 15,
										days: 7,
										team: "Team name",
										icon: PaintbrushIcon,
										children: [
											{
												locked: false,
												title: "Backend",
												points: 15,
												days: 7,
												team: "Team name",
												icon: HammerIcon,
												children: [],
											},
										],
									},
								],
							},
						],
					},
					{
						locked: true,
						title: "Upload Certificate",
						points: 15,
						days: 7,
						team: "Team name",
						icon: FileUpIcon,
						children: [
							{
								locked: false,
								title: "UI",
								points: 15,
								days: 7,
								team: "Team name",
								icon: LayoutTemplateIcon,
								children: [
									{
										locked: false,
										title: "Frontend",
										points: 15,
										days: 7,
										team: "Team name",
										icon: PaintbrushIcon,
										children: [
											{
												locked: false,
												title: "Backend",
												points: 15,
												days: 7,
												team: "Team name",
												icon: HammerIcon,
												children: [
													{
														locked: false,
														title: "Data Collection",
														points: 15,
														days: 7,
														team: "Team name",
														icon: NotebookPenIcon,
														children: [],
													},
												],
											},
										],
									},
								],
							},
						],
					},
					{
						locked: false,
						title: "Miscellaneous",
						points: 15,
						days: 7,
						team: "Team name",
						icon: EllipsisIcon,
						children: [],
					},
					{
						locked: false,
						title: "Administrator Page",
						points: 15,
						days: 7,
						team: "Team name",
						icon: ShieldIcon,
						children: [
							{
								locked: false,
								title: "UI",
								points: 15,
								days: 7,
								team: "Team name",
								icon: LayoutTemplateIcon,
								children: [
									{
										locked: false,
										title: "Frontend",
										points: 15,
										days: 7,
										team: "Team name",
										icon: PaintbrushIcon,
										children: [
											{
												locked: false,
												title: "Backend",
												points: 15,
												days: 7,
												team: "Team name",
												icon: HammerIcon,
												children: [
													{
														locked: false,
														title: "Data Collection",
														points: 15,
														days: 7,
														team: "Team name",
														icon: NotebookPenIcon,
														children: [],
													},
												],
											},
										],
									},
								],
							},
						],
					},
				],
			},
			false,
		),
	);

	type BaseNodeData = Omit<Node, "id" | "level" | "children"> & {
		children: BaseNodeData[];
	};

	// adds random id for future needs, add levels
	function generate(node: BaseNodeData, locked: boolean, level = 0): Node {
		return {
			id: node.title.toLowerCase() + crypto.getRandomValues(new Uint8Array(18)).join(""),
			title: node.title,
			points: node.points,
			days: node.days,
			team: node.team,
			icon: node.icon,
			level: level,
			locked: locked,
			children: node.children.map((child) =>
				generate(child, locked === true ? true : child.locked, level + 1),
			),
		};
	}
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
