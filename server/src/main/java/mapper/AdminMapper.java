package mapper;

import com.project.Joonggonara.model.dto.FormDataDTO;
import com.project.Joonggonara.model.dto.NotificationManagementDTO;
import com.project.Joonggonara.model.vo.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminMapper {
    //*********************** 메인 관리 페이지
    List<JGUserInfo> mainSelectUseAll(); /* <!-- 전체사용자 --> */
    List<JGNotice> mainSelectNoticeAll(); /* <!-- 전체게시글 --> */

    //*********************** 공지사항 관리 페이지
    List<NotificationManagementDTO> adminNotificationManagementSelect();                // [ 어드민 ] 전체 조회하기
    NotificationManagementDTO notificationManagementSelectDetail(int code);             // [ 어드민 , 일반 ] 공지사항 디테일 조회하기
    int notificationManagementCreate(NotificationManagement notificationManagement);    // 공지사항 생성하기
    void notificationManagementImgNameUpdate(FormDataDTO formDataDTO);                  // 공지사항 생성 후 파일이름 추가(수정)
    void notificationManagementUpdate(NotificationManagement notificationManagement);   // 공지사항 수정하기
    void notificationManagementDelete(int code);                                        // 공지사항 삭제하기

    // ********************* 카테고리 관리 페이지
    List<CategoryStateMajor> selectCategoryMajor();                   // 카테고리 메이저 찾기
    List<CategoryStateMinor> SelectCategoryMinor(int code);     // 카테고리 마이너 찾기
    void CategoryMajorCreate(String text);//    <!--  카테고리 메이저 생성하기  -->
    void CategoryMajorDelete(int code);//    <!--  카테고리 메이저 삭제하기  -->
    void CategoryMajorUpdate(CategoryStateMajor categoryStateMajor);
    void CategoryMinorCreate(CategoryStateMinor categoryStateMinor);//    <!--  카테고리 마이너 생성하기  -->
    void CategoryMinorDelete(int code);//    <!--  카테고리 마이너 삭제하기  -->




}
