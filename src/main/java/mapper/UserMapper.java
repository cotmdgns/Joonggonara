package mapper;


import com.project.Joonggonara.model.vo.JGUserInfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    int userIdCreate(JGUserInfo jgUserInfo);

}
