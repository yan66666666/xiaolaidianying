<template>
	<div class="reg">
		<mt-header title="注册页">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <router-link to="login" slot="right">
		  	<mt-button>登录</mt-button>
		  </router-link>
		</mt-header>
		<div class="zc">
			<!--<mt-field placeholder="请输入用户名" v-model="username"></mt-field>
			<mt-field placeholder="请输入密码" type="password" v-model="password"></mt-field>
			<mt-field placeholder="请确认密码" type="password" v-model="password"></mt-field>-->
			<label><input type="text" v-model="obj.userName" placeholder="请输入用户名"/></label>
			<label><input type="password" v-model="obj.pwd" placeholder="请输入密码"/></label>
			<label><input type="password" v-model="pwds" placeholder="请确认密码"/></label>
		</div>
		<div class="xieyi">
			<input type="checkbox" v-model="flag"  />
			<p> 我已阅读并同意《格莱科技用户协议》</p>
		</div>
		<div class="anniu">
			<mt-button type="primary" size="large" @click="submit()">立即注册</mt-button>
		</div>
		<div class="banquan">
			<p>© 格莱科技 027-87229009</p>
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
			},
			pwds:"",
			flag:true
		}
	},
	methods:{
		async submit(){
			if(!this.flag){
				this.$toast("请仔细阅读协议并同意再进行注册")
				return false
			}
			if(!this.obj.userName || !this.obj.pwd || !this.pwds){
				this.$toast("账号或密码不能为空请重新输入")
				this.obj.userName = ""
				this.obj.pwd = ""
				this.pwds = ""
				return false 
			}
			if(this.obj.pwd != this.pwds){
				this.$toast("两次密码不一致请重新输入")
				this.obj.pwd = ""
				this.pwds = ""
				return false 
			}
			
			var res = await this.$http.post("/reg",this.obj)
			console.log(res)
			this.$toast(res.data.message)
			
		}
		
	}
}
	
	
</script>

<style scoped lang="less">
.reg{
	
	header{
		background: #076fa2;
		height: 0.45rem;
	}
	.zc{
		margin: 1% 0;
		label{
			display: block;
			margin: 2% 0;
			background: #fff;
			input{
				display: block;
				box-sizing: border-box;
				width: 100%;
				height: 100%;
				border: none;
				background: none;
				padding: 0.15rem;
			}
		}
	}
	
	.xieyi{
		display: flex;
		align-items: center;
		padding:0 0.1rem;
		input{
			display: block;
			width: 0.18rem;
			height: 0.18rem;
			margin-right: 0.08rem;
		}
		p{
			font-size: 0.12rem;
		}
	}
	.anniu{
		margin: 0.1rem;
		button{
			/*height: 0.4rem;*/
			font-size: 0.12rem;
			background: #076fa2;
		}
	}
	.banquan{
		p{
			font-size:0.12rem ;
			text-align: center;
		}
	}
	
}

</style>