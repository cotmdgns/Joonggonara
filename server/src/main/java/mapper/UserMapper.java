package mapper;


import com.project.Joonggonara.model.vo.JGUserInfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    // 회원가입 로직
    int userIdCreate(JGUserInfo jgUserInfo);

    // 아이디 체크하기
    JGUserInfo IdCheckAPI(String userId);
    // 로그인
}
