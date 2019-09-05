<template>
    <div class="main">
        <div @click='test' class="login_form">测试</div>
    </div>
</template>    
<script>
export default {
    data(){
        return{}
    },
    methods:{
        test(){
            var url='/user/login';
            var params="uname=上海店&upwd=123"
            this.axios.post(url,params).then(res=>{console.log(res)})
        }
    }
}
</script>
<style scoped>
.main{
    height: 100vh;
    background: url(/img/main/dit.jpg) no-repeat center 0;
    background-size:cover; 
    position: relative;
}
.login_form{
    height: 320px;
    width: 280px;
    background: rgba(255,255,255,.4);
    border-radius: 4px;
    position: absolute;
    right: 5%;
    top:50%;
    transform: translate(-50%,-50%);
}
</style>