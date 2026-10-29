package mapper;

import com.project.Joonggonara.model.vo.NotificationManagement;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MainMapper {

    List<NotificationManagement> mainBannerSelect();            // 메인에 사용되는 배너 사용중인 리스트

}
