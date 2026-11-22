package mapper;

import com.project.Joonggonara.model.vo.Alram;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AlramMapper {

    void insertAlram(Alram alram);      // 알람정보 생성
    
}
