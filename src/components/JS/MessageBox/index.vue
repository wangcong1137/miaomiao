<template>
    <div class="box">
        <div>
            <h3>{{title}}</h3>
            <p>{{content}}</p>
        </div>
        <div class="boxOne">
            <div @touchstart="handleCancel">{{cancel}}</div>
            <div @touchstart="handleOk">{{ok}}</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.box{width: 200px;height: 120px;position: absolute;top: 50%;left: 50%;margin-left: -100px;margin-top:-55px;background: #fff;border-radius: 4px;box-shadow: 3px 3px 3px 3px #ccc;border: 1px solid #ccc;}
.box h3{text-align: center;line-height: 40px;font-size: 18px;}
.box p{text-align: center;line-height: 40px;}
.box .boxOne{display: flex;border-top: 1px solid #ccc;justify-content: space-around;align-items: center;position: absolute;bottom: 0;width: 100%;}
.box .boxOne div{text-align: center;flex: 1;}
.box .boxOne div:first-child{border-right: 1px solid #ccc;}
</style>