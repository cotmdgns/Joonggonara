

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
  uesrCode integer not null, /*사용자 정보 [외래키로 사용]*/ 
  JGNoticeCreate datetime default CURRENT_TIMESTAMP, /*게시글 생성날짜*/ 
  JGNoticeUpdate datetime, /*게시글 수정날짜*/ 
  JGNoticeDelect datetime /*게시글 삭제날짜*/ 
);



/* 게시글 구독 or 좋아요 */
CREATE TABLE JGNoticeSubcribe(
  JGNoticeSubcribeCode integer auto_increment primary key, /*게시글 좋아요 코드*/ 
  JGNoticeCode integer, /*게시글 코드 [ 외래키 ]*/ 
  JGNoticeSubcribeCount integer, /*게시글 구독*/ 
  JGNoticeSubcribeCreate datetime default CURRENT_TIMESTAMP,  /*구독 생성날자*/ 
  userCode integer /*유저 코드 [ 외래키 ]*/ 
);

/*게시글 사진정보*/ 
CREATE TABLE JGNoticeImg(
  JGNoticeImgCode integer auto_increment primary key, /*게시글 이미지 코드*/ 
  JGNoticeImg varchar(255), /*게시글 이미지*/
  JGNoticeImgCreate datetime default CURRENT_TIMESTAMP, /*게시글 이미지 생살날짜*/
  JGNoticeCode integer /*게시글 코드 [ 외래키 ]*/ 
);

/*게시글 댓글*/ 
CREATE TABLE JGNoticeComment(
  JGNoticeCommentCode integer auto_increment primary key, /*게시글 댓글*/ 
  userCode integer, /*사용자 코드 [ 외래키 ]*/ 
  JGNoticeCode integer, /*게시글 코드 [ 외래키 ]*/ 
  JGNoticeText varchar(255), /*게시글 댓글*/ 
  JGNoticeCreate datetime default CURRENT_TIMESTAMP /*댓글 생성날짜*/ 
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


