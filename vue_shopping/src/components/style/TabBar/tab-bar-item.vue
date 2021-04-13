<template>
	<div class="tab-bar-item" @click="itemclick">
		<slot v-if="!isActive" name="item-icon"></slot>
		<slot v-else name="item-icon-active"></slot>
		<div :style="isStyle">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:'tab-bar-item',
		props:{
			path:String,
			activecolor:{
				type:String,
				default:'red'
			}
		},
		data(){
			return{
				
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) !== -1
			},
			isStyle(){
				return this.isActive ? {color:this.activecolor} : {}
			}
		},
		methods:{
			itemclick(){
				this.$router.replace(this.path);
			}
		}
	}
</script>
<style>
	.tab-bar-item{
		flex: 1;
		color: #434343;
		text-align: center;
	}
	.tab-bar-item img{
		width: 30px;
		height: 30px;
		display: inline-block;
		vertical-align: bottom;
		margin:7px 0 0 0;
	}
	.tab-bar-item span{
		width: 100%;
		line-height: 20px;
		display: inline-block;
	}
</style>
