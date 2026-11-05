package mapper;

import com.project.Joonggonara.model.vo.JGNotice;
import com.project.Joonggonara.model.vo.JGNoticeImg;
import com.project.Joonggonara.model.vo.NotificationManagement;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MainMapper {

    List<NotificationManagement> mainBannerSelect();            // 메인에 사용되는 배너 사용중인 리스트
    String selectCategoryMinor(int code);                       // <!-- 카테고리 마이너 코드로 카테고리 이름 찾아내기 -->
    void insertNotice(JGNotice notice);                         // <!-- 생성 게시글 하나 생성하기 -->
    void createImg(List<JGNoticeImg> list);                     //// <!-- 이미지 만들기 -->
}
