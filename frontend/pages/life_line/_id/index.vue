<template>
    <main>
        <div style="text-align:center; font-size:20px">
            <div>
                <h2>タイトル{{lifeline.theme}}</h2>
            </div>
            <div >
                <img
                class="img-fluid"
                style="width:400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
                :src="lifeline.picture"
                alt
                >
            </div>
            <div>
                <div class="recipe-details">
                    <h4>内容</h4>
                    <textarea rows="10" v-html="lifeline.content" disabled />
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default{
    head(){
        return {
            title:"メモ"
        };
    },
    async asyncData({$axios,params}){
        try{
            let lifeline = await $axios.$get(`/life_line/${params.id}`);
            return {lifeline};
        } catch (e) {
            return { lifeline: []};
        }
    },
    data(){
        return{
            lifeline:{
                theme: "",
                picture: "",
                content: ""  
            }
        }
    }
}
</script>
<style scope>
</style>