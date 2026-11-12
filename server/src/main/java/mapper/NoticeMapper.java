package mapper;

import com.project.Joonggonara.model.dto.DeclarationDTO;
import com.project.Joonggonara.model.vo.JGNotice;
import com.project.Joonggonara.model.vo.JGNoticeComment;
import com.project.Joonggonara.model.vo.JGNoticeSubcribe;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface NoticeMapper {

    JGNoticeSubcribe subscribeNoticeSelect(JGNoticeSubcribe jgNoticeSubcribe); // 찜 상태 알아내기
    void subscribeNoticeCreate(JGNoticeSubcribe jgNoticeSubcribe);          // 구독 생성
    void subscribeNoticeDelete(JGNoticeSubcribe jgNoticeSubcribe);          // 구독 취소

    int createDeclarationButton(DeclarationDTO dto);           // 신고하기

    void saleJGNotice(JGNotice jgNotice);                       //<!--  구매하기  -->
    void deleteNotice(int code);                                // 게시글 삭제


    JGNoticeComment selectComment(int code);                    //<!--    댓글 조회 , 게시글 코드 받고 -->
    void createComment(JGNoticeComment jgNoticeComment);        //<!--  댓글 생성  -->
    void updateComment(JGNoticeComment jgNoticeComment);        //<!--  댓글 수정  -->
    void deleteComment(int code);                               //<!--  댓글 삭제  -->

}
