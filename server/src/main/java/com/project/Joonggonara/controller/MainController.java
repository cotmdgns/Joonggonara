package com.project.Joonggonara.controller;

import com.project.Joonggonara.model.dto.CategoryDTO;
import com.project.Joonggonara.model.dto.NoticeStateDTO;
import com.project.Joonggonara.model.vo.*;
import com.project.Joonggonara.service.AdminService;
import com.project.Joonggonara.service.MainService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/main/*")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class MainController {

    @Autowired
    private MainService mainService;

    @Autowired
    private AdminService adminService;

    // 공지사항에 있는 배너 사용중인 리스트 뽑아내기
    @GetMapping("mainBannerSelectList")
    public List<NotificationManagement> mainBannerSelectList(){
        // 리스트로 담겨 있음
        return mainService.mainBannerSelect();
    }

    // 메뉴바에 사용할 카테고리 메이저 리스트
    @GetMapping("categoryMajorList")
    public List<CategoryStateMajor> categoryMajorList(){
        return adminService.selectCategoryMajor();
    }

    // 메뉴바에 사용할 카테고리 마이너 리스트
    @GetMapping("categoryMinorList/{code}")
    public List<CategoryDTO> categoryMinorList(@PathVariable("code")int code){
        // 이거 따로 분리해서 보내야 함씨아아아발
        List<CategoryDTO> dto = new ArrayList<>();
        List<CategoryStateMinor> categoryStateMinorList = adminService.SelectCategoryMinor(code);
        for(CategoryStateMinor list : categoryStateMinorList){
            List<CategoryStateMinor> aw = adminService.categoryMinorListSelect(list.getCategoryStateMinorCode());
            CategoryDTO data = CategoryDTO.builder()
                    .categoryStateMinorBig(list)
                    .categoryStateMinorSmall(aw)
                    .build();
            dto.add(data);
        }
        return dto;
    }

    // 상품 게시글 생성하기
    @PostMapping("noticeCreate")
    public void noticeCreate(@ModelAttribute NoticeStateDTO dto){
        log.info("데이터 확인하기 : " + dto);

         // 게시글 따로 저장하기
        JGNotice notice = JGNotice.builder()
                .userCode(dto.getCode())
                .jGNoticeProductPrice(dto.isProductFree() ? "0" : dto.getProductPrice())
                .jGNoticeText(dto.getProductInfo())
                .jGNoticeTitle(dto.getProductName())
                .JGNoticeProductTypeMajor(dto.getCategoryMajor())
                .JGNoticeProductTypeMinor("null")             // 이거는 코드로 받고 있어서 따로 카테고리 불러와야 함
                .JGNoticeProductTypeMinorList("null")         // 이것도 코드로 받고 있음
                .build();
        // 위에있는걸로 생성하고

        // 이미지 따로 저장하기   [ 게시글 생성 후 키 따로 반납 받은다음 그걸로 생성하기 ]
        List<JGNoticeImg> list = new ArrayList<>();
        for(MultipartFile file : dto.getImgs()){

            JGNoticeImg img = JGNoticeImg.builder()
                    .jGNoticeCode(notice.getJGNoticeCode())   // 위에있는 데이터가 정상적으로 생성 후 사용될 예정 [ 아직 코드 없음 ]
                    .jGNoticeImg(file.getOriginalFilename())
                    .build();
        }

    }
}
