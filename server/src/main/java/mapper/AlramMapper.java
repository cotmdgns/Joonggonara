package mapper;

import com.project.Joonggonara.model.dto.AlramDTO;
import com.project.Joonggonara.model.vo.Alram;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AlramMapper {

    List<Alram> selectAlram(AlramDTO alram);
    List<Alram> selectAlramModal(int code);
    int selectAlramTotal(AlramDTO alram);

    int alramTotal(int code);

    void insertAlramList(AlramDTO alram);
    List<Integer> selectUserCode();
    void insertAlram(Alram alram);      // 알람정보 생성
    void stateUpadate(int code);      // 알람정보 수정(확인용)

    // 토탈 데이터
    int noticeTotal(int code);
    int noticeSubTotal(int code);
    int singoTotal(int code);
    int gonggiTotal(int code);


    // 전체 데이터에 보내기전에 필요한 데이토 모음
    AlramDTO selectNoticeData(int code);        // 게시글에 필요한 데이터
    AlramDTO selectSubNoticeData(int code);        // 게시글에 필요한 데이터
    AlramDTO selectGongGiData(int code);        // 게시글에 필요한 데이터
    String selectUserName(int code);            // 사용자 닉네임 찾기

}
