package mapper;

import com.project.Joonggonara.model.dto.SearchDTO;
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
    void createImg(List<JGNoticeImg> list);                     // <!-- 이미지 만들기 -->
    List<JGNotice> searchNoticeSelect(SearchDTO dto);           // 상세 리스트 가져오기 ( 검색도 가능함 , 페이징 걸고 한페이지 50개 )
    List<JGNoticeImg> searchNoticeSelectImg(int code);          // 상세 리스트 가져올 때 같이 줘야 할 이미지
    List<JGNotice> selectNoticeDATE();                          // 현재날짜로 일주일치 최신 게시글 가져오기
    List<JGNotice> selectUserAddressNotification(int code);     // 사용자 정보로 근처 상품들 찾기
}
