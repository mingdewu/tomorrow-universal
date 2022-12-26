<template>
    <main>
        <div style="text-align:center; font-size:20px">
            <div>
                <h2>記録{{schoolwork.title}}</h2>
            </div>
            <div >
                <img
                class="img-fluid"
                style="width:400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
                :src="recipe.picture"
                alt
                >
            </div>
            <div>
                <div class="recipe-details">
                    <h4>タイトル</h4>
                    <p>{{ schoolwork.title }}</p>
                    <h4>日付</h4>
                    <p>{{ schoolwork.date }}</p>
                    <h4>分類</h4>
                    <p>{{ schoolwork.classify }}</p>
                    <h4>内容</h4>
                    <textarea rows="10" v-html="schoolwork.content" disabled />
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default{
    head(){
        return {
            title:"記録"
        };
    },
    async asyncData({$axios,params}){
        try{
            let schoolwork = await $axios.$get(`/school/${params.id}`);
            return {schoolwork};
        } catch (e) {
            return { schoolwork: []};
        }
    },
    data(){
        return{
            schoolwork:{
                title: "",
                picture: "",
                classify: "",
                date: "",
                content: "null",
            }
        }
    }
}
</script>
<style scope>
</style>