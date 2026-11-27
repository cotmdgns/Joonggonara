package mapper;


import com.project.Joonggonara.model.vo.JGUserInfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    void userIdCreate(JGUserInfo jgUserInfo);    // 회원가입 로직
    void userImgUpdate(JGUserInfo jgUserInfo);  // 이미지 업데이트
    
    JGUserInfo IdCheckAPI(String str);       // 아이디 체크하기
    String nicknameCheck(String str);           // 사용자 닉네임 체크하기
    String selectID(int code);                  // 사용자 코드로 이름 찾기
    JGUserInfo selectUserInfo(int code);        // 사용자 코드로 정보 찾아오기


    // 네이버 영역
    JGUserInfo selectNaverId(String str);           // 아이디로 네이버 찾기
}
