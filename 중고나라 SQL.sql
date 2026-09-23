/*사용자 정보*/
CREATE TABLE JGUser_info(
  uesr_code integer auto_increment primary key, /*사용자 코드*/
  user_id varchar(20) not null unique, /*사용자 아이디*/
  user_pwd varchar(30) not null, /*사용자 비밀번호*/
  user_img varchar(255) , /*사용자 이미지*/
  user_name varchar(20) not null, /*사용자 이름*/
  user_create datetime default CURRENT_TIMESTAMP, /*생성 날짜*/
  user_update date , /*변경 날짜*/
  user_delete date , /*삭제 날짜*/
  user_yn boolean default false, /*사용유무*/
  user_stop_yn boolean default false, /*사용자 신고 유무*/
  user_stop_date date , /*사용자 신고 누적 시 날짜 적용*/
  user_total_pointer integer /*사요앚 총 포인트*/
);

/*사용자 포인트*/
CREATE TABLE JGUser_info_pointer(
  uesr_code integer, /*외래키*/ 
  user_pointer integer, /*사용자 포인트 [ 높을수록 신뢰가 높다 ]*/ 
  user_pointer_create datetime default CURRENT_TIMESTAMP /*생성날짜*/ 
);

/*사용자 백업정보*/
CREATE TABLE JGUser_info_back(
  uesr_code integer not null, /*외래키로 사용할 예정*/ 
  user_pwd varchar(30) not null, /*사용자 비밀번호*/ 
  user_img varchar(255), /*사용자 이미지*/ 
  user_name varchar(20), /*사용자 이름*/ 
  user_update datetime default CURRENT_TIMESTAMP /*변경 날짜*/ 
);

/* 게시글 정보 */
CREATE TABLE JGNotice(
  JGNotice_code integer auto_increment primary key, /*게시글 코드*/ 
  JGNotice_title varchar(20) not null, /*게시글 제목*/ 
  JGNotice_text varchar(255) not null, /*게시글 내용*/ 
  uesr_code integer not null, /*사용자 정보 [외래키로 사용]*/ 
  JGNotice_create datetime default CURRENT_TIMESTAMP, /*게시글 생성날짜*/ 
  JGNotice_update date, /*게시글 수정날짜*/ 
  JGNotice_delect date /*게시글 삭제날짜*/ 
);

/* 게시글 구독 or 좋아요 */
CREATE TABLE JGNotice_subcribe(
  JGNotice_subcribe_code integer auto_increment primary key, /*게시글 좋아요 코드*/ 
  JGNotice_code integer, /*게시글 코드 [ 외래키 ]*/ 
  JGNotice_subcribe_count integer, /*게시글 구독*/ 
  JGNotice_subcribe_create datetime default CURRENT_TIMESTAMP,  /*구독 생성날자*/ 
  user_code integer /*유저 코드 [ 외래키 ]*/ 
);

/*게시글 사진정보*/ 
CREATE TABLE JGNotice_img(
  JGNotice_img_code integer auto_increment primary key, /*게시글 이미지 코드*/ 
  JGNotice_img varchar(255), /*게시글 이미지*/
  JGNotice_img_create datetime default CURRENT_TIMESTAMP, /*게시글 이미지 생살날짜*/
  JGNotice_code integer /*게시글 코드 [ 외래키 ]*/ 
);

/*게시글 댓글*/ 
CREATE TABLE JGNotice_comment(
  JGNotice_comment_code integer auto_increment primary key, /*게시글 댓글*/ 
  user_code integer, /*사용자 코드 [ 외래키 ]*/ 
  JGNotice_code integer, /*게시글 코드 [ 외래키 ]*/ 
  JGNotice_text varchar(255), /*게시글 댓글*/ 
  JGNotice_create datetime default CURRENT_TIMESTAMP /*댓글 생성날짜*/ 
);

/*어드민 전용 관리 페이지*/ 
CREATE TABLE meun_option_A(
  meun_option_code integer auto_increment primary key, /*메뉴판 코드 관리*/ 
  meun_option_name varchar(30), /*메뉴판 이름*/ 
  meun_option_create datetime default CURRENT_TIMESTAMP, /*메뉴판 관리 생성날짜*/ 
  meun_option_calss_cheack boolean, /*등급 [ 어드민 포함 or 미포함 체크 여부]*/ 
  meun_option_code_sub integer /*메뉴판 코드 관리 [ 외래키 ]*/ 
);

/*사용자 신고 누적*/ 
CREATE TABLE user_declaration_A(
  user_declaration_code integer auto_increment primary key, /*사용자 신고 누적 코드*/ 
  user_code integer, /*사용자 코드 [ 외래키 ]*/ 
  user_declaration_option varchar(25), /*신고 사유*/ 
  user_declaration_text varchar(80), /*신고 내용*/ 
  user_declaration_create datetime default CURRENT_TIMESTAMP, /*신고 생성날짜*/ 
  user_declaration_boo boolean /*신고 접수?*/ 
);


