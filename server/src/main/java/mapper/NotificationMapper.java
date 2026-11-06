package mapper;

import com.project.Joonggonara.model.dto.NotificationManagementDTO;
import com.project.Joonggonara.model.vo.Criteria;
import com.project.Joonggonara.model.vo.NotificationManagement;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface NotificationMapper {

    List<NotificationManagementDTO> selectNotification(Criteria criteria);     // 공지사항 리스트 [ 페이징 적용 완료, 정렬 완료 ]
    NotificationManagementDTO selectNotificationDetail(int code);        // 공지사항 상세조회하기
    int total();
}
