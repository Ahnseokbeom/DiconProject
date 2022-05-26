<template>
    <header>
        <div>
            <a href="/">
                <h1>GameRating</h1>
            </a>
        </div>
        <div id="top">
            <table>
                <tr>
                    <td id="top2">
                        <a href="/Game" id="top3">Game</a>
                    </td>
                    <td id="top4">
                        <a href="/Ranking" id="top3">Ranking</a>
                    </td>
                    <td id="top4">
                        <a href="/Evaluation" id="top3">Evaluation</a>
                    </td>
                    <td id="top4">
                        <a href="/QnA" id="top3">QnA</a>
                    </td>
                </tr>
            </table>
            <div>
                <input type="text" v-model="value" style="color : white"></div>
            </div>
            <div id="login">
                <a href="/LogIn">Login /
                </a>
                <a href="/signUp">SignUp</a>
            </div>
        </header>
        <div id="content">
            <table>
                <tr>
                    <p>FPS</p>
                </tr>
                <tr>
                    <td>
                        <a href="https://playoverwatch.com/ko-kr/"><img src="../img/오버워치.jpg"></a></td>
                        <td>
                            <a href="https://sa.nexon.com/main/index.aspx"><img src="../img/서든어택.jpg"></a></td>
                            <td>
                                <a href="https://pubg.game.daum.net/pubg/index.daum"><img src="../img/배그.jpg"></a></td>
                                <td >
                                    <a href="https://playvalorant.com/ko-kr/"><img src="../img/발로란트.jpg"></a></td>
                                    <td>
                                        <a href="https://www.ea.com/ko-kr/games/battlefield"><img src="../img/배틀필드.jpg"></a></td>
                                    </tr>
                                    <tr>
                    <td>
                        <a href="https://www.ubisoft.com/ko-kr/game/rainbow-six/siege"><img src="../img/레인보우식스.jpg" style="margin-top:50px; z-index: 1;"></a></td>
                        <td>
                            <a href="https://store.steampowered.com/agecheck/app/550/?l=koreana"><img src="../img/레포데.jpg" style="margin-top:50px;"></a></td>
                            <td>
                                <a href="http://sf.dfl.co.kr/Main/HomeMain"><img src="../img/스폐셜포스.jpg" style="margin-top:50px;"></a></td>
                                <td >
                                    <a href="https://csonline.nexon.com/E220519/Contest"><img src="../img/카스.jpg" style="margin-top:50px;"></a></td>
                                    <td>
                                        <a href="https://www.ea.com/ko-kr/games/apex-legends/about"><img src="../img/에이팩스.png" style="margin-top:50px;"></a></td>
                                    </tr>
                                </table>
                            </div>
                            <div>
                                <img src="../img/FPS1.png" style="position:fixed; top:300px; left : 1270px;width:1000px;height: 800px;z-index: 2;">
                                <img src="../img/FPS2.png" style="position:fixed; top:370px; right : 1530px;width:600px;height: 400px;z-index: 2;">
                            </div>
                        </template>
                        <script>
                            export default {
                                data() {
                                    return {value: "게임 이름을 입력해주세요"};
                                }
                            }
                        </script>

<style scoped="scoped">
p {
    margin-left: 60px;
    font-family: 'Nanum Gothic Coding', monospace;
    font-size: 60px;
    text-align: center;
    color: rgb(120,97,67);
}
    img{
        width: 250px;
        height: 250px;
        margin-left: 80px;
        border-radius: 50%;
    }
    div#content {
        z-index: 1;
        position: absolute;
        top: 100px;
    }
    div {
        font-family: 'Nanum Gothic Coding', monospace;
    }
    input {
        font-family: 'Nanum Gothic Coding', monospace;
        opacity: 50%;
        text-align: center;
        border: 1px solid rgb(150,120,100);
        position: absolute;
        top: 0;
        right: 300px;
        font-size: 20px;
        width: 25%;
        height: 40px;
        margin: 10px auto;
        background-color: rgb(140,110,90);
        border-radius: 10px;
    }
    a {
        text-decoration: none;
        color: white;
    }
    td {
        margin-top: 20px;
    }
    #top {
        z-index: 100;
        display: flex;
        justify-content: center;
        text-align: left;
        font-size: 30px;
        padding: 10px 100px;
        margin: 10px auto;
        /* background-color: yellow; */
    }
    #top2 {
        text-align: left;
        display: inline-block;
        font-size: 30px;
        padding: 10px 100px;
    }
    #top4 {
        text-align: left;
        display: inline-block;
        font-size: 30px;
        padding: 10px 100px;
        opacity: 70%;
    }
    #top3:hover {
        cursor: pointer;
        text-decoration: underline;
        color: rgb(215,219,239);
    }
    #login {
        position: fixed;
        top: 21.5px;
        right: 20px;
        text-align: right;
        font-size: 20px;
    }
    #login:hover {
        cursor: pointer;
    }
    header {
        position: fixed;
        top: 0;
        padding: 1rem;
        color: white;
        background: rgb(120,97,67);
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        width: 100%;
    }
</style>