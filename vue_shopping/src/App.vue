<template>
  <div id="app">
    <router-view/>
	<tab-bar-list></tab-bar-list>
  </div>
</template>

<script>
	
	import TabBarList from './views/style/tab-bar-list.vue'
	
	export default{
		name:'app',
		components:{
			'tab-bar-list':TabBarList,
		}
	}
</script>
<style>
	@import url("~assets/css/style.css");
</style>
