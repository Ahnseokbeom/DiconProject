<template>
    <header style="z-index : 100;">
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
                    <p>AOS</p>
                </tr>
                <tr>
                    <td>
                        <a href="https://www.leagueoflegends.com/ko-kr/"><img src="../img/롤2.jpg"></a></td>
                        <td>
                            <a href="https://heroesofthestorm.com/ko-kr/"><img src="../img/히오스.jpg"></a></td>
                            <td>
                                <a href="https://cyphers.nexon.com/cyphers/main"><img src="../img/사이퍼즈.jpg"></a></td>
                                <td >
                                    <a href="https://www.dota2.com/home?l=koreana"><img src="../img/도타2.jpg"></a></td>
                                    <td>
                                        <a href="https://heroesofthestorm.com/ko-kr/"><img src="../img/히오스.jpg"></a></td>
                                    </tr>
                                    <tr>
                    <td>
                        <a href="#"><img src="../img/헤이얀코.jpg" style="margin-top:50px; z-index: 1;"></a></td>
                        <td>
                            <a href="#"><img src="../img/펜타스톰.jpg" style="margin-top:50px;"></a></td>
                            <td>
                                <a href="#"><img src="../img/얼티밋스쿨.jpg" style="margin-top:50px;"></a></td>
                                <td >
                                    <a href="#"><img src="../img/아레나오브히어로즈.jpg" style="margin-top:50px;"></a></td>
                                    <td>
                                        <a href="#"><img src="../img/베인글로리.jpg" style="margin-top:50px;"></a></td>
                                    </tr>
                                </table>
                            </div>
                            <div style="z-index : 1;">
                                <img src="../img/AOS1.png" style="position:fixed; top:250px; left : 1320px;width:1000px;height: 800px;z-index: 2;">
                                <img src="../img/AOS2.png" style="position:fixed; top:500px; right : 1390px;width:800px;height: 500px;z-index: 2;">
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
    color: rgb(117, 151, 178);
}
    img {
        margin-left: 80px;
        width: 250px;
        height: 250px;
        border-radius: 50%;
    }
    div#content {
        z-index: 100;
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
        border: 1px solid rgb(130,160,190);
        position: absolute;
        top: 0;
        right: 300px;
        font-size: 20px;
        width: 25%;
        height: 40px;
        margin: 10px auto;
        background-color: rgb(117, 151, 178);
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
        background: rgb(133, 176, 209);
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        width: 100%;
    }
</style>