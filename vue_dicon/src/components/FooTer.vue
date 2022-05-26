<template>
  <div id="footer">

    <div id="user">
    당신을 위한<br>게임추천
    </div>
    <div>
        <table>
        <tr>
        <td><a href="/GameSport"><img src="../img/Sport.png" id = "foot"></a></td>
        <td><a href="/GameRpg"><img src="../img/RPG.png" id = "foot"></a></td>
        <td><a href="/GameFps"><img src="../img/FPS.png" id = "foot"></a></td>
        <td><a href="/GameAos"><img src="../img/AOS.png" id = "foot"></a></td>
        </tr>
        <tr>
        <td><p>Sport</p></td>
        <td><p>PRG</p></td>
        <td><p>FPS</p></td>
        <td><p>AOS</p></td>
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
    cursor: pointer;
    margin-top: 10px;
    color : white;
    font-weight: bold;
    font-size: 40px;
    margin-left: 130px;
    text-align: center;
}
#foot {
    margin-top: 100px;
    margin-left: 130px;
}
#user{
    margin : 20px;
    /* margin : 50px; */
    width: 100%;
    text-align: left;
    color : white;
    font-weight: bold;
    font-size: 30px;
}
img {
  width : 250px;
  height: 150px;
  /* background-color: yellow; */
}
#footer {
  /* background-color: yellow; */
  z-index: 2;
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: center;
  position: absolute;
  top : 550px;
  background-color: rgb(210,219,239);
}
</style>
