<template>
	<div class="seat">
		<div class="tou">
			<mt-header title="小莱电影" style="font-size: 0.16rem; background: #076fa2;">
				<router-link to="/" slot="left">
		    		<mt-button icon="back"></mt-button>
		 		</router-link>
			</mt-header>
			<div class="seat-title">
		        <h2>{{obj.title}}</h2>
		        <h4>今天6月26日 {{obj.time}} {{obj.type}}</h4>
		        <div class="lobby">
		        	<span>{{obj.address}}厅银幕</span>
		        </div>
		    </div>
		</div>
		<div class="seating">
			<ul>
				<li v-for="(i,j) in seat" :key="j" :abc="i" :class="i[2]==2?celled:i[2]==1?selecteda:''" @click="select(i,j)"></li>
			</ul>
		</div>
		
		<div class="tips-seat">
			<span class="selecting">可选</span><span class="selected">已选</span><span class="selled">已售</span>
		</div>
		
		<div class="ticket">
			<h5>已选座位</h5>
			<div class="ticket-item" v-for="(i,j) in checked" :key="j">
				{{i[0]}}排{{i[1]}}座<em>￥{{obj.price}}</em>
				<span></span>
			</div>
		</div>
		
		<div class="anniu">
			<mt-button type="primary" size="large" style="border-radius:0 ; background: #076FA2;  font-size: 0.16rem;" @click="submit()">￥{{obj.price*checked.length}}立即购票</mt-button>
		</div>
		
	</div>
</template>

<script>
export default {
	data(){
		return {
			obj:{},
			seat:[],
			celled:"celled",
			selecteda:"selecteda"
		}
	},
	async created(){
		var res =await this.$http.get("/cinema?id="+this.$route.query.id)
		console.log(res)
		this.obj = res.data
		var selected = res.data.selected.join("|").split("|")
		
		for(var i=1;i<=this.obj.seatNumber;i++){
			var row = Math.ceil(i/10)
			var col = i%10?i%10:10
			if(selected.includes(row+","+col)){
				this.seat.push([row,col,2])
			}else{
				this.seat.push([row,col,0])
			}
			
		}
		console.log(this.seat)
		
	},
	methods:{
		select(i,j){
			if(i[2] != 2){
				if(i[2] != 1){
					this.seat.splice(j,1,[i[0],i[1],1])
				}else{
					this.seat.splice(j,1,[i[0],i[1],0])
				}
				
			}
			
		},
		async submit(){
			if(sessionStorage.getItem("user")){
				if(this.checked.length <= 0){
					this.$toast("请选择购票")
					return false
				}
				if(this.checked.length > 6){
					this.$toast("最大购票数是6张")
					return false
				}
				
				var data = {
					title:this.obj.title,
					time:this.obj.time,
					address:this.obj.address,
					checked:this.checked,
					total:this.obj.price*this.checked.length,
					user:sessionStorage.getItem("user")
				}
				var zuowei= this.obj.selected.concat(this.checked.map(i=>i.slice(0,2)))
				this.checked.map(i=>[i[0],i[1]])
				console.log(zuowei)
				var res =await this.$http.post("/order",[data,zuowei,this.obj._id])
				console.log(res)
				this.$toast(res.data)
				
				this.$router.push("/order")
				
			}else{
				this.$router.push("/login")
			}
			
			
			
		}
		
	},
	computed:{
		checked(){
			return this.seat.filter(i=>i[2]==1)
		}
	}
	
}
</script>

<style lang="less" scoped>
.seat{
	.tou{
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1;
		.seat-title{
			background: #fff;
			padding: 0.1rem ;
			line-height: 0.25rem;
			h2{
				font-size: 0.16rem;
				color: #076FA2;
			}
			h4{
				font-size: 0.14rem;
				/*font-weight:normal ;*/
				color: #888;
			}
			.lobby{
				position: absolute;
				bottom: -0.18rem;
				background: url(../../static/img/screen.png) no-repeat center;
				background-size: contain ;
				height: 0.18rem;
				width: 100%;
				font-size: 0.12rem;
				line-height: 0.18rem;
				color: #fff;
				text-align: center;
			}
		}
	}
	
	.seating{
		background: #e3e3e3;
		padding: 1.55rem 0.1rem 0.25rem;
		ul{
			display: flex;
			flex-wrap: wrap;
			list-style: none;
			justify-content: space-around;
		}
		li{
			background: url(../../static/img/e_seat.png) no-repeat center;
			background-size:100% ;
			width: 8%;
			height: 0.3rem;
			margin: 0.03rem;
		}
		.celled{
			background: url(../../static/img/sell_seat.png) no-repeat center;
			background-size:100% ;
		}
		.selecteda{
			background: url(../../static/img/sed_seat.png) no-repeat center;
			background-size:100% ;
		}
		
		
	}
	
	.tips-seat{
		background: #fff;
		display: flex;
		justify-content: space-around;
		padding: 0.1rem;
		font-size: 0.14rem;
		border-bottom: 1px solid #E3E3E3;
		
		span{
			padding-left: 0.3rem;
			box-sizing: border-box;
		}
		.selecting{
			background: url(../../static/img/e_seat.png) no-repeat;
			background-size: contain ;
		}
		.selected{
			background: url(../../static/img/sed_seat.png) no-repeat;
			background-size: contain ;
		}
		.selled{
			background: url(../../static/img/sell_seat.png) no-repeat;
			background-size: contain ;
		}
	}
	
	.ticket{
		background: #fff;
		padding: 0.1rem;
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 0.4rem;
		
		h5{
			font-size: 0.14rem;
			font-weight: normal;
			width: 100%;
			padding-bottom:0.1rem ;
		}
		.ticket-item{
			width: 28%;
			background: url(../../static/img/seat_item.png) no-repeat center center;
			background-size: 100% ;
			font-size: 0.1rem;
			text-align: center;
			margin: 0.05rem;
			box-sizing: border-box;
			position: relative;
			height: 0.4rem;
			padding-top: 0.02rem;
			
			em{
				display: block;
				font-style: normal;
				color: #FF9900;
			}
			span{
				background: url(../../static/img/x.png) no-repeat;
				background-size:90% ;
				width: 0.08rem;
				height: 0.08rem;
				position: absolute;
				right: 4%;
				top: calc(50% - 0.03rem);
				
			}
			
		}
	}
	
	.anniu{
		position: fixed;
		bottom: 0;
		width: 100%;
	}
}
</style>