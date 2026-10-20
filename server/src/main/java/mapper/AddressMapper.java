package mapper;

import com.project.Joonggonara.model.vo.AddressInfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AddressMapper {

    // DB 주소 API
    AddressInfo addressAPI();
}
