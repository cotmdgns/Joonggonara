package mapper;

import com.project.Joonggonara.model.vo.AddressInfo;
import com.project.Joonggonara.model.vo.AddressInfoDetail;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AddressMapper {

    // DB 주소 API
    List<AddressInfo> addressAPI();
    // DB 주소 상세 API
    List<AddressInfoDetail> addressDetailAPI(int code);
}
