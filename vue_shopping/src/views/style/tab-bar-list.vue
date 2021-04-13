<template>
	<div class="tab-bar-list">
		<tab-bar>
			<tab-bar-item path="/index" activecolor="#05f2ff">
				<img slot="item-icon" src="~assets/images/dh_sy.png" alt="">
				<img slot="item-icon-active" src="~assets/images/dh_sy_active.png" alt="">
				<span slot="item-text">首页</span>
			</tab-bar-item>
			<tab-bar-item path="/type" activecolor="#05f2ff">
				<img slot="item-icon" src="~assets/images/dh_type.png" alt="">
				<img slot="item-icon-active" src="~assets/images/dh_type_actove.png" alt="">
				<span slot="item-text">分类</span>
			</tab-bar-item>
			<tab-bar-item path="/shopping" activecolor="#05f2ff">
				<img slot="item-icon" src="~assets/images/dh_gwc.png" alt="">
				<img slot="item-icon-active" src="~assets/images/dh_gwc_active.png" alt="">
				<span slot="item-text">购物车</span>
			</tab-bar-item>
			<tab-bar-item path="/home" activecolor="#05f2ff">
				<img slot="item-icon" src="~assets/images/dh_my.png" alt="">
				<img slot="item-icon-active" src="~assets/images/dh_my_active.png" alt="">
				<span slot="item-text">我的</span>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from 'style/TabBar/tab-bar.vue'
	import TabBarItem from 'style/TabBar/tab-bar-item.vue'
	
	export default{
		name:'tab-bar-list',
		components:{
			'tab-bar':TabBar,
			'tab-bar-item':TabBarItem
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>
<style>

</style>
