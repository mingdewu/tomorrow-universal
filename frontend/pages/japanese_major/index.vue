<template>
	<div>
		<nav>
			<ul>
				<li>
					<NuxtLink class="text-decoration-underline" to="/japanese_major/japanese_grammer">
                        文法チェック
					</NuxtLink>
				</li>
				<li>
					<NuxtLink class="text-decoration-underline" to="/japanese_major/emotion_classification">
                        表情対応ロボット
					</NuxtLink>
				</li>
				<li>
					<NuxtLink class="text-decoration-underline" to="/japanese_major/japanese_classicalchinese_model">
						古漢語-日本語モデル
					</NuxtLink>
				</li>
				<li>
					<NuxtLink class="text-decoration-underline" to="/japanese_major/listenning_shadowing">
						ドラマシャドーイング
					</NuxtLink>
				</li>
			</ul>
		</nav>
	</div>
</template>
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
h1 {
  text-align: center;
}
</style>