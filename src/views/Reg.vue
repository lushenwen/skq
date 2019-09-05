<template>
    <div class="main">
        <div class="login_form">
            <div class="top">注册</div>
            <div class="center">
                <div class="outLine">
                    <span class="my_span"></span>
                    <input class="my_input" v-model="uname" type="text" placeholder="请输入用户名">
                </div>
                <div class="outLine">
                    <span class="my_span1"></span>
                    <input class="my_input" v-model="upwd" type="password" placeholder="请输入密码">
                </div>
                <div class="outLine">
                    <span class="my_span2"></span>
                    <input class="my_input" v-model="phone" type="text" placeholder="请输入手机号">
                </div>
                <button class="my_btn" @click='reg'>注册</button>
            </div>
            <div  class="bottom">
                <span  @click='log'>快速登陆>></span>
            </div>
        </div>
    </div>
</template>    
<script>
export default {
    data(){
        return{
            uname:'',
            upwd:'',
            phone:''
        }
    },
    methods:{
        // 登陆
        log(){
           this.$router.push('/login')
        },
        // 注册
        reg(){
            if(this.uname==="" ){
                alert('用户名不能为空')
            }else if(this.upwd===""){
                alert('密码不能为空')
            }else if(this.phone===""){
                alert('手机号不能为空')
            }else{
               var urlt='/user/unm';
               var paramst=`uname=${this.uname}`;
               this.axios.post(urlt,paramst).then(res=>{
                   if(res.data.code==-1){
                       alert('用户名已存在')
                   }else{
                        var url='/user/reg';
                        var params=`uname=${this.uname}&upwd=${this.upwd}&phone=${this.phone}`;
                        this.axios.post(url,params).then(res=>{
                            if(res.data.code==1){
                                alert('注册成功');
                                this.$router.push('/index');
                            }else{
                                alert('注册失败，请检查用户名,密码,手机号');
                            }
                        });
                   }
               })
            }
        }
    }
}
</script>
<style scoped>
.bottom{
    /* width:225px; */
    position: relative;
    top:-25px;
    color:#aa202c;
    font-size:12px;
    display: flex;
    justify-content: space-around;
    cursor: pointer;
}
.my_span,.my_span1,.my_span2{
    position: absolute;
    display: inline-block;
    width:32px;
    height: 30px;
    background:#eeeeee url(/img/main/yh.png) no-repeat center center;
    background-size:50%; 
    left: 1px;
}
.my_span1{
    background:#eeeeee url(/img/main/mm.png) no-repeat center center;
    background-size:50%; 
}
.my_span2{
    background:#eeeeee url(/img/main/sj.png) no-repeat center center;
    background-size:60%; 
}
.top{
    color:#aa202c;
    font-size:18px;
    margin:20px auto 0;
    position: relative;
    left: -8px;
}
.outLine{
    /* border: 1px solid #ccc; */
    border-radius: 4px;
    margin:15px 0px;
    padding:0 32px;
    position: relative;
}
.my_input,.my_btn{
    width:193px;
    height: 30px;
    padding:6px 12px;
    box-sizing: border-box;
    border:0;
    outline: 0;
}
.my_btn{
    background: rgb(170,32,44);
    height:32px;
    color:#fff;
    /* margin-top:12px; */
    width:225px;
    position: relative;
    left: -2px;
}
.center{
    padding:16px 24px 24px;
    width:280px;
    height: 236px;
    box-sizing: border-box;
}
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