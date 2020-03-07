<template>
	<div class="home">
		<div class="tou">
			<mt-header title="小莱电影" style="font-size: 0.16rem; background: #076fa2;"></mt-header>
			<h3>影片</h3>
		</div>
		<div class="container">
			<div class="movie-list" v-for="(i,j) in movieList" :key="j" @click="goDetail(i._id)">
				<div class="cont">
					<div class="movie-img">
						<img v-bind="{src:picURL+i.pic}"/>
					</div>
					<div class="movie-info">
						<div class="hd">
	    					<h2>{{i.title}}</h2>
	    					<div class="movie-type"><span>{{i.type}}</span><s>IMAX</s></div>
	    				</div>
	    				<p class="one">剧情：{{i.category.join("、")}}</p>
	    				<p>主演：{{i.person.join("、")}}</p>
	    				<div class="grade">{{i.rank}}分</div>
	    				<div class="bt">
							<mt-button type="primary" size="small" style="background: #076fa2; font-size: 0.12rem; padding: 0 0.2rem;" @click="submit()">购票</mt-button>
						</div>
					</div>
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
			movieList:[]
		}
	},
	async created(){
		var res =await this.$http.get("/movie")
//		console.log(res)
		this.movieList = res.data
	},
	methods:{
		goDetail(id){
			this.$router.push({path:"/detail",query:{id}})
		}
	}
}
</script>

<style lang="less" scoped>
.home{
	
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
			
		}
	}
	.container{
		padding: 0.85rem 0 0.6rem;
		
		.movie-list{
			position: relative;
			
			.cont{
				padding: 0.1rem;
				border-bottom: 1px solid #ddd;
				display: flex;
				.movie-img{
					flex: 2;
					img{
						width: 100%;
						height: auto;
					}
				}
				.movie-info{
					flex: 4;
					padding: 0 0.1rem;
					box-sizing: border-box;
					h2{
						font-size: 0.14rem;
						
					}
					.movie-type{
						width: 0.7rem;
						border: 1px solid #076fa2;
						border-radius:0.03rem ;
						font-size: 0.14rem;
						overflow: hidden;
						margin-top: 0.08rem;
						span{
							background: #076fa2;
							padding: 0 0.05rem;
							color: #fff;
						}
						s{
							text-decoration: none;
							text-align: center;
							padding: 0 0.03rem;
						}
						
					}
					p{
						font-size: 0.12rem;
						line-height: 0.2rem;
					}
					.one{margin-top: 0.1rem;}
					
					.grade{
						position: absolute;
						right: 8%;
						top: 0.25rem;
						color: #f90;
						font-weight: bold;
					}
					.bt{
						position: absolute;
						right: 5%;
						bottom: 0.2rem;
					}
					
					
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
					background: url(../../static/img/movie_icon.png) no-repeat center 25% ;
					background-size:100% ;
					span{
						color: #FF9900;
					}
				}
				.di2{
					background: url(../../static/img/order.png) no-repeat center 25% ;
					background-size:100% ;
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