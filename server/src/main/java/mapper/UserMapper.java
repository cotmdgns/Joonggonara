package mapper;


import com.project.Joonggonara.model.vo.JGUserInfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    int userIdCreate(JGUserInfo jgUserInfo);    // 회원가입 로직
    JGUserInfo IdCheckAPI(String userId);       // 아이디 체크하기
    String nicknameCheck(String str);           // 사용자 닉네임 체크하기
    String selectID(int code);                  // 사용자 코드로 이름 찾기
}
