<template>
  <div id="footer2">
    GameRating
    <div>    
        <table style="text-align:left;">
            <tr>
                <td><p>회사소개 | 이용약관 | 개인정보처리방침 | 청소년보호정책 | 사이트맵 | 고객센터</p></td>
            </tr>
            <tr>
                <span>게임레이팅 내 채널링 게임 및 스폰서 충전소 영역의 통신판매를 중개하고 있습니다.</span>
                <span>해당 서비스의 제공과 관련된 모든 의무와 책임은 개별 통신판매업자에게 있으며,</span>
                <span>이용 중 발생하는 문제에 대해 당사는 법적 책임을 부담하지 않습니다.</span><br>
                <br>
                <h10 style="margin-top: 10px; color : black; font-size: 18px; text-align: left;margin-left: 600px;">
                상호 : 게임레이팅(주) 대표 안석범 : 주소 : 서울특별시 구로구 항동 1-1 게임레이팅 고객센터 : 0000-1111</h10>
                <h10  style="color : black; font-size: 18px; text-align: left;margin-left: 600px;">
                기업대표 : 0000-1112 Email : skhu201736023@naver.com 사업자 등록번호 : 123-45-7890</h10>
                <br>
                <p>GameRaing Corp, All rights reserved.</p>
                
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
table {
    font-size: 20px;
    color : black;
}
div {
    font-family: 'Nanum Gothic Coding', monospace;
}
span {
 margin-top:10px;
 color : black;
 font-size: 18px;  
 text-align: left;
 margin-left: 600px; 
}
p{
    margin-top: 10px;
    color : black;
    font-weight: bold;
    font-size: 20px;
    text-align: left;
    margin-left: 600px;
}

img {
  width : 250px;
  height: 150px;
  /* background-color: yellow; */
}
#footer2 {
    font-weight: bold;
    color : rgb(210,219,239);
    font-size: 50px;
  width: 100%;
  height: 360px;
  /* display: flex;
  justify-content: center; */
  position: absolute;
  left: 20px;
  top : 950px;
}
</style>
