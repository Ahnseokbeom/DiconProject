<template>
	<div>
		<header>
		<div>
  <a href="/"><h1>GameRating</h1></a>
  </div>
		</header>
	<div class="container">
		<form @submit.prevent="submitForm">
			<table>
				<tr>
				<label for="name">이름 : </label>
				<input type="text" id="name" v-model="name" style="margin-left: 105px;"/>
			</tr>
				<tr>
				<label for="email">아이디 : </label>
				<input type="text" id="email" v-model="email" style="margin-left: 87.5px;"/>
				</tr>
			<tr>
				<label for="password">비밀번호 : </label>
				<input type="password" id="password" v-model="password" style="margin-left: 70px;"/>
			</tr>
			<tr>
				<label for="passwordConfirm">비밀번호 확인 : </label>
				<input type="password" id="passwordConfirm" v-model="passwordConfirm" style="margin-left: 23px;"/>
			</tr>
			<tr>
				<label for="phonenumber">휴대전화 : </label>
				<input type="phonenumber" id="phonenumber" v-model="phonenumber" style="margin-left: 70px;" placeholder="010-1234-5678" />
			</tr>
			<tr>
				<input type="phonetest" id="ttest" v-model="phonetest" style="margin-left:0px;" placeholder="ex)서든어택, 롤" />
				<button type="text" id="test">인증번호 받기</button>
			</tr>
			</table>
			<button type="submit" id="account">회원가입</button>
		</form>
	</div>
	</div>
</template>

<script>
export default {
	name: 'SignUp',
	data() {
		return {
			email: '',
			name: '',
			password: '',
			passwordConfirm: '',
			phonenumber:'',
			phonetest:''
		};
	},
	methods: {
		submitForm() {
			alert("회원가입 완료!")
			console.log('회원가입 완료!');
		},
	},
};
</script>


<style scoped>
placeholder {
	opacity: 50%;
}
div {
    font-family: 'Nanum Gothic Coding', monospace;
}
h1 {
	margin-left: 750px;
}
a{
  text-decoration: none;
  color : white;
}
#top {
  z-index: 1;
  display: flex;
  justify-content: center;
  text-align: left;
  font-size: 30px;
  padding : 10px 100px;
  margin : 10px auto;
  /* background-color: yellow; */
}
#top2 {
  text-align: left;
  display: inline-block;
  font-size: 30px;
  padding : 10px 100px;
}
header {
  position:fixed;
  top:0px;
  padding: 1rem;
  color: white;
  background: rgb(210, 202, 226);
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  width:100%;
}
#ttest{
	padding-top: 3px;
	padding-bottom: 9px;
	width: 60%;
	height: 35px;
	font-size: 25px;
	margin-left: -5px;
	text-align: center;
}
button#test {
	font-size: 20px;
	font-weight: bold;
	padding-top: 10px;
	padding-bottom: 13px;
	margin-top: -50%;
	color : white;
	border: none;
	background-color: rgb(210, 202, 226);
	cursor: pointer;
	width: 35.5%;
	height: 50px;
	margin-left: 16px;
}
button#account{
	cursor: pointer;
	width: 100%;
	height: 50px;
	text-align: center;
	border: none;
	font-size: 30px;
	margin-top: 20px;
	color : white;
	background-color: rgb(210, 202, 226);
}
label {
	font-size: 20px;
	/* background-color: yellow; */
}
button {
	font-family: 'Nanum Gothic Coding', monospace;
}
input {
	font-family: 'Nanum Gothic Coding', monospace;
	/* background-color: red; */
	text-align: left;
	margin-top: 20px;
	margin-left: 30px;
	font-size: 30px;

}
div.container {
	position: absolute;
	top : 30%;
	left :35%;
	/* background-color: yellow; */
	/* padding-top: 100px; */
	display: flex;
	justify-content: center;
}
</style>