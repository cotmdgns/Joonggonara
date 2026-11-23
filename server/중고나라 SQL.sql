DELIMITER //			/*  함수 지피티가 만들어 준거 정지된 아이디가 해당 날짜가 되면 풀리기 전에 백업 데이터 만들고 풀리기  */
CREATE EVENT event_userStopReset
ON SCHEDULE
    EVERY 1 DAY
    STARTS TIMESTAMP(CURRENT_DATE + INTERVAL 1 DAY)
DO
BEGIN


    -- 1. 정지 해제 대상자 정보 백업
    INSERT INTO JGUserInfoBack (
        userCode,
        userPwd,
        userImg,
        userName,
        userAddress,
        userAddressDetail,
        userUpdate,
        userInfo,
        userStopDate,
        userStopLooseDate
    )
    SELECT
        userCode,
        userPwd,
        userImg,
        userName,
        addressData,
        userAddressDetail,
        userUpdate,
        userInfo,
        userStopDate,
        NOW()
    FROM JGUserInfo
    WHERE
        userStopYn = TRUE
        AND userStopDate IS NOT NULL
        AND userStopDate <= NOW();

    -- 2. 정지 해제
    UPDATE JGUserInfo
    SET
        userStopYn = FALSE,
        userStopDate = NULL
    WHERE
        userStopYn = TRUE
        AND userStopDate IS NOT NULL
        AND userStopDate <= NOW();

END //
DELIMITER ;

/* 테스트 1 */
UPDATE JGUserInfo
SET
    userStopYn = TRUE,
    userStopDate = DATE_SUB(NOW(), INTERVAL 1 DAY)
WHERE userCode = 3;

/* 테스트 2 */
ALTER EVENT event_userStopReset
ON SCHEDULE EVERY 1 MINUTE;

/* 테스트 3 */
select * from JGUserInfo
WHERE userCode = 3;

/* 테스트 4 */
SELECT *
FROM JGUserInfoBack
WHERE userCode = 3;

/* 테스트 5 */
ALTER EVENT event_userStopReset
ON SCHEDULE
EVERY 1 DAY
STARTS TIMESTAMP(CURRENT_DATE + INTERVAL 1 DAY);

/* 끝 */






/*사용자 정보*/
CREATE TABLE JGUserInfo(
  userCode integer auto_increment primary key, /*사용자 코드*/
  userId varchar(20) not null unique, /*사용자 아이디*/
  userPwd varchar(150) not null, /*사용자 비밀번호*/
  userImg varchar(255) , /*사용자 이미지*/
  userNickname varchar(50) not null unique, /* 사용자 닉네임*/
  userName varchar(20) not null, /*사용자 이름*/
  userCreate datetime default CURRENT_TIMESTAMP, /*생성 날짜*/
  userUpdate datetime , /*변경 날짜*/
  userDelete datetime default null, /*삭제 날짜*/	
  userManager int default 1, /*사용자 등급 1은 일반사용자, 2는 관리자*/
  userYn boolean default true, /*사용유무*/
  userStopYn boolean default false, /*사용자 신고 유무*/
  userStopDate datetime , /*사용자 신고 누적 시 날짜 적용*/
  userTotalPointer DECIMAL(4,1) default 50.0, /*사요앚 총 포인트*/	
  /* 주소 모음 */
  addressData varchar(10), /* 사용자 주소 ex) 서울 */
  addressDetailData varchar(10), /* 사용자 주소 ex) 강남구*/
  userAddress varchar(50),/* 사용자 주소 (상세) ex) 헤안대로..  */ 
  userAddressDetail varchar(60), /* 사용자 주소 (상세) ex) 상세주소 X층 X호 */ 
  /*2026-10-19 이후로 추가 됨*/
  userInfo varchar(255) default null ,/*사용자 자기소개*/
  
  naverAPI varchar(50) default null,				/*네이버 연동*/
  kakaoAPI varchar(50) default null,				/*카카오 연동*/
  googleAPI varchar(50) default null				/*구글 연동*/
);
alter table JGUserInfo
add column naverAPI varchar(50) default null;
alter table JGUserInfo
add column kakaoAPI varchar(50) default null;
alter table JGUserInfo
add column googleAPI varchar(50) default null;



SHOW VARIABLES LIKE 'event_scheduler';

/*사용자 백업정보*/
CREATE TABLE JGUserInfoBack(
  userCode int not null, /*외래키로 사용할 예정*/ 
  userPwd varchar(150) default null, /*사용자 비밀번호*/ 
  userImg varchar(255)  default null, /*사용자 이미지*/ 
  userName varchar(20)  default null, /*사용자 이름*/ 
  userAddress varchar(10)  default null, /* 사용자 주소 */
  userAddressDetail varchar(10)  default null, /* 사용자 주소 (상세) */ 
  userUpdate datetime  default null, /*변경 날짜*/ 
  userInfo varchar(255) default null,
  
  /* 추가됨 [ 서버에도 추가해야 함 ]*/
  -- userYn boolean default true, 					/* 사용유무 : 정지나 삭제했을 떄 사용할 예정 */
  userStopDate datetime default null,				/* 정지된 날짜 */
  userStopLooseDate datetime default null,			/* 정지 풀린 날짜 */
  userDelete date default null,					/* 삭제된 날짜 */
  userDeleteLoose date default null					/* 삭제 풀린 날짜 */
);


/*사용자 포인트*/
CREATE TABLE JGUserInfoPointer(
  pointerCode integer auto_increment primary key, /* pk */
  userCode integer, /*외래키*/ 
  userPointer DECIMAL(4,1), /*사용자 포인트 [ 높을수록 신뢰가 높다 ]*/ 
  pointerReason varchar(50), /* 포인트 사유 */
  userPointerCreate datetime default CURRENT_TIMESTAMP /*생성날짜*/ 
);


/* 게시글 정보 */
CREATE TABLE JGNotice(
  JGNoticeCode integer auto_increment primary key, /*게시글 코드*/ 
  JGNoticeTitle varchar(255) not null, /*게시글 제목*/ 
  JGNoticeText TEXT NOT NULL, /*게시글 내용*/ 
  JGNoticeProductPrice varchar(255) not null, /*게시글 제품 가격 */
  JGNoticeProductTypeMajor varchar(255) not null, /*게시글 제품 구분 */ 
  JGNoticeProductTypeMinor varchar(255) not null, /*게시글 제품 구분 */ 
  JGNoticeProductTypeMinorList varchar(255), /*게시글 제품 구분 */ 
  userCode integer not null, /*사용자 정보 [외래키로 사용]*/ 
  JGNoticeCreate datetime default CURRENT_TIMESTAMP, /*게시글 생성날짜*/ 
  JGNoticeUpdate datetime default null, /*게시글 수정날짜*/ 
  JGNoticeDelect datetime default null, /*게시글 삭제날짜*/ 
  JGNoticeSaleBoo boolean default false, /* 상품 판매 여부 확인용*/
  JGNoticeSaleUserCode varchar(10) default null /* 상품을 구매한 사람 코드 */
);







/* 게시글 구독 or 좋아요 */
CREATE TABLE JGNoticeSubcribe(
  JGNoticeSubcribeCode integer auto_increment primary key, /*게시글 좋아요 코드*/ 
  JGNoticeCode integer, /*게시글 코드 [ 외래키 ]*/ 
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


/*사용자 신고 누적*/ 
CREATE TABLE UserDeclarationA(
  userDeclarationCode integer auto_increment primary key, /*사용자 신고 누적 코드*/ 
  noticeUserCode integer,	/* 게시글 유저코드 */
  noticeCode integer,		/* 게시글 코드 */
  userCode integer, /*사용자 코드 [ 외래키 ]*/ 
  noticeText text,		/* 게시글 제목 */
  userDeclarationType varchar(10) not null, /* 신고타입 ex)댓글이냐 게시글이냐 */
  userDeclarationOption varchar(40), /*신고 사유*/ 
  userDeclarationText varchar(255), /*신고 내용*/ 
  userDeclarationTextComment varchar(255) default null, /* 신고 내용에 대한 코멘트 */
  userDeclarationStateBoo varchar(255) default null, /* 신고 상태 [ 이용정지냐,신고반려냐,대상 컨텐츠삭제냐 */
  userDeclarationProcessUser integer default null,	/* 신고처리자 */
  userDeclarationCreate datetime default CURRENT_TIMESTAMP, /*신고 생성날짜*/ 
  userDeclarationBoo varchar(10) default "처리대기"/*신고 접수*/ 
);

alter table UserDeclarationA
modify column noticeText text;

/* 관리자 공지사항 관리 */
CREATE TABLE notificationManagement(
	notificationManagementCode integer auto_increment primary key, /* 공지사항 코드 */
    userCode integer, /*사용자 코드 [ 외래키 ]*/ 
    notificationManagementTitle varchar(50) not null,/* 공지사항 제목 */
    notificationManagementText longtext not null,/* 공지사항 내용 */
    notificationManagementBannerBoo boolean not null,/* 공지사항 배너 사용여부 */
    notificationManagementBoo boolean default true,/* 공지사항 현재 사용여부 */
    notificationManagementImg varchar(255),/* 공지사항 이미지 */
    notificationManagementCreate datetime default CURRENT_TIMESTAMP /*공지사항 생성날짜*/ 
);


/* 관리자 카테고리 관리 */
CREATE TABLE categoryStateMajor(
	categoryStateMajorCode integer auto_increment primary key,  /* 카테고리 메이저 코드 */
    categoryStateMajorText varchar(20),							/* 카테고리 메이저 이름 */
    categoryStateMajorCreate datetime default CURRENT_TIMESTAMP	/* 카테고리 메이저 생성날짜 */
);



CREATE TABLE categoryStateMinor(
	categoryStateMinorCode integer auto_increment primary key,  /* 카테고리 마이너 코드 */
    categoryStateMajorCode integer,								/* 카테고리 메이저 외래키 */
    categoryStateMinorText varchar(20),							/* 카테고리 마이너 이름 */
    categoryStateMinorCreate datetime default CURRENT_TIMESTAMP,	/* 카테고리 마이너 생성날짜 */
    categoryStateMinorCodeMinor integer default null			/* 카테고리 마이너 코드 셀프조인 */
);



qweqwe = 378 이 사람이
awdawd = 1 의 게시글을 신고했다 
그리면 누구한게 신고가 접수됬다는걸 알려줘야곗느냐
/* 추가된 알람 */
CREATE TABLE alram(
	alramCode integer auto_increment primary key,  /* 알람 코드 */
    alramTitle varchar(10),  /* 알람 제목 (게시글인지, 신고인지, 공지사항인지) */
	alramTitleCode varchar(100),  /* 알람 제목 코드  */
    alramCreate datetime default CURRENT_TIMESTAMP,  /* 알람 생성날짜 */
    alramState boolean default false,  /* 알람 코드 */
	userCode integer, /*사용자 코드 [ 외래키 ]		 이건 사용자 코드,*/ 		
    whoUserCode integer /*사용자 코드 [ 외래키 ] 	 이건 누구꺼를 처리해줬냐*/
);

/* 설계가 잘못됬음 ㅅㅂ */
select JGnoticeTitle,jgnoticeimg from jgnotice notice
join jgnoticeImg img ON notice.JGNoticeCode = img.JGNoticeCode
where notice.JGNoticeCode = 26
limit 1;


select JGnoticeTitle from jgnoticesubcribe sub
join jgnotice notice ON sub.JGNoticeCode = notice.JGNoticeCode
where sub.JGNoticeCode = 7;

select * from UserDeclarationA;
select count(*) from alram
where whoUserCode = 1 and alramState = false;


select notificationManagementTitle from alram as ram
join notificationManagement as noti ON ram.alramTitleCode = noti.notificationManagementCode
where ram.alramCode = 37;


select userNickname from jguserinfo
where userCode = 1;


select count(*) from alram
where whoUserCode = 1 AND alramTitle = "좋아요"
order by alramCreate DESC;

select * from jgNotice;


select * from alram
where whoUserCode = 1 AND alramTitle = "게시글"



order by alramCreate DESC;

/*
[ 설명란 ]
1. 저장할 땐 어디서 저장하는지에 따라서 title에 게시글인지,공지사항인지 저장
2. 생성할 떄 해당 타이틀에 대한 코드를 titleCode에 넣기
3. 서버에서 title과 titleCode로 필요한 정보단 가져와서 DTO로 서버로 보내기
*/







