<template>
    <div class="main">
        <div class="login_form">
            <div class="top">登陆</div>
            <div class="center">
                <div class="outLine">
                    <span class="my_span"></span>
                    <input class="my_input" v-model="uname" type="text" placeholder="请输入用户名">
                </div>
                <div class="outLine">
                    <span class="my_span1"></span>
                    <input class="my_input" v-model="upwd" type="password" placeholder="请输入密码">
                    <p v-show="show_R" class="rong_msg">{{show_R_M}}</p>
                </div>
                <button class="my_btn" @click='log'>登陆</button>
            </div>
            <div class="bottom">
                <span  >忘记密码 ?</span>
                <span  @click='reg'>快速注册>></span>
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
            show_R:false,
            show_R_M:''
        }
    },
    methods:{
        //登陆
        log(){
            if(this.uname==="" ){
                alert('用户名不能为空')
            }else if(this.upwd===""){
                alert('密码不能为空')
            }else{
                  var url='/user/login';
            var params=`uname=${this.uname}&upwd=${this.upwd}`;
            this.axios.post(url,params).then(res=>{
                if(res.data.code==1){
                    this.$router.push('/index')
                }else{
                    this.show_R=true;
                    this.show_R_M=res.data.msg;
                }
                console.log(res)
            })
            }
          
        },
        // 注册
        reg(){
            this.$router.push('/reg');
        }
    }
}
</script>
<style scoped>
.rong_msg{
    color:#f00;
    position: absolute;
    top:16px;
    left:48px;
}
.bottom{
    /* width:225px; */
    position: relative;
    top:-55px;
    color:#aa202c;
    font-size:12px;
    display: flex;
    justify-content: space-around;
    cursor: pointer;
}
.my_span,.my_span1{
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
    margin-top:12px;
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