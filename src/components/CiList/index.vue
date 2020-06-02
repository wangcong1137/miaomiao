<template>
    <div class="cinema_body">
    <Loading v-if="isLoading"></Loading>
    <Scroller v-else>
        <ul>
            <li v-for="v in cinemaList" :key="v.id">
                <div>
                    <span>{{ v.nm }}</span>
                    <span class="q"><span class="price">{{ v.sellPrice +1 }}</span> 元起</span>
                </div>
                <div class="address">
                    <span>{{ v.addr }}</span>
                    <span>{{ v.distance }}</span>
                </div>
                <div class="card">
                    <div v-for="(num,item) in v.tag" v-if="num===1" :key="item" :class="item | classCard" >{{ item |formatCard }}</div>
                </div>
            </li>
        </ul>
        </Scroller>
    </div>
</template>
<script>
export default {
    name:'ciList',
    data(){
        return {
            cinemaList:[],
            isLoading : true,
            prevCityId : -1
        }
    },
    activated(){
        var cityId = this.$store.state.city.id
        if(this.prevCityId === cityId){
            return
        }
        this.isLoading = true
        this.axios.get('/api/cinemaList?cityId='+cityId).then((res)=>{
            var msg = res.data.msg
            if(msg === 'ok'){
                this.cinemaList = res.data.data.cinemas
                this.isLoading = false
                this.prevCityId = cityId
            }
        })
    },
    filters:{
        formatCard(item){
            var card = [
                { item : "allowRefund" ,value : "改签"},
                { item : "endorse" ,value : "退"},
                { item : "sell" ,value : "折扣卡"},
                { item : "snack" ,value : "小吃"},
            ]
            for(var i=0;i<card.length;i++){
                if(card[i].item == item){
                    return card[i].value
                }
            }
            return ''
        },
        classCard(item){
            var card = [
                { item : "allowRefund" ,value : "or"},
                { item : "endorse" ,value : "or"},
                { item : "sell" ,value : "bl"},
                { item : "snack" ,value : "bl"},
            ]
            for(var i=0;i<card.length;i++){
                if(card[i].item == item){
                    return card[i].value
                }
            }
            return ''
        }
    }
}
</script>
<style scoped>
#content .cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>