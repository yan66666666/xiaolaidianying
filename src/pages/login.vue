<template>
	<div class="login">
		<div class="logo">
			<img src="../../static/img/LOGO.png"/>
		</div>
		<div class="biaodan">
			<label><input type="text" v-model="obj.userName" placeholder="请输入用户名" /></label>
			<label><input type="password" v-model="obj.pwd" placeholder="请输入密码" /></label>
			
		</div>
		<div class="denglu">
			<mt-button type="primary" size="large" @click="submit()">登录</mt-button>
		</div>
		<div class="tiaozhuan">
			<router-link to="/reg">还没账号？</router-link>
			<router-link to="/">暂不登录</router-link>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			obj:{
				userName:"",
				pwd:""
			}
		}
	},
	methods:{
		async submit(){
			if(!this.obj.userName || !this.obj.pwd){
				this.$toast("用户名或密码错误")
				return false
			}
			
			var res = await this.$http.post("/login",this.obj)
			console.log(res)
			this.$toast(res.data.message)
			if(res.data.status){
				sessionStorage.setItem("user",this.obj.userName)
				this.$router.push("/")
				
			}else{
				this.obj.userName = ""
				this.obj.pwd = ""
			}
			
			
		}
	}
}
</script>

<style scoped lang="less">
.login{
	background: -webkit-radial-gradient(circle,#fff, #efefef);
	height: 100%;
	position: fixed;
	top: 0; bottom: 0; left: 0; right: 0;
	margin: auto;
	padding-top: 40%;
	.logo{
		margin: 0 auto;
		text-align: center;
		width: 1rem;
		img{width: 100%;}
	}
	.biaodan{
		padding: 7% 0 ;
		label{
			display: block;
			padding: 3% 0 0;
			border-bottom:1px solid #efefef ;
			
			input{
				box-sizing: border-box;
				background: none;
				border: none;
				display: block;
				width: 100%;
				padding: 0.12rem;
				text-align: center;
			}
		}
	}
	.denglu{
		padding: 0 3%;
		button{
			height: 0.5rem;
			font-size: 0.14rem;
			background: #076fa2;
		}
	}
	.tiaozhuan{
		display: flex;
		justify-content: space-between;
		padding: 3%;
		
		a{
			font-size: 0.1rem;
			color: #888;
		}
		
	}
}
</style>