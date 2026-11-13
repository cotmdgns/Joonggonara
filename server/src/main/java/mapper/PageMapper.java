package mapper;

import com.project.Joonggonara.model.dto.UserProfileDTO;
import com.project.Joonggonara.model.vo.JGNotice;
import com.project.Joonggonara.model.vo.JGUserInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PageMapper {

    JGUserInfo selectUserInfo(int code);                    // 사용자 정보
    List<JGNotice> selectUserProduct(int code);
    List<JGNotice> purchaseHistoryProduct(int code);
    List<JGNotice> interestProduct(int code);
    List<JGNotice> saleProduct(int code);
    List<JGNotice> buyProduct(int code);
    List<JGNotice> freeProduct(int code);

    JGUserInfo pwdCheck(int code);
    void userIdUpdate(UserProfileDTO dto);

}
