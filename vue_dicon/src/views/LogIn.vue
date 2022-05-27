<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap" rel="stylesheet">
	<div>
		<header>
		<div>
<a href="/"><h1>GameRating</h1></a>
</div>
		</header>
        <div id="login">GameRating 로그인</div>
	<div class="container">
		<form @submit.prevent="submitForm">
			<table>
                <tr>
				<label>로그인 후 이용하실 수 있습니다.</label><br>
				</tr>
				<tr>
				<label for="email">아이디 : </label>
				<input type="text" id="email" v-model="email" style="margin-left: 90px;"/>
                
				</tr>
            <tr>
				<label for="password">비밀번호 : </label>
				<input type="password" id="password" v-model="password" style="margin-left: 70px;"/>
			</tr>
            <tr>
                <button type="submit" id="account" style=" margin-bottom: 30px;">로그인</button>
            </tr>
            <tr>
                <label><a href="/Signup" style="color : black;">회원가입</a> | 
				<a href="FoundID"  style="color : black;">아이디 찾기</a> |
				<a href="FoundPW" style="color : black;">비밀번호 찾기</a></label>
            </tr>
			</table>
		</form>
	</div>
</div>
<div>
        <img src="../img/login1.png" style="position :fixed; top:480px; right:1400px;">
        <img src="../img/login2.png" style="position :fixed; top:200px; left:1400px;">
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
			phonetest:'인증번호를 입력하세요.'
		};
	},
	methods: {
		submitForm() {
			alert("로그인 되었습니다.")
			console.log('회원가입 완료!');
		},
	},
};
</script>


<style scoped>
img {
    width: 900px;
    height: 500px;
}
div {
    font-family: 'Nanum Gothic Coding', monospace;
}
#login {
    position: fixed;
    left : 100px;
    top: 180px;
    font-size: 30px;
    color: rgb(210, 202, 226);
}
h1 {
	margin-left: 750px;
}
a{
  text-decoration: none;
  color : white;
}
#top {
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
input {
	/* background-color: red; */
	text-align: left;
	margin-top: 20px;
	margin-left: 30px;
	font-size: 30px;

}
div.container {
	position: absolute;
	top : 40%;
	left :35%;
	/* background-color: yellow; */
	/* padding-top: 100px; */
	display: flex;
	justify-content: center;
}
</style>