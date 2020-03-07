<template>
	<div class="user">
		<mt-header title="我的" style="font-size: 0.16rem; background: #076fa2;"></mt-header>
		<div class="user_list">
			<ul>
				<li>我的订单</li>
				<li>优惠卷</li>
				<li>影院会员卡</li>
			</ul>
			<ul>
				<li>我的订单</li>
				<li>优惠卷</li>
				<li>影院会员卡</li>
			</ul>
		</div>
		<div class="bt">
			<mt-button type="primary" size="large" style="background: #076fA2; font-size: 0.14rem; padding: 0 0.2rem;" @click="submit()">退出登录</mt-button>
		</div>
		<div class="bg">
			<div class="bg_t">
				<img src="../../static/img/LOGO_gray.png"/>
			</div>
			<p>客服电话：027-87229009</p>
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
	methods:{
		submit(){
			sessionStorage.removeItem("user")
			this.$toast("退出成功")
			this.$router.push("/login")
		}
	}
}

</script>

<style lang="less" scoped>
.user{
	
	.user_list{
		
		ul{
			
			margin: 0.1rem 0;
			list-style: none;
			
			li{
				background: #fff;
				border-bottom:1px solid #EFEFEF ;
				padding: 0.13rem;
				font-size: 0.14rem;
				background: #fff url(../../static/img/left_gray.png) no-repeat 97%;
				background-size: 2% ;
			}
		}
	}
	.bt{width: 95%; margin: 0 auto;}
	.bg{
		width: 60%;
		margin: 0 auto;
		text-align: center;
		margin-top: 0.2rem;
		.bg_t{
			img{
				width: 100%;
			}
		}
		p{
			width: 60%;
			margin: 0 auto;
			color: #999;
			margin-top: 0.05rem;
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
					background: url(../../static/img/order.png) no-repeat center 25% ;
					background-size:100% ;
				}
				.di3{
					background: url(../../static/img/uder_icon.png) no-repeat center 25% ;
					background-size:100% ;
					span{
						color: #FF9900;
					}
				}
			}
		}
	}
	
	
}

</style>