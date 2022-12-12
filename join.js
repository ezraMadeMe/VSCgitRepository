// ID 입력 안내 메시지
//document.getElementById('userId').addEventListener('focus', focusId);

function focusId(){
    var element = document.getElementById('userId');
    var msg = document.getElementById('checkId');
    var userId = element.value;

    if(userId==''){
        msg.style.display = 'block';
    }else{
        msg.style.display = 'none';
    }
}

//ID 중복검사
function checkId(){
    alert('사용 가능한 아이디입니다');
}

// PW 유효성 검사
function validPw(){
    var pw = document.getElementById('pw').value;
    var msg = document.getElementById('checkPw');

    var length = pw.length
    if(length < 4){
        msg.style.display = 'block';
        msg.innerHTML = '비밀번호가 너무 짧습니다';
    }else if(length > 12){
        msg.style.display = 'block';
        msg.innerHTML = '비밀번호가 너무 깁니다';
    }else if(/[^a-zA-Z\!\@\$\%\^\&\*]/g.test(pw)){
        msg.style.display = 'block';
        msg.innerHTML = '비밀번호에 허용되지 않는 문자가 있습니다';
    }else{
        msg.style.display = 'none';
    }
}

// PW 일치여부 검사
function checkPw(){
    var pw = document.getElementById('pw').value;
    var pwC = document.getElementById('pwCheck').value;
    var msg = document.getElementById('checkPw2');

    if(pw !== pwC){
        msg.style.display = 'block';
        msg.innerHTML = '비밀번호가 일치하지 않습니다';
    }else{
        msg.style.display = 'none';
    }
}

// 이름에 공백여부
function checkName(){
    var name = document.getElementById('name').value;
    var msg = document.getElementById('checkName');

    console.log(/[\s]/g.test(name));

    if(/[\s]/g.test(name)){
        msg.style.display = 'block';
        msg.innerHTML = '이름에는 공백을 허용하지 않습니다';
    }else{
        msg.style.display = 'none';
    }
}

// 이메일 유효성 검사
function checkEmail(){
    var email = document.getElementById('email').value;
    var msg = document.getElementById('checkEmail');

    if(!(/[\@]/g.test(email))){
        msg.style.display = 'block';
        msg.innerHTML = '이메일 형식이 올바르지 않습니다';
    }else{
        msg.style.display = 'none';
    }
}

// 휴대폰 번호 유효성 검사
function checkPhone(){
    var phone = document.getElementById('phone').value;
    var msg = document.getElementById('checkPhone');
    var length = phone.length;

    if(length < 10){
        msg.style.display = 'block';
        msg.innerHTML = '너무 짧습니다';
    }else if(length > 11){
        msg.style.display = 'block';
        msg.innerHTML = '너무 깁니다';
    }else{
        document.getElementById('phone').blur();
        msg.style.display = 'none';
        var str1 = phone.substr(0,3);
        var str2 = phone.substr(3,7);
        var str3 = phone.substr(7);
        document.getElementById('phone').innerHTML = str1+ '-' + str2 + '-' + str3;
    }
}

//우편번호 검색 API +주소
function kakaopost() {
    new daum.Postcode({
        oncomplete: function(data) {
// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var roadAddr = data.roadAddress; // 도로명 주소 변수
                var extraRoadAddr = ''; // 참고 항목 변수

                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraRoadAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                   extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraRoadAddr !== ''){
                    extraRoadAddr = ' (' + extraRoadAddr + ')';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('zipcode').value = data.zonecode;
                document.getElementById("address").value = data.jibunAddress + roadAddr;
            },     
        
        onclose: function(state){
            if(state === 'FORCE_CLOSE'){

            }else if(state === 'COMPLETE_CLOSE'){

            }
        }
    }).open();
}