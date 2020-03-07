<template>
	<div class="detail">
		<mt-header :title="obj.title" fixed style="z-index: 100;">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<div class="banner">
			<div class="thumbnail">
    			<img v-bind="{src:picURL+obj.pic}"/>
    		</div>
			<div class="movie-intr">
    			<h1>{{obj.title}}</h1>
    			<div class="star-level">
    				<div id="star_con" class="star-vote">
						<span id="add_star" class="add-star" :style="{width: w}"></span>
						<span id="del_star" class="del-star"></span>
					</div>
    				<div class="point">
    					{{obj.rank}}
    				</div>
    			</div>
    			<p>剧情：{{obj.category}}</p>
    			<p>主演：{{obj.person}}</p>
    			<p>上映时间：{{obj.time}}大陆</p>
    		</div>
		</div>
		<div class="movie-recommend">
    		<p>{{obj.description}}</p>
    	</div>
    	<div class="anniu">
			<mt-button type="primary" size="large" style="border-radius:0 ; background: #076FA2; font-size: 0.16rem;" @click="submit()">立即购票</mt-button>
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
	computed:{
		w(){
			return this.obj.rank*10 + "%"
		}
	},
	async created(){
		var res = await this.$http.get("/movie?id="+this.$route.query.id)
//		console.log(res)
		this.obj = res.data
		this.obj.category = this.obj.category.join("、")
		this.obj.person = this.obj.person.join("、")
	},
	methods:{
		submit(){
			this.$router.push({path:"/cinema",query:{title:this.obj.title,rank:this.obj.rank}})
		}
	}
}
</script>

<style lang="less" scoped>
.detail{
	header{
		background: #076fa2;
		height: 0.45rem;
	}
	.banner{
		display: flex;
		background: url(../../static/img/bg.jpg) no-repeat;
		background-size:cover ;
		padding: 0.1rem;
		margin-top:0.45rem ;
		.thumbnail{
			flex: 2;
			margin-right:0.1rem ;
			img{
				width: 100%;
			}
			
		}
		.movie-intr{
			flex: 4;
			
			h1{
				font-size: 0.16rem;
				color: #fff;
			}
			.star-vote{
				position: relative;
				width: 0.93rem;
				height: 0.16rem;
				margin: 0.1rem 0;
				span{
					display: block;
					
					width: 100%;
					height: 100%;
					position: absolute;
					left: 0;
					top: 0;
				}
				
				.del-star{
					background: url(../../static/img/2.png) no-repeat;
					background-size:cover ;
				}
				
				.add-star{
					background: url(../../static/img/1.png) no-repeat;
					background-size:cover ;
					z-index: 1;
					
				}
				
				
			}
			.point{
				color: #fff;
				font-size: 0.12rem;
				margin-bottom: 0.08rem;
			}
		}
		p{color: #fff; font-size: 0.14rem; line-height: 1.5em;}
	}
	.movie-recommend{
		padding: 0.1rem;
		text-indent: 2em;
		font-size: 0.14rem;
		line-height: 2em;
		padding-bottom: 0.6rem;
	}
	
	.anniu{position: fixed; bottom: 0; left: 0; right: 0;}
}
</style>