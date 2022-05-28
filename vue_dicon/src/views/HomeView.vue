<template>
<header style="z-index:100">
  <div>
  <a href="/"><h1>GameRating</h1></a>
  </div>
  <div id ="top">
    <table>
      <tr>
        <td id="top2"><a href="/Game" id="top3">Game</a></td>
        <td id="top2"><a href="/Ranking" id="top3">Ranking</a></td>
        <td id="top2"><a href="/Evaluation" id="top3">Evaluation</a></td>
        <td id="top2"><a href="/QnA" id="top3">QnA</a></td>
      </tr>
    </table>
    <div>
     <input type="text" style="color : white" placeholder="게임 이름을 입력해주세요 " >
    </div>
  </div>
  <div id ="login">
   <a href="/LogIn">Login</a> / <a href="/signUp">SignUp</a>
  </div>
  </header>
  <main-com />
  <foo-ter />
  <foo-ter-2 />
</template>
<script >
import MainCom from '@/components/MainCom.vue'
import FooTer from '@/components/FooTer.vue'
import FooTer2 from '@/components/FooTer2.vue';
export default {
  components: { MainCom ,FooTer, FooTer2},
  data(){
  return {
    value : ""
    };
},
}


</script>

<style scoped>
input::placeholder {
  color: white;
  font-family: 'Nanum Gothic Coding', monospace;
}
div {
    font-family: 'Nanum Gothic Coding', monospace;
}
input {
  font-family: 'Nanum Gothic Coding', monospace;
  opacity: 50%;
  text-align: center;
  border: 1px solid rgb(220,220,220);
  position: absolute;
  top : 0px;
  right: 300px;
  font-size: 20px;
  width: 25%;
  height: 40px;
  margin: 10px auto;
  background-color: rgb(198, 186, 219);
  border-radius: 10px;
}
li {
  list-style: none;
}
a{
  text-decoration: none;
  color : white;
}
td {
  margin-top: 20px;
}
#top {
  display: flex;
  justify-content: center;
  text-align: left;
  font-size: 30px;
  padding : 10px 100px;
  margin : 0 auto;
  /* background-color: yellow; */
}
#top2 {
  text-align: left;
  display: inline-block;
  font-size: 30px;
  padding : 10px 100px;
}
#top3:hover {
  cursor: pointer;
  text-decoration: underline;
  color : rgb(215,219,239);
}
#login {
  z-index : 10;
  position: fixed;
  top:21.5px;
  right:20px;
  text-align: right;
  font-size: 20px;
}
#login:hover {
  cursor: pointer;
}
header {
  position:fixed;
  top:0px;
  padding: 1rem;
  color: white;
  background: rgb(210, 202, 226);
  /* background: rgb(128,128,200); */
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  width:100%;
}
</style>
