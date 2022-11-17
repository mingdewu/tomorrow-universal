<template>
	<div>
		<nav>
			<ul>
				<li>
					<NuxtLink class="text-decoration-underline" to="/mingde_university/tableau">
						Tableau(日韓語)
					</NuxtLink>
				</li>
				<li>
					<NuxtLink class="text-decoration-underline" to="/mingde_university/discrete_math">
						離散数学(日韓語)
					</NuxtLink>
				</li>
				<li>
					<NuxtLink class="text-decoration-underline" to="/mingde_university/music_grammar">
						楽典(日韓語)
					</NuxtLink>
				</li>
				<li>
					<NuxtLink class="text-decoration-underline" to="/mingde_university/first_language">
						話せる人間(日韓語)
					</NuxtLink>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>
</script>
<style>
ul {
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
li {
	margin: 0 0.5rem;
	padding: 0.25rem;
	font-size: 1.2rem;
}
</style>