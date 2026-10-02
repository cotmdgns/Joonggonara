

select * from JGUserInfo;

/*더미 생성데이터*/
insert into JGUserInfo (userId, userPwd, userImg, userName, userUpdate, userTotalPointer, userAddress, userAddressDetail)
value ("test","1234","default2","홍길동",NOW(),0,"경기도","태전동");




/*사용자 정보*/
CREATE TABLE JGUserInfo(
  uesrCode integer auto_increment primary key, /*사용자 코드*/
  userId varchar(20) not null unique, /*사용자 아이디*/
  userPwd varchar(30) not null, /*사용자 비밀번호*/
  userImg varchar(255) , /*사용자 이미지*/
  userName varchar(20) not null, /*사용자 이름*/
  userCreate datetime default CURRENT_TIMESTAMP, /*생성 날짜*/
  userUpdate datetime , /*변경 날짜*/
  userDelete datetime default null, /*삭제 날짜*/	
  userYn boolean default true, /*사용유무*/
  userStopYn boolean default false, /*사용자 신고 유무*/
  userStopDate date , /*사용자 신고 누적 시 날짜 적용*/
  userTotalPointer integer, /*사요앚 총 포인트*/
  userAddress varchar(10), /* 사용자 주소 */
  userAddressDetail varchar(10) /* 사용자 주소 (상세) */ 
);


CREATE TABLE Address_Info(
	addressCode integer auto_increment primary key, /* 주소 코드 */
    addressName varchar(10) /* 주소 정보 */	
);

CREATE TABLE Address_Info_detail(
	addressDetailCode integer auto_increment primary key, /* 주소 디테일 코드 */
    addressCode integer, /* Address_Info의 addressCode 참조 */
    addressDetailName varchar(10) /* 주소 디테일 정보 */
);


/*사용자 포인트*/
CREATE TABLE JGUserInfoPointer(
  uesrCode integer, /*외래키*/ 
  userPointer integer, /*사용자 포인트 [ 높을수록 신뢰가 높다 ]*/ 
  userPointerCreate datetime default CURRENT_TIMESTAMP /*생성날짜*/ 
);

/*사용자 백업정보*/
CREATE TABLE JGUserInfoBack(
  uesrCode integer not null, /*외래키로 사용할 예정*/ 
  userPwd varchar(30) not null, /*사용자 비밀번호*/ 
  userImg varchar(255), /*사용자 이미지*/ 
  userName varchar(20), /*사용자 이름*/ 
  userUpdate datetime default CURRENT_TIMESTAMP /*변경 날짜*/ 
);

/* 게시글 정보 */
CREATE TABLE JGNotice(
  JGNoticeCode integer auto_increment primary key, /*게시글 코드*/ 
  JGNoticeTitle varchar(20) not null, /*게시글 제목*/ 
  JGNoticeText varchar(255) not null, /*게시글 내용*/ 
  JGNoticeProductPrice varchar(255) not null, /*게시글 제품 가격 */
  JGNoticeProductType varchar(255) not null, /*게시글 제품 구분 */ 
  uesrCode integer not null, /*사용자 정보 [외래키로 사용]*/ 
  JGNoticeCreate datetime default CURRENT_TIMESTAMP, /*게시글 생성날짜*/ 
  JGNoticeUpdate datetime, /*게시글 수정날짜*/ 
  JGNoticeDelect datetime /*게시글 삭제날짜*/ 
);

/* 게시글 좋아요 눌렀거나 댓글 달았을 때 알람 */
/* 좋아요랑 댓글 생성할 때 또 하나 생성해야하나? 두번 하기엔 너무 아쉽지 ㅇㅇ */
/* 아니면 칼람을 하나 추가하기?? */

/* 게시글 구독 or 좋아요 */
CREATE TABLE JGNoticeSubcribe(
  JGNoticeSubcribeCode integer auto_increment primary key, /*게시글 좋아요 코드*/ 
  JGNoticeCode integer, /*게시글 코드 [ 외래키 ]*/ 
  JGNoticeSubcribeCount integer, /*게시글 구독*/ 
  JGNoticeSubcribeCreate datetime default CURRENT_TIMESTAMP,  /*구독 생성날자*/ 
  userCode integer /*유저 코드 [ 외래키 ]*/ 
);

/*게시글 댓글*/ 
CREATE TABLE JGNoticeComment(
  JGNoticeCommentCode integer auto_increment primary key, /*게시글 댓글*/ 
  userCode integer, /*사용자 코드 [ 외래키 ]*/ 
  JGNoticeCode integer, /*게시글 코드 [ 외래키 ]*/ 
  JGNoticeText varchar(255), /*게시글 댓글*/ 
  JGNoticeCreate datetime default CURRENT_TIMESTAMP /*댓글 생성날짜*/ 
);

/*게시글 사진정보*/ 
CREATE TABLE JGNoticeImg(
  JGNoticeImgCode integer auto_increment primary key, /*게시글 이미지 코드*/ 
  JGNoticeImg varchar(255), /*게시글 이미지*/
  JGNoticeImgCreate datetime default CURRENT_TIMESTAMP, /*게시글 이미지 생살날짜*/
  JGNoticeCode integer /*게시글 코드 [ 외래키 ]*/ 
);


/*어드민 전용 관리 페이지*/ 
CREATE TABLE MeunOptionA(
  meunOptionCode integer auto_increment primary key, /*메뉴판 코드 관리*/ 
  meunOptionName varchar(30), /*메뉴판 이름*/ 
  meunOptionCreate datetime default CURRENT_TIMESTAMP, /*메뉴판 관리 생성날짜*/ 
  meunOptionCalssCheack boolean, /*등급 [ 어드민 포함 or 미포함 체크 여부]*/ 
  meunOptionCodeSub integer /*메뉴판 코드 관리 [ 외래키 ]*/ 
);

/*사용자 신고 누적*/ 
CREATE TABLE UserDeclarationA(
  userDeclarationCode integer auto_increment primary key, /*사용자 신고 누적 코드*/ 
  userCode integer, /*사용자 코드 [ 외래키 ]*/ 
  userDeclarationOption varchar(25), /*신고 사유*/ 
  userDeclarationText varchar(80), /*신고 내용*/ 
  userDeclarationCreate datetime default CURRENT_TIMESTAMP, /*신고 생성날짜*/ 
  userDeclarationBoo boolean /*신고 접수?*/ 
);



/* 도, 시, 군 더미데이터 */

/* 1. 광역시·도 데이터 입력 (17개) */
INSERT INTO Address_Info (addressName) VALUES 
('서울특별시'), ('부산광역시'), ('대구광역시'), ('인천광역시'),
('광주광역시'), ('대전광역시'), ('울산광역시'), ('세종특별자치시'),
('경기도'), ('강원특별자치도'), ('충청북도'), ('충청남도'),
('전북특별자치도'), ('전라남도'), ('경상북도'), ('경상남도'),
('제주특별자치도');

/* 2. 시·군·구 전체 데이터 입력 */

-- 서울특별시 (addressCode: 1)
INSERT INTO Address_Info_detail (addressCode, addressDetailName) VALUES 
(1, '강남구'), (1, '강동구'), (1, '강북구'), (1, '강서구'), (1, '관악구'),
(1, '광진구'), (1, '구로구'), (1, '금천구'), (1, '노원구'), (1, '도봉구'),
(1, '동대문구'), (1, '동작구'), (1, '마포구'), (1, '서대문구'), (1, '서초구'),
(1, '성동구'), (1, '성북구'), (1, '송파구'), (1, '양천구'), (1, '영등포구'),
(1, '용산구'), (1, '은평구'), (1, '종로구'), (1, '중구'), (1, '중랑구');

-- 부산광역시 (addressCode: 2)
INSERT INTO Address_Info_detail (addressCode, addressDetailName) VALUES 
(2, '강서구'), (2, '금정구'), (2, '기장군'), (2, '남구'), (2, '동구'),
(2, '동래구'), (2, '부산진구'), (2, '북구'), (2, '사상구'), (2, '사하구'),
(2, '서구'), (2, '수영구'), (2, '연제구'), (2, '영도구'), (2, '중구'), (2, '해운대구');

-- 대구광역시 (addressCode: 3)
INSERT INTO Address_Info_detail (addressCode, addressDetailName) VALUES 
(3, '군위군'), (3, '남구'), (3, '달서구'), (3, '달성군'), (3, '동구'),
(3, '북구'), (3, '서구'), (3, '수성구'), (3, '중구');

-- 인천광역시 (addressCode: 4)
INSERT INTO Address_Info_detail (addressCode, addressDetailName) VALUES 
(4, '강화군'), (4, '계양구'), (4, '남동구'), (4, '동구'), (4, '미추홀구'),
(4, '부평구'), (4, '서구'), (4, '연수구'), (4, '옹진군'), (4, '중구');

-- 광주광역시 (addressCode: 5)
INSERT INTO Address_Info_detail (addressCode, addressDetailName) VALUES 
(5, '광산구'), (5, '남구'), (5, '동구'), (5, '북구'), (5, '서구');

-- 대전광역시 (addressCode: 6)
INSERT INTO Address_Info_detail (addressCode, addressDetailName) VALUES 
(6, '대덕구'), (6, '동구'), (6, '서구'), (6, '유성구'), (6, '중구');

-- 울산광역시 (addressCode: 7)
INSERT INTO Address_Info_detail (addressCode, addressDetailName) VALUES 
(7, '남구'), (7, '동구'), (7, '북구'), (7, '울주군'), (7, '중구');

-- 세종특별자치시 (addressCode: 8)
INSERT INTO Address_Info_detail (addressCode, addressDetailName) VALUES 
(8, '세종시');

-- 경기도 (addressCode: 9)
INSERT INTO Address_Info_detail (addressCode, addressDetailName) VALUES 
(9, '가평군'), (9, '고양시 덕양구'), (9, '고양시 일산동구'), (9, '고양시 일산서구'),
(9, '과천시'), (9, '광명시'), (9, '광주시'), (9, '구리시'), (9, '군포시'),
(9, '김포시'), (9, '남양주시'), (9, '동두천시'), (9, '부천시 원미구'), (9, '부천시 소사구'), (9, '부천시 오정구'),
(9, '성남시 수정구'), (9, '성남시 중원구'), (9, '성남시 분당구'), (9, '수원시 장안구'),
(9, '수원시 권선구'), (9, '수원시 팔달구'), (9, '수원시 영통구'), (9, '시흥시'),
(9, '안산시 상록구'), (9, '안산시 단원구'), (9, '안성시'), (9, '안양시 만안구'),
(9, '안양시 동안구'), (9, '양주시'), (9, '양평군'), (9, '여주시'), (9, '연천군'),
(9, '오산시'), (9, '용인시 처인구'), (9, '용인시 기흥구'), (9, '용인시 수지구'),
(9, '의왕시'), (9, '의정부시'), (9, '이천시'), (9, '파주시'), (9, '평택시'),
(9, '포천시'), (9, '하남시'), (9, '화성시');

-- 강원특별자치도 (addressCode: 10)
INSERT INTO Address_Info_detail (addressCode, addressDetailName) VALUES 
(10, '강릉시'), (10, '고성군'), (10, '동해시'), (10, '삼척시'), (10, '속초시'),
(10, '양구군'), (10, '양양군'), (10, '영월군'), (10, '원주시'), (10, '인제군'),
(10, '정선군'), (10, '철원군'), (10, '춘천시'), (10, '태백시'), (10, '평창군'),
(10, '홍천군'), (10, '화천군'), (10, '횡성군');

-- 충청북도 (addressCode: 11)
INSERT INTO Address_Info_detail (addressCode, addressDetailName) VALUES 
(11, '괴산군'), (11, '단양군'), (11, '보은군'), (11, '영동군'), (11, '옥천군'),
(11, '음성군'), (11, '제천시'), (11, '증평군'), (11, '진천군'), (11, '청주시 상당구'),
(11, '청주시 서원구'), (11, '청주시 흥덕구'), (11, '청주시 청원구'), (11, '충주시');

-- 충청남도 (addressCode: 12)
INSERT INTO Address_Info_detail (addressCode, addressDetailName) VALUES 
(12, '계룡시'), (12, '공주시'), (12, '금산군'), (12, '논산시'), (12, '당진시'),
(12, '보령시'), (12, '부여군'), (12, '서산시'), (12, '서천군'), (12, '아산시'),
(12, '예산군'), (12, '천안시 동남구'), (12, '천안시 서북구'), (12, '청양군'), (12, '태안군'), (12, '홍성군');

-- 전북특별자치도 (addressCode: 13)
INSERT INTO Address_Info_detail (addressCode, addressDetailName) VALUES 
(13, '고창군'), (13, '군산시'), (13, '김제시'), (13, '남원시'), (13, '무주군'),
(13, '부안군'), (13, '순창군'), (13, '완주군'), (13, '익산시'), (13, '임실군'),
(13, '장수군'), (13, '전주시 완산구'), (13, '전주시 덕진구'), (13, '정읍시'), (13, '진안군');

-- 전라남도 (addressCode: 14)
INSERT INTO Address_Info_detail (addressCode, addressDetailName) VALUES 
(14, '강진군'), (14, '고흥군'), (14, '곡성군'), (14, '광양시'), (14, '구례군'),
(14, '나주시'), (14, '담양군'), (14, '목포시'), (14, '무안군'), (14, '보성군'),
(14, '순천시'), (14, '신안군'), (14, '여수시'), (14, '영광군'), (14, '영암군'),
(14, '완도군'), (14, '장성군'), (14, '장흥군'), (14, '진도군'), (14, '함평군'),
(14, '해남군'), (14, '화순군');

-- 경상북도 (addressCode: 15)
INSERT INTO Address_Info_detail (addressCode, addressDetailName) VALUES 
(15, '경산시'), (15, '경주시'), (15, '고령군'), (15, '구미시'), (15, '김천시'),
(15, '문경시'), (15, '봉화군'), (15, '상주시'), (15, '성주군'), (15, '안동시'),
(15, '영덕군'), (15, '영양군'), (15, '영주시'), (15, '영천시'), (15, '울릉군'),
(15, '울진군'), (15, '의성군'), (15, '청도군'), (15, '청송군'), (15, '칠곡군'),
(15, '포항시 남구'), (15, '포항시 북구');

-- 경상남도 (addressCode: 16)
INSERT INTO Address_Info_detail (addressCode, addressDetailName) VALUES 
(16, '거제시'), (16, '거창군'), (16, '고성군'), (16, '김해시'), (16, '남해군'),
(16, '밀양시'), (16, '산청군'), (16, '양산시'), (16, '의령군'), (16, '진주시'),
(16, '창녕군'), (16, '창원시 의창구'), (16, '창원시 성산구'), (16, '창원시 마산합포구'),
(16, '창원시 마산회원구'), (16, '창원시 진해구'), (16, '통영시'), (16, '하동군'), (16, '함안군'),
(16, '함양군'), (16, '합천군');

-- 제주특별자치도 (addressCode: 17)
INSERT INTO Address_Info_detail (addressCode, addressDetailName) VALUES 
(17, '서귀포시'), (17, '제주시');
