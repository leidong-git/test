<template>
	<div class="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'tab-bar',
		components:{
			
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
	.tab-bar{
		width: 100%;
		height: 60px;
		background: #fff;
		box-shadow: 0 -1px 5px #f1f1f1;
		position: fixed;
		bottom: 0;
		z-index: 101;
		display: flex;
	}
</style>
