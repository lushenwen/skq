<template>
    <div class=" my_place">
        <div class="my_width">
            <div class=" center">
                <div class="my_font12 font hello_place">
                    欢迎您:&nbsp;
                    <span >{{uname}}</span>&nbsp;!
                </div>
                <div @mouseenter="showBK(1)" class="my_font12 font" :class="{'bk':show_bk==1}">
                    <span class="my_span"></span>
                    众筹订单
                </div>
                <div @mouseenter="showBK(2)" class="my_font12 font" :class="{'bk':show_bk==2}">
                    <span class="my_span"></span>
                    我的订单
                </div>
               <div  @mouseenter="showBK(3)" class="my_font12 font" :class="{'bk':show_bk==3}">
                    <span class="my_span span2"></span>
                    Excel导入
                </div>
               <div  @mouseenter="showBK(4)" class="my_font12 font" :class="{'bk':show_bk==4}">
                    <span class="my_span span3"></span>
                    后台
                </div>
                <div  @mouseenter="showBK(5)" class="my_font12 font" :class="{'bk':show_bk==5}">
                    <span class="my_span"></span>
                    切换店仓
                </div>
               <div  @mouseenter="showBK(6)" class="my_font12 font" :class="{'bk':show_bk==6}">
                    <span class="my_span span4"></span>
                    报表
                    <span class="my_span span5"></span>
                </div>
               <div  @mouseenter="showBK(7)" class="my_font12 font" :class="{'bk':show_bk==7}">
                    <span class="my_span span4"></span>
                    用户
                    <span class="my_span span5"></span>
                </div>
            </div>
        </div>
         <div  class=" font_12 card" :class="{'dp':cad}" >
                 <div class="card_li"  @mouseenter="showBK2(1)" :class="{'bk':show_bk2==1}">个人信息</div>
                 <div class="card_li"  @mouseenter="showBK2(2)" :class="{'bk':show_bk2==2}">地址管理</div>
                 <div class="card_li"  @mouseenter="showBK2(3)" :class="{'bk':show_bk2==3}">修改密码</div>
                 <hr class="my_hr">
                 <div class="card_li"  @mouseenter="showBK2(4)" :class="{'bk':show_bk2==4}">切换主题</div>
                 <hr class="my_hr">
                 <div class="card_li"  @mouseenter="showBK2(5)" :class="{'bk':show_bk2==5}">退出</div>
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:'江苏分公司',
            show_bk:0,
            show_bk2:1,
            cad:true,
        }
    },
    methods:{
        tes(){
            this.sh=true;
        },
        showBK(a){
            if(a==7){
                this.cad=false;
            }else{
                this.cad=true;
            }
            this.show_bk=a;
        },
        showBK2(a){
            this.show_bk2=a;
        },
    }
}
</script>
<style scoped>
.card_li{
    height: 32px;
    line-height: 32px;
    padding:5px 16px;
    text-align: left;
    
}
.dp{
   display: none;
}
.card2{
    opacity: 0;
    height: 0;
}
.card{
    transition: all .5 linear;
    opacity: 1;
    min-height: 192px;
    width:226px;
    position:absolute;
    top:50px;
    right:135px;
    background-color: #fff;
    padding:16px 0;
}
.hello_place{
    position: relative;
    left:-10px;
}
.bk{
    background-color:rgba(158,158,158,.18) ;
}
.font{
    font-size: 12px!important;
    height: 100%;
    padding:15px 12px;
    
}
.my_place{
    position: fixed;
    top:0;
    z-index: 10000;
    background:#fff;
    width:100%; 
}
.center{
    
    width:68%;
    display: flex;
    /* justify-content: space-between; */
    float:right;
    cursor: pointer;
}
.my_span{
    display: inline-block;
    width:12px;
    height: 12px;
    background: url(/img/header/dd.png) no-repeat center center;
    background-size: 120%; 
    position: relative;
    top:2px;
}
.span2{
    background: url(/img/header/wj.png) no-repeat center center;
    background-size: 120%; 
}
.span3{
    background: url(/img/header/ht.png) no-repeat center center;
    background-size: 120%; 
}
.span4{
    background: url(/img/header/yh.png) no-repeat center center;
    background-size: 120%; 
}
.span5{
    background: url(/img/header/xjt.png) no-repeat center center;
    background-size: 90%; 
}

</style>