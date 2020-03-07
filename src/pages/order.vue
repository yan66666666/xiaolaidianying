<template>
	<div class="order">
		<mt-header title="我的订单" fixed style="font-size: 0.16rem; background: #076fa2;"></mt-header>
		<div class="container">
			<div class="order-item" v-for="(i,j) in obj" :key="j">
	    		<div class="shang">
	    			<div class="le"><img src="../../../server/src/img/t2.jpg"/></div>
	    			<div class="ri">
	    				<em>{{i.title}} {{i.checked.length}}张</em>
	    				<p>6月26日 {{i.time}}</p>
	    				<p>{{i.address}} <span v-for="(ic,jc) in i.checked" :key="jc">{{ic[0]}}排{{ic[1]}}座</span> </p>
	    			</div>
	    			
	    		</div>
	    		<div class="status">
	    			<em>总价：{{i.total}}元</em><span>已完成</span>
	    		</div>
	    	</div>
		</div>
		
		<div class="nav-bar">
	   		<ul>
	   			<li><router-link to="/" class="active01 di1"><span>电影</span></router-link></li>
	   			<li><router-link to="/order" class="di2" ><span>订单</span></router-link></li>
	   			<li><router-link to="/user" class="di3" ><span>我的</span></router-link></li>
	   		</ul>
   		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			obj:{}
		}
	},
	async created(){
		var res = await this.$http.get("/order?user="+sessionStorage.getItem("user"))
		console.log(res)
		this.obj = res.data;
	}
}
</script>

<style lang="less" scoped>
.order{
	.container{
		margin-top: 0.55rem;
		margin-bottom: 0.7rem;
		
		.order-item{
			margin-top: 0.1rem;
			
			background: #fff;
			.shang{
				display: flex;
				border-bottom:1px solid #f6f6f6;
				padding: 0.1rem;
				.le{
					flex: 2;
					img{
						width: 100%;
					}
					
				}
				.ri{
					flex: 5;
					padding-left: 0.1rem;
					em{
						display: block;
						font-style:normal ;
						font-weight: bold;
						color: #4b4b4b;
						margin: 0.05rem 0 0.15rem ;
					}
					p{
						line-height: 2em;
						font-size: 0.14rem;
						color: #333333;
					}
				}
				
			}
			.status{
				padding: 0.1rem;
				font-size: 0.14rem;
				display: flex;
				justify-content: space-between;
				color: #333333;
				em{
					font-style:normal ;
					color: #333333;
				}
			}
			
			
		}
	}
	
	
	
	
	
	
	
	
	.nav-bar{
		position: fixed;
		bottom: 0;
		width:100% ;
		background: #076FA2;
		height: 0.6rem;
		ul{
			display: flex;
			justify-content: space-around;
			
			list-style: none;
			
			li{
				
				a{
					color: #fff;
					display: flex;
					align-items: flex-end;
					height: 0.57rem;
					font-size: 0.14rem;
				}
				.di1{
					background: url(../../static/img/movie_icon2.png) no-repeat center 25% ;
					background-size:100% ;
				}
				.di2{
					background: url(../../static/img/order_icon.png) no-repeat center 25% ;
					background-size:100% ;
					span{
						color: #FF9900;
					}
				}
				.di3{
					background: url(../../static/img/uder.png) no-repeat center 25% ;
					background-size:100% ;
				}
			}
		}
	}
}
</style>