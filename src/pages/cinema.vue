<template>
	<div class="cinema">
		<div class="tou">
			<mt-header title="小莱电影" style="font-size: 0.16rem; background: #076fa2;">
				<router-link to="/" slot="left">
		    		<mt-button icon="back"></mt-button>
		 	 	</router-link>
			</mt-header>
			<h3>{{$route.query.title}}<em>{{$route.query.rank}}</em></h3>
		</div>
		<div class="container">
			<div class="scene-item" v-for="(i,j) in list" :key="j">
				<span class="c-time">{{i.time}}</span>
				<span class="c-type"><p>{{i.type}}</p><em>{{i.address}}</em></span>
				<span class="c-price">￥{{i.price}}</span>
				<span class="c-btn"><button @click="buy(i._id)">选择购票</button></span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			list:[]
		}
	},
	async created(){
		var res = await this.$http.get("/cinema?title="+this.$route.query.title)
		console.log(res)
		this.list = res.data
	},
	methods:{
		buy(id){
			this.$router.push({path:"/seat",query:{id}})
		}
	}
}
</script>

<style lang="less" scoped>
.cinema{
	
	
	.tou{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1;
		h3{
			background: #fff;
			text-align: center;
			padding: 0.08rem;
			font-size: 0.16rem;
			color: #076fa2;
			em{
				font-style: normal;
				font-size: 0.13rem;
				color: #f90;
				margin-left: 0.05rem;
			}
		}
	}
	.container{
		margin-top: 0.85rem;
		
		.scene-item:nth-child(even){
			background: #fff;
		}
		.scene-item{
			display: flex;
			justify-content: space-around;
			align-items: center;
			font-size: 0.14rem;
			padding: 0.13rem 0;
			em{
				display: block;
				width: 100%;
				font-style: normal;
				font-size: 0.1rem;
				text-align: center;
				
			}
			button{
				padding: 0.05rem;
				border: 1px solid #076fa2;
				color: #076fa2;
				border-radius:0.03rem ;
				font-size: 0.12rem;
			}
		}
	}
	
}
</style>