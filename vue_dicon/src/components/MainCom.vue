<template>
  <div id="main">
    <div>
      <table>
        <tr>
          <td><a href="https://www.leagueoflegends.com/ko-kr/"><img src="../img/롤2.jpg"></a></td>
          <td><a href="https://lostark.game.onstove.com/Promotion/Update/220427/Elgacia"><img src="../img/로아.jpg"></a></td>
          <td><a href="https://sa.nexon.com/main/index.aspx"><img src="../img/서든어택.jpg"></a></td>
        </tr>
        <tr>
          <td><a href="https://df.nexon.com/df/home"><img src="../img/던파.jpg"></a></td>
          <td><a href="https://maplestory.nexon.com/"><img src="../img/메이플스토리.jpg"></a></td>
          <td><a href="https://playvalorant.com/ko-kr/"><img src="../img/발로란트.jpg"></a></td>
        </tr>
        <tr>
          <td><a href="https://playoverwatch.com/ko-kr/"><img src="../img/오버워치.jpg"></a></td>
          <td><a href="https://fifaonline4.nexon.com/main/index"><img src="../img/피파.jpg"></a></td>
          <td><a href="https://heroesofthestorm.com/ko-kr/"><img src="../img/히오스.jpg"></a></td> 
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
    font-family: 'Nanum Gothic Coding', monospace;
}
p {
  color : black;
}

img {
  width : 500px;
  height: 320px;
  display: block;
  margin : 0 auto;
  padding : 10px 10px 10px 70px;
}
#main {
  /* background-color: yellow; */
  overflow: scroll; width:100%; height: 320px;
  -ms-overflow-style: none;
  display: flex;
  justify-content: center;
  position: absolute;
  top : 180px;
}
::-webkit-scrollbar {
  display: none;
}
a {
  color: #42b983;
}
</style>
