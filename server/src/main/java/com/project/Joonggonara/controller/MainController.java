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

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/api/main/*")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class MainController {


    private String laptop = "C:\\github\\img\\notice\\";         // 내 파일 위치

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
        
        // 클라이언트에서 받은 데이터로 가져오기
        String minor = mainService.selectCategoryMinor(dto.getCategoryMinor());
        String minorList = mainService.selectCategoryMinor(dto.getCategoryMinorList());
        log.info("데이터 확인하기 : " + minor);
        log.info("데이터 확인하기 : " + minorList);

         // 게시글 따로 저장하기
        JGNotice notice = JGNotice.builder()
                .userCode(dto.getCode())
                .jGNoticeProductPrice(dto.isProductFree() ? "0" : dto.getProductPrice())
                .jGNoticeText(dto.getProductInfo())
                .jGNoticeTitle(dto.getProductName())
                .JGNoticeProductTypeMajor(dto.getCategoryMajor())
                .JGNoticeProductTypeMinor(minor)             // 이거는 코드로 받고 있어서 따로 카테고리 불러와야 함
                .JGNoticeProductTypeMinorList(minorList)         // 이것도 코드로 받고 있음
                .build();

        // 1단계 가공된 데이터를 DB에 전송하고 저장하기
        mainService.insertNotice(notice);
        int noticeCode = notice.getJGNoticeCode();

        // 이미지 따로 저장하기   [ 게시글 생성 후 키 따로 반납 받은다음 그걸로 생성하기 ]
        try {
            List<JGNoticeImg> list = new ArrayList<>();
            for(MultipartFile file : dto.getImgs()){
                String fileName= fileUpload(file,noticeCode,laptop);
                JGNoticeImg img = JGNoticeImg.builder()
                        .jGNoticeCode(notice.getJGNoticeCode())   // 위에있는 데이터가 정상적으로 생성 후 사용될 예정 [ 아직 코드 없음 ]
                        .jGNoticeImg(fileName)
                        .build();
                list.add(img);
            }
            // 2단계 가공 후 이미지이름을 DB에 저장하고 이미지파일은 따로 드라이브 어딘가에 저장하기.
            mainService.createImg(list);
        }catch (Exception e){
            log.info(""+ e);
        }

        // 끝

    }







    public String fileUpload(MultipartFile file,int Code,String url) throws IOException {
        // 랜덤한 이름값
        UUID uuid = UUID.randomUUID();
        // getOriginalFilename 이게 클라이언트에서 가져온 이미지 이름으로 변경?
        String fileName = uuid.toString()+"_"+file.getOriginalFilename();
        // File.separator 이거는 // 뜻
        // 디렉토리 경로
        File dir = new File(url + File.separator + Code);
        if (!dir.exists()) {
            dir.mkdirs(); // 없으면 생성
        }
        File copyFile = new File(dir, fileName);
        file.transferTo(copyFile);
        return fileName;
    }
}
